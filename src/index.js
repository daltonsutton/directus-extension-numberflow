import DisplayComponent from './display.vue';
import './styles.css';

export default {
	id: 'numberflow',
	name: 'NumberFlow',
	icon: '123',
	description: 'NumberFlow component',
	component: DisplayComponent,
	options: [
		{
			field: 'trailingZeroDisplay',
			type: 'boolean',
			name: 'Display trailing zeros',
			meta: {
				interface: 'boolean',
				options: {
					label: 'Yes',
				},
				width: 'full',
			},
		},
		{
			field: 'currency',
			type: 'boolean',
			name: 'Display as currency',
			meta: {
				interface: 'boolean',
				options: {
					label: 'Yes',
				},
				width: 'half',
			},
		},
		{
			field: 'currencyType',
			type: 'string',
			name: 'Currency Type',
			meta: {
				interface: 'select-dropdown',
				options: {
					label: 'Currency Type',
					choices: [
						{
							text: 'USD',
							value: 'USD',
						},
						{
							text: 'EUR',
							value: 'EUR',
						},
						{
							text: 'GBP',
							value: 'GBP',
						},
					],
				},
				width: 'half',
			},
		},
		{
			field: 'prefix',
			type: 'string',
			name: 'Prefix',
			meta: {
				interface: 'string',
				width: 'half',
			},
		},
		{
			field: 'suffix',
			type: 'string',
			name: 'Suffix',
			meta: {
				interface: 'string',
				width: 'half',
			},
		},
	],
	types: ['integer', 'float', 'double', 'decimal'] 
	// Couldn't get big integer to work.
	// Not sure if it's because I'm testing using SQLite?
};
