import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector, change } from 'redux-form'
import {connect} from 'react-redux'
import initialValues from '../basicInputInitialValues'
import './BasicInput.css'

let selector = formValueSelector('basicInput')

//Linking Redux states to React component's properties:
@connect(state => ({
	//Update for TN ?
}), dispatch => ({
	//Linking dispatchable Redux actions to React component's properties:
	//Update for TN ?
}))
@reduxForm({
	form: 'basicInput', // a unique name for this form
	initialValues,
	destroyOnUnmount: false,
})
export default class BasicInput extends Component {
	render() {
		let smic_tnd = 338
		
		//TN :
		//Je suis [un/une] [fonctionnaire/employé-e/professionnel-le libéral-e].
		//Je gagne [...] TND par [mois/an] [après/avant] paiement de l'impôt.
		//Je suis [célibataire/marié/chef de famille].
		//J'ai [0/1/2/3/plus de 4] enfant-s.
		
		return (
			<form className="basic-input">
				
				Je suis 
				<Field component="select" name="typeEmployé" >
					<option value="fonctionnaire">fonctionnaire</option>
					<option value="employe">employé-e</option>
					<option value="professionnel_liberal">professionnel-le libéral-e</option>
				</Field>
				.<br />
				
				Je gagne 
				<fieldset>
					<Field id="salaire" name="salaire" component="input" type="number"
					min="0" max="9999999" placeholder={smic_tnd} step="any" />
					<label htmlFor="salaire">
						&nbsp; TND &nbsp;
					</label>
				
					<span className="input-help">
						Rémunération totale<br/>
						<em>(min. <span data-source="smic_proratise" data-round>{smic_tnd}</span>)</em>
						, dont primes.
					</span>

					<span>par</span>	
					<Field component="select" name="périodeSalaireEntré" >
						<option value="mois">mois</option>
						<option value="an">an</option>
					</Field>	
					
					<Field component="select" name="typeSalaireEntré" >
						<option value="brut">avant</option>
						<option value="net">après</option>
					</Field>
					<span>paiement de l&#39;impôt.</span>

				</fieldset>
				<br />
				
				Je suis
				<Field component="select" name="statutFamilial" >
					<option value="celibataire">célibataire</option>
					<option value="marie">marié</option>
					<option value="chef_de_famille">chef de famille</option>
				</Field>
				.<br />
				
				J&#39;ai 
				<Field component="select" name="nbEnfants" >
					<option value="0enf">0</option>
					<option value="1enf">1</option>
					<option value="2enf">2</option>
					<option value="3enf">3</option>
					<option value="4enf">4</option>
					<option value="plus4enf">plus de 4</option>
				</Field>
				enfant-s.<br />
				
			</form>
		)
	}
}
