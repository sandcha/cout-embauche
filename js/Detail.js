var React = require('react');
var ReactDOM = require('react-dom');

export default class Detail extends React.Component {
	render() {
    let d = this.props.data
    return (
      <tr>
        <th>{d.nom}</th>
        <td><span data-source={d.id}></span>&nbsp;€</td>
      </tr>
		)
  }
}
