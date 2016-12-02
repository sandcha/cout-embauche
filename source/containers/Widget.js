import React  from 'react'
import {connect} from 'react-redux'
import {formValueSelector} from 'redux-form'
import InputSection from '../components/InputSection'
import Results from '../containers/Results'
import Affiliation from '../components/Affiliation'
import {INITIAL_REQUEST, TOGGLE_ADVANCED_SECTION, UNSUBMIT_ALL} from '../actions'

let selector = formValueSelector('basicInput')

//Linking Redux states to React component's properties:
@connect(state => ({
	activeSection: state.activeSections.top,
	showAdvanced: state.activeSections.advanced,
	inputTouched: state.form.basicInput && (
		state.form.basicInput.active || state.form.basicInput.anyTouched),
	inputChanged: state.inputChanged
}), dispatch => ({
	//Linking dispatchable Redux actions to React component's properties:
	makeInitialRequest: () => dispatch({type: INITIAL_REQUEST}),
	toggleAdvancedSection: () => {
		dispatch({type: UNSUBMIT_ALL})
		dispatch({type: TOGGLE_ADVANCED_SECTION})
	}
}))
export default class Widget extends React.Component {
	render() {
		let {
			activeSection, showAdvanced, toggleAdvancedSection,
			inputTouched, inputChanged
		} = this.props
		return (
				<div className="widget">
					<InputSection
						showInput={activeSection == 'input'}
						showAdvanced={showAdvanced}
						toggleAdvancedSection={toggleAdvancedSection}
						inputTouched={inputTouched}
						inputChanged={inputChanged}
					/>
					<Results showDetails={activeSection == 'details'}/>
					<Affiliation />
				</div>
		)
	}
	componentDidMount() {
		this.props.makeInitialRequest()
	}
}
