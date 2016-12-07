import React, {Component} from 'react'
import { connect } from 'react-redux'
import Group from '../components/Group'
import ResultATMP from '../components/ResultATMP'
import {reduxForm, formValueSelector} from 'redux-form'
import { percentage } from '../formValueTypes.js'
import validate from '../conversation-validate'

let advancedInputSelector = formValueSelector('advancedQuestions'),
	basicInputSelector = formValueSelector('basicInput')

@reduxForm({
})
@connect(state => ({	
}))
class Conversation extends Component {
	render() {
		let { formValue, steps, themeColours: {colour, textColour}} = this.props
		let effectifEntreprise = formValue('effectifEntreprise', 'basicInput')

		/* C'est ici qu'est définie la suite de questions à poser. */
		return (
		<div></div>)
	}
}

export default Conversation
