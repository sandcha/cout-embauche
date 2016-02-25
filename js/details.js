var React = require('react');
var ReactDOM = require('react-dom');
var lignesJSON = require('json!yaml!../assets/details.yaml')
import Detail from './Detail.js'

class Details extends React.Component {
	render() {
		return (
      <div>
  			<summary>Cotisations détaillées</summary>
				<table>
  				<caption>Cotisations employeur</caption>
  				{this.selectLines({cible: 'employeur', type: 'charge'})}
  			</table>
				<table>
  				<caption>Cotisations salarié</caption>
  				{this.selectLines({cible: 'salarié', type: 'charge'})}
  			</table>
      </div>
		)

	}
	selectLines(criteria){

			return lignesJSON
				.filter((ligne) => {
					return (
						Object
							.keys(criteria)
							.reduce((memo, key) => criteria[key] == ligne[key] && memo, true)
						)
				})
				.map((ligne) => <Detail data={ligne} key={ligne.id} />)
	}
}

ReactDOM.render(
	<Details/>,
	document.getElementById('taxes')
);
