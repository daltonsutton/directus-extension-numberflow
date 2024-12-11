import DisplayComponent from './display.vue';
import './styles.css';

export default {
	id: 'numberflow',
	name: 'Number Flow',
	icon: '123',
	description: 'Number Flow component',
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
							"text": "USD (US Dollar)",
							"value": "USD"
						},
						{
							"text": "EUR (Euro)",
							"value": "EUR"
						},
						{
							"text": "JPY (Japanese Yen)",
							"value": "JPY"
						},
						{
							"text": "GBP (British Pound)",
							"value": "GBP"
						},
						{
							"text": "AUD (Australian Dollar)",
							"value": "AUD"
						},
						{
							"text": "CAD (Canadian Dollar)",
							"value": "CAD"
						},
						{
							"text": "CHF (Swiss Franc)",
							"value": "CHF"
						},
						{
							"text": "CNY (Chinese Yuan)",
							"value": "CNY"
						},
						{
							"text": "SEK (Swedish Krona)",
							"value": "SEK"
						},
						{
							"text": "NZD (New Zealand Dollar)",
							"value": "NZD"
						},
						{
							"text": "KRW (South Korean Won)",
							"value": "KRW"
						},
						{
							"text": "SGD (Singapore Dollar)",
							"value": "SGD"
						},
						{
							"text": "NOK (Norwegian Krone)",
							"value": "NOK"
						},
						{
							"text": "MXN (Mexican Peso)",
							"value": "MXN"
						},
						{
							"text": "INR (Indian Rupee)",
							"value": "INR"
						},
						{
							"text": "RUB (Russian Ruble)",
							"value": "RUB"
						},
						{
							"text": "ZAR (South African Rand)",
							"value": "ZAR"
						},
						{
							"text": "TRY (Turkish Lira)",
							"value": "TRY"
						},
						{
							"text": "BRL (Brazilian Real)",
							"value": "BRL"
						},
						{
							"text": "TWD (New Taiwan Dollar)",
							"value": "TWD"
						},
						{
							"text": "DKK (Danish Krone)",
							"value": "DKK"
						},
						{
							"text": "PLN (Polish Zloty)",
							"value": "PLN"
						},
						{
							"text": "THB (Thai Baht)",
							"value": "THB"
						},
						{
							"text": "IDR (Indonesian Rupiah)",
							"value": "IDR"
						},
						{
							"text": "HUF (Hungarian Forint)",
							"value": "HUF"
						},
						{
							"text": "CZK (Czech Koruna)",
							"value": "CZK"
						},
						{
							"text": "ILS (Israeli Shekel)",
							"value": "ILS"
						},
						{
							"text": "CLP (Chilean Peso)",
							"value": "CLP"
						},
						{
							"text": "PHP (Philippine Peso)",
							"value": "PHP"
						},
						{
							"text": "AED (United Arab Emirates Dirham)",
							"value": "AED"
						},
						{
							"text": "COP (Colombian Peso)",
							"value": "COP"
						},
						{
							"text": "SAR (Saudi Riyal)",
							"value": "SAR"
						},
						{
							"text": "MYR (Malaysian Ringgit)",
							"value": "MYR"
						},
						{
							"text": "RON (Romanian Leu)",
							"value": "RON"
						},
						{
							"text": "VND (Vietnamese Dong)",
							"value": "VND"
						},
						{
							"text": "EGP (Egyptian Pound)",
							"value": "EGP"
						},
						{
							"text": "BDT (Bangladeshi Taka)",
							"value": "BDT"
						},
						{
							"text": "PKR (Pakistani Rupee)",
							"value": "PKR"
						},
						{
							"text": "NGN (Nigerian Naira)",
							"value": "NGN"
						},
						{
							"text": "ARS (Argentine Peso)",
							"value": "ARS"
						},
						{
							"text": "HKD (Hong Kong Dollar)",
							"value": "HKD"
						},
						{
							"text": "QAR (Qatari Riyal)",
							"value": "QAR"
						},
						{
							"text": "KWD (Kuwaiti Dinar)",
							"value": "KWD"
						}
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
