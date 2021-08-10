module.exports = {
	npmUrl: 'https://registry.npmjs.org/strview-cli',
	promptTypeList: [
		{
			type: 'list',
			message: 'Please select the template type to pull:',
			name: 'type',
			choices: [
				{
					name: 'strview-app@1.0.0',
					value: {
						url: 'https://github.com/maomincoding/strview-app.git',
						gitName: 'strview-app',
						val: 'strview-app',
					},
				},
			],
		},
	],
};
