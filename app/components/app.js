var Vue = require("vue");

var App = {

	/**
	 * Initialise
	 */
	init : function () {
		
		new Vue({
			"el" : "#app"
		});
		
	}
}

module.exports = function() {
	App.init();
}