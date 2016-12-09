import React from 'react'
import { percentage, euro } from './formValueTypes.js'

let	today = new Date()
let smic_tnd = 338

export default {

	// DEFAULTS : These inputs do not exist, but the API needs them
	'defaults': {
		adapt: () => ({
			//allegement_fillon_mode_recouvrement: 'anticipe_regularisation_fin_de_periode',
			//allegement_cotisation_allocations_familiales_mode_recouvrement: 'anticipe_regularisation_fin_de_periode',
			//contrat_de_travail_debut: today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2),
		}),
	},

	
	/*****************************
	 BASIC INPUT FORM FIELDS */
	
	//TUNISIE
	
	'typeEmployé': {
		initial: 'employe',
		adapt: () => ({}),
	},
	
	'salaire': {
		initial: smic_tnd,
		//Building url inputs :
		adapt: (raw, value, values) => ({
			// Use other values to determine the name of this key
				'salaire_net_a_payer': value
		}),
	},
	
	'périodeSalaireEntré': {
		initial: 'mois',
		adapt: () => ({}),
	},
	
	'typeSalaireEntré': {
		initial: 'brut',
		adapt: () => ({}),
	},
	
	'statutFamilial': {
		initial: 'celibataire',
		adapt: () => ({}),
	},
	
	'nbEnfants': {
		initial: 0,
		adapt: () => ({}),
	}
	

}
