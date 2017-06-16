Ext.define('MyFleet.view.viewLogin', {
	extend: 'Ext.window.Window',
	xtype: 'viewLogin',

	controller: 'ctrlLogin',
	title: "Connexion à l'application",

	requires: [
		'MyFleet.view.ctrlLogin',
		'Ext.form.Panel'
	],

	layout: 'fit',

	bodyPadding: 20,
	width: 320,
	autoSize: true,
	autoShow: true,

	items: [{
		xtype: 'formpanel',
		reference: 'form',
		items: [
			{
				xtype: 'textfield',
				allowBlank: false,
				required: true,
				label: "Identifiant",
				name: 'user',
				placeholder: 'identifiant'
			}, {
				xtype: 'passwordfield',
				allowBlank: false,
				required: true,
				label: "Mot de passe",
				name: 'pass',
				placeholder: "mot de passe"
			}, {
				xtype: 'checkbox',
				boxLabel: "Se souvenir de moi",
				name: 'remember'
			}],
		buttons: [{
			text: "Se connecter",
			handler: 'onLoginClick'
		}]
	}]
});