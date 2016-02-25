require('./css/reset.css')
require('./css/main.css')
require('./css/affiliation.css')
require('./css/details.css')
require('./css/tooltip.css')

document.write(require('./assets/embauche.html'))

require('./js/details.js')
require('expose?Embauche!./js/index')

require('./lib/details.polyfill.js')
