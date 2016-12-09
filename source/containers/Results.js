import React, { Component } from 'react'
import { formValueSelector } from 'redux-form'
import {connect} from 'react-redux'
import Summary from '../components/Summary'
import Details from '../components/Details'
import BarChart from '../components/BarChart'
//import WaterfallChart from '../components/WaterfallChart'
import {TOGGLE_TOP_SECTION, TOGGLE_ADVANCED_SECTION} from '../actions'
import './Results.css'

let fmt = new Intl.NumberFormat('fr-FR').format

let selector = formValueSelector('basicInput')

@connect(state => ({
	//typeEntreprise: selector(state, 'typeEntreprise'),
	typeSalaireEntré: selector(state, 'typeSalaireEntré'),
	salaireNetAPayer: selector(state, 'salaire'),
	results: state.results
	//advancedQuestions: name => advancedSelector(state, name)
}), dispatch => ({
	toggleSection: () =>
		dispatch({type: TOGGLE_TOP_SECTION}),
	//openAdvancedSection: () => {
	//	dispatch({type: TOGGLE_TOP_SECTION})
	//	dispatch({type: TOGGLE_ADVANCED_SECTION})
	//}
}))
export default class Results extends Component {
	render() {
		
		console.log(this.props)
		console.log(this.props.results)
		
		return (
			<div>
				<Summary {...this.props} humanizeFigures={this.humanizeFigures(0)}/>
				{this.props.showDetails &&
					<div>
						<Details
						results={this.props.results}
						humanizeFigures={this.humanizeFigures(2)} />
						
						<br />
						
						<BarChart 
						results={this.props.results}
						humanizeFigures={this.humanizeFigures(2)}/>
						
						<br />
						
					</div>
				}
			</div>
		)
	}
	humanizeFigures = decimalDigits => value => value == null ? '...' : fmt(value.toFixed(decimalDigits))

}
