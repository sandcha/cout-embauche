var UI = require('./ui.js'),
	OpenFisca = require('./openfisca.js'),
	debounce = require('../lib/debounce.js'),
	buffer

function getLastResults() { return buffer }

function addBooleanParameters(input) {

	var boolean_parameters = {
		employee: [ 'stagiaire', 'apprenti' ],
	}

	for (var provider in boolean_parameters) {
		var key = document.querySelector('[data-provides="' + provider + '"]').value

		if (boolean_parameters[provider].indexOf(key) > -1)
			input[key] = true
	}

	return input
}


/** Handle events from the given form to update data.
*/
function bindToForm(form) {
	form.addEventListener('change', UI.reflectParameterChange)

	var handleBasicFormChanges = debounce(openFiscaRequestBuilder(form), 300)

	handleBasicFormChanges()

	var handleFormChanges = function(event) {
		switch (event.target.name) {
		case 'code_postal_entreprise':
			handlePostalCodeInput(event.target.value, handleBasicFormChanges)
			break
		default: handleBasicFormChanges()
		}
	}

	form.addEventListener('change', handleFormChanges)
	form.addEventListener('keyup', handleFormChanges)
}

function openFiscaRequestBuilder(form) {
	return function() {
		var input = collectInput(form)

		input = addBooleanParameters(input)

		// Additional parameters
		var today = new Date()
		input['contrat_de_travail_debut'] = today.getFullYear() + '-' + (today.getMonth() + 1)

		// Base url containing the list of desired output variables
		var baseUrl = form.action

		OpenFisca.request(input, baseUrl, handleAPIResponse)
	}
}

function handleAPIResponse(error, values, response) {
	if (error) {
		if (response && response.error)
			return UI.showError(response.error)

		UI.showError({ message: error })
		throw error
	}

	buffer = values
	UI.display(values)
}

// Collect form fields that will be the API input
function collectInput(form) {
	var result = {},
		elements = form.elements

	// switch to reduce
	Array.prototype.forEach.call(elements, function(element) {
		if (! element.name)
			return

		var value = element.value

		if (element.type == 'number')
			value = Number(element.value.replace(',', '.'))	// IE doesn't support locale number formats

		/* We are simulating a recruitment,
		hence requesting salaries with the new size of the entreprise */
		if (element.name == 'effectif_entreprise')
			value ++

		result[element.name] = value
	})

	return result
}

/*
code_postal_entreprise <input> value is used to dynamically
fetch a list of options for the the depcom_entreprise <select> element
*/
function handlePostalCodeInput(codePostal, next) {

	if (codePostal.length !== 5)
		return UI.displayCommunesFetchResults()

	var request = new XMLHttpRequest()
	request.onload = function() {
		try {
			if (request.status !== 200)	throw new Error(request.responseText)

			var data = JSON.parse(request.responseText)
			if (data.length === 0) {
				UI.displayCommunesFetchResults('Aucune commune correspondante trouvée')
				return
			}
			UI.displayCommunesFetchResults('', data)
		} catch (err) {
			UI.displayCommunesFetchResults('Le code postal n\'a pas pu être pris en compte')
			console.error(err)
		} finally {
			next()
		}
	}

	request.onerror = function() {
		UI.displayCommunesFetchResults('Le code postal n\'a pas pu être pris en compte (réseau faible ?)')
		next()
	}

	request.open('GET', 'https://apicarto.sgmap.fr/codes-postaux/communes/' + codePostal)
	request.send()
}

bindToForm(document.querySelector('.SGMAPembauche form'))

var jsNodes = document.querySelectorAll('.SGMAPembauche .js-only')

for (var i = 0; i < jsNodes.length; i++)
	jsNodes[i].className = jsNodes[i].className.replace('js-only', '')

module.exports = {
	request: OpenFisca.request,
	getLastResults: getLastResults,
}
