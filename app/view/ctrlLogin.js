Ext.define('MyFleet.view.ctrlLogin', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.ctrlLogin',

	onLoginClick: function() {
		var form = this.lookupReference('form');

		if (form.validate()) {
			Ext.Msg.alert('Login Success', 'You have been logged in!');
		} else {
			Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
		}
	}
});