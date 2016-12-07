import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts' // Expects that Highcharts was
												// loaded in the code.


function draw(salaireDeBase, salaireNetAPayer) {
	
	// variable qui recoit le montant d'impot payé
	var salaire_de_base= salaireDeBase
	var salaire_net_a_payer= salaireNetAPayer
	var impot = salaire_de_base-salaire_net_a_payer
	
	// affectation distribution impôts par dépense
	var m_education = 0.17 * impot
	var m_enseignement_sup_recherche_scientifique = 0.08 * impot
	var m_env_developpement_durable = 0.08 * impot
	var m_equipement_habitat_amenagement_territoire = 0.08 * impot
	var m_industrie_energie_mines = 0.08 * impot
	var m_argriculture_res_hydrauliques_peche = 0.05 * impot
	var m_interieur = 0.05 * impot
	var m_dev_invest_coop = 0.05 * impot
	var m_tourisme_artisanat = 0.03 * impot
	var arp = 0.02 * impot
	var csm = 0.02 * impot
	var depenses_imprevues_non_reparties = 0.02 * impot
	var dette_publique = 0.02 * impot
	var ivd = 0.02 * impot
	var isie = 0.02 * impot
	var m_defense_nationale = 0.02 * impot
	var m_finances = 0.02 * impot
	var m_tech_com_economie_numerique = 0.02 * impot
	var m_commerce = 0.02 * impot
	var m_culture_sauvegarde_patrimoine = 0.01 * impot
	var m_femme_famille_enfance = 0.01 * impot
	var m_formation_professionnelle_emploi = 0.01 * impot
	var m_jeunesse_sports = 0.01 * impot
	var m_justice = 0.01 * impot
	var m_sante = 0.01 * impot
	var m_affaires_etrangeres = 0.01 * impot
	var m_affaires_religieuses = 0.01 * impot
	var m_affaires_sociales = 0.01 * impot
	var m_domaines_etat_affaires_foncieres = 0.01 * impot
	var m_transport = 0.01 * impot
	var presidence_republique = 0.01 * impot
	var presidence_gouverment = 0.01 * impot
	
	// creation du graphique
	return {
	    chart: {
	      type: 'bar'
	    },
	    title: {
	      text: 'Open fisca: usage de vos impôts'
	    },
	    xAxis: {
	      categories: ['Vos impôts contribuent au']
	    },
	    yAxis: {
	      min: 0,
	      title: {
	        text: 'Utilisation de vos impôts en dinars'
	      }
	    },
	    legend: {
	      reversed: true
	    },
	    tooltip: {
	      valueSuffix: ' dinars'
	    },
	    plotOptions: {
	      series: {
	        stacking: 'normal'
	      }
	    },
	    series: [{
	      name: 'presidence gouverment',
	      data: [presidence_gouverment]
	    }, {
	      name: 'presidence republique',
	      data: [presidence_republique]
	    }, {
	      name: 'Ministère transport',
	      data: [m_transport]
	    }, {
	      name: 'Ministère domaines etat affaires foncieres',
	      data: [m_domaines_etat_affaires_foncieres]
	    }, {
	      name: 'Ministère affaires sociales',
	      data: [m_affaires_sociales]
	    }, {
	      name: 'Ministère affaires religieuses',
	      data: [m_affaires_religieuses]
	    }, {
	      name: 'Ministère affaires etrangeres',
	      data: [m_affaires_etrangeres]
	    }, {
	      name: 'Ministère sante',
	      data: [m_sante]
	    }, {
	      name: 'Ministère justice',
	      data: [m_justice]
	    }, {
	      name: 'Ministère jeunesse sports',
	      data: [m_jeunesse_sports]
	    }, {
	      name: 'Ministère formation professionnelle emploi',
	      data: [m_formation_professionnelle_emploi]
	    }, {
	      name: 'Ministère femme famille enfance',
	      data: [m_femme_famille_enfance]
	    }, {
	      name: 'Ministère culture sauvegarde patrimoine',
	      data: [m_culture_sauvegarde_patrimoine]
	    }, {
	      name: 'Ministère commerce',
	      data: [m_commerce]
	    }, {
	      name: 'Ministère tech com economie numerique',
	      data: [m_tech_com_economie_numerique]
	    }, {
	      name: 'Ministère finances',
	      data: [m_finances]
	    }, {
	      name: 'Ministère defense_nationale',
	      data: [m_defense_nationale]
	    }, {
	      name: 'isie',
	      data: [isie]
	    }, {
	      name: 'ivd',
	      data: [ivd]
	    }, {
	      name: 'Dette publique',
	      data: [dette_publique]
	    }, {
	      name: 'Depenses imprevues non reparties',
	      data: [depenses_imprevues_non_reparties]
	    }, {
	      name: 'Conseil surp. de la magistrature',
	      data: [csm]
	    }, {
	      name: 'Assemblée des Représentants du peuple',
	      data: [arp]
	    }, {
	      name: 'Ministère tourisme artisanat',
	      data: [m_tourisme_artisanat]
	    }, {
	      name: 'Ministère dev invest coop',
	      data: [m_dev_invest_coop]
	    }, {
	      name: 'Ministère interieur',
	      data: [m_interieur]
	    }, {
	      name: 'Ministère argriculture res hydrauliques peche',
	      data: [m_argriculture_res_hydrauliques_peche]
	    }, {
	      name: 'Ministère industrie energie mines',
	      data: [m_industrie_energie_mines]
	    }, {
	      name: 'Ministère equipement habitat amenagement territoire',
	      data: [m_equipement_habitat_amenagement_territoire]
	    }, {
	      name: 'Ministère du Developpement durable',
	      data: [m_env_developpement_durable]
	    }, {
	      name: 'Ministrère Enseignement sup. recherche scientifique',
	      data: [m_enseignement_sup_recherche_scientifique]
	    }, {
	      name: 'Ministère Education',
	      data: [m_education],
	      visible: true
	    }]
	  }
}

export default class BarChart extends Component {
	render() {
		let salaireImposable = this.props.results.salaire_imposable,
		salaireNetAPayer = this.props.results.salaire_net_a_payer
	
		return (
				<ReactHighcharts config = {draw(salaireImposable, salaireNetAPayer)}></ReactHighcharts>
				)
	}
}