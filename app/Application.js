Ext.define('MyFleet.Application', {
	extend: 'Ext.app.Application',
	name: 'MyFleet',

	requires: [
		'Ext.MessageBox',
		'Ext.Toolbar',
		'MyFleet.view.viewLogin'
	],

	launch: function() {

		/*Ext.Loader.setConfig({
			enabled: true,
			disableCaching: true,
			paths: {
			}
		});*/

		console.log("on est dans launch()");

		var win = Ext.create({
			xtype: 'viewLogin'
		});
		win.show();
	}

});