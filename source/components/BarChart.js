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
	      text: 'Imposition de : '+(salaireDeBase - salaireNetAPayer) + ' dinars'
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
	      name: 'Présidence du Gouverment',
	      data: [presidence_gouverment],
	      visible: true
	    }, {
	      name: 'Présidence de la République',
	      data: [presidence_republique],
	      visible: true
	    }, {
	      name: 'Ministère du transport',
	      data: [m_transport],
	      visible: false
	    }, {
	      name: "Ministère des domaines de l'état et des affaires foncières",
	      data: [m_domaines_etat_affaires_foncieres],
	      visible: false
	    }, {
	      name: 'Ministère des affaires sociales',
	      data: [m_affaires_sociales],
	      visible: false
	    }, {
	      name: 'Ministère des affaires religieuses',
	      data: [m_affaires_religieuses],
	      visible: false
	    }, {
	      name: 'Ministère des affaires étrangères',
	      data: [m_affaires_etrangeres],
	      visible: false
	    }, {
	      name: 'Ministère de la santé',
	      data: [m_sante],
	      visible: false
	    }, {
	      name: 'Ministère de la justice',
	      data: [m_justice],
	      visible: false
	    }, {
	      name: 'Ministère de la jeunesse et des sports',
	      data: [m_jeunesse_sports],
	      visible: false
	    }, {
	      name: "Ministère de la formation professionnelle et de l'emploi",
	      data: [m_formation_professionnelle_emploi],
	      visible: false
	    }, {
	      name: "Ministère de la femme, de la famille et de l'enfance",
	      data: [m_femme_famille_enfance],
	      visible: true
	    }, {
	      name: 'Ministère de la culture et de la sauvegarde du patrimoine',
	      data: [m_culture_sauvegarde_patrimoine],
	      visible: false
	    }, {
	      name: 'Ministère du commerce',
	      data: [m_commerce],
	      visible: true
	    }, {
	      name: "Ministère des technologies, de la communication et de l'économie numérique",
	      data: [m_tech_com_economie_numerique],
	      visible: true
	    }, {
	      name: 'Ministère des finances',
	      data: [m_finances],
	      visible: true
	    }, {
	      name: 'Ministère de la défense nationale',
	      data: [m_defense_nationale],
	      visible: true
	    }, {
	      name: 'ISIE',
	      data: [isie],
	      visible: true
	    }, {
	      name: 'IVD',
	      data: [ivd],
	      visible: true
	    }, {
	      name: 'Dette publique',
	      data: [dette_publique],
	      visible: true
	    }, {
	      name: 'Depenses imprévues et non réparties',
	      data: [depenses_imprevues_non_reparties],
	      visible: true
	    }, {
	      name: 'Conseil supérieur de la magistrature',
	      data: [csm],
	      visible: true
	    }, {
	      name: 'Assemblée des représentants du peuple',
	      data: [arp],
	      visible: true
	    }, {
	      name: "Ministère du tourisme et de l'artisanat",
	      data: [m_tourisme_artisanat],
	      visible: true
	    }, {
	      name: "Ministère du développement, de l'investissement et de la coopération internationale",
	      data: [m_dev_invest_coop],
	      visible: true
	    }, {
	      name: "Ministère de l'intérieur",
	      data: [m_interieur],
	      visible: true
	    }, {
	      name: "Ministère de l'argriculture, des ressources hydrauliques et de la pêche",
	      data: [m_argriculture_res_hydrauliques_peche],
	      visible: true
	    }, {
	      name: "Ministère de l'industrie, de l'énergie et des mines",
	      data: [m_industrie_energie_mines],
	      visible: true
	    }, {
	      name: 'Ministère equipement habitat amenagement territoire',
	      data: [m_equipement_habitat_amenagement_territoire],
	      visible: true
	    }, {
	      name: "Ministère de l'environnement et du développement durable",
	      data: [m_env_developpement_durable],
	      visible: true
	    }, {
	      name: "Ministrère de l'enseignement supérieur et de la recherche scientifique",
	      data: [m_enseignement_sup_recherche_scientifique],
	      visible: true
	    }, {
	      name: "Ministère de l'éducation",
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
				//<ReactHighcharts config = {draw(salaireImposable, salaireNetAPayer)}></ReactHighcharts>
				<ReactHighcharts config = {draw(17710, 14700)}></ReactHighcharts>
				)
	}
}