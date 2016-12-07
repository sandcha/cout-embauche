import React, { Component } from 'react'
import {connect} from 'react-redux'
import BasicInput from '../containers/BasicInput'
import InfoZone from './InfoZone'

@connect(state => ({themeColours: state.themeColours}))
export default class Input extends Component {
	render() {
		let {showInput} = this.props

		return (
			<div hidden={!showInput}>
				<BasicInput />
				<InfoZone {...this.props} />
			</div>
		)
	}
}
