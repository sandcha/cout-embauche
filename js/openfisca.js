var UI = require('./ui.js')

module.exports = {
	request: request,
	get: get,
}

/** Serializes a shallow object into a series of query string parameters.
* A naive and shallow implementation.
*
*@param		{Object}	source
*@returns	{String}	The source object as a query string (with no leading '?').
*@private
*/
function serializeObject(source) {
	var result = []

	for (var key in source) {
		if (key && source.hasOwnProperty(key))
			result.push(encodeURI(key + '=' + source[key]))
	}

	return result.join('&')
}

/** Helper to call the OpenFisca Web API's /formula endpoint
*
*@param	{Object}	[input]	An object whose properties will be appended to the URL as query-string parameters representing OpenFisca input variable ids and their values.
*@param	{String}	[baseUrl]	Url pointing to an instance of the OpenFisca Web API and containing the desired output variables
*@param	{Function<[XMLHttpRequest|SyntaxError], Object, Object>}	callback	A callback that will be called with three parameters: an optional error if something went wrong, the OpenFisca-computed values, and the full OpenFisca response if you want everything it sends back.
*/

function request(input, baseUrl, callback) {
	var request = new XMLHttpRequest()

	request.onload = function openFiscaOnloadHandler() {
		try {
			var data = JSON.parse(request.responseText)
		} catch (err) {
			callback(err)
		}

		callback(request.status != 200 && request, data.values, data)
	}

	request.onerror = callback.bind(null, request)

	var url = baseUrl + '?' + serializeObject(input)

	request.open('GET', url)
	request.send()
}

var form = UI.getForm()

/** Computes values based on the current main form state and the given additional parameters.
*
*@param	{Object}	[additionalParameters]	An object whose properties will be appended to the URL as query-string parameters.
*@param	{Function<[XMLHttpRequest|SyntaxError], Object, Object>}	callback	A callback that will be called with three parameters: an optional error if something went wrong, the OpenFisca-computed values, and the full OpenFisca response if you want everything it sends back.
*/
function get(additionalParameters, callback) {
	// Base url containing the list of desired output variables
	var baseUrl = form.action
	var input = UI.collectInput()

	Object.keys(additionalParameters).forEach(function(key) {
		input[key] = additionalParameters[key]
	})

	request(input, baseUrl, callback)
}
