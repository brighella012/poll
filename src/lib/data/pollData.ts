import type { PartyType } from './seats';

export interface PollData {
	label: PartyType;
	color: string;
	value: number;
}

export const CHAMBERS_POLL_DATA: PollData[] = [
	{
		color: '#fc3116',
		value: 47.2,
		label: 'Partito Democratico'
	},
	{
		color: '#eecc00',
		value: 23.4,
		label: 'Movimento 5'
	},
	{
		color: '#2b6dab',
		value: 11.3,
		label: 'Forza Italia'
	},
	{
		color: '#096224',
		value: 14.2,
		label: 'Lega'
	},
	{
		color: '#074A71',
		value: 5.7,
		label: 'Frateli'
	},
	{
		color: '#FC3116',
		value: 10.8,
		label: 'Liberi e Uguali'
	}
];

export const SENANTE_POLL_DATA: PollData[] = [
	{
		color: '#fc3116',
		value: 47.2,
		label: 'Partito Democratico'
	},
	{
		color: '#eecc00',
		value: 23.4,
		label: 'Movimento 5'
	},
	{
		color: '#2b6dab',
		value: 11.3,
		label: 'Forza Italia'
	},
	{
		color: '#525252',
		value: 1.2,
		label: 'Casapound Italia'
	},
	{
		color: '#074A71',
		value: 3.2,
		label: "Noi con l'Italia UDC"
	},
	{
		color: '#FC3116',
		value: 3,
		label: '+Europa'
	}
];
