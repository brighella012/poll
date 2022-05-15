import type { BorderColor } from '../types/global';

export interface Coalition {
	title: string;
	senatePercentages: [number, number];
	roomPercentages: [number, number];
	imagesSrc?: string[];
	borderColor: BorderColor;
}

export type CoalitionType =
	| 'CENTRO SINISTRA'
	| 'CENTRO DESTRA'
	| 'MOVIMENTO 5 STELLE'
	| 'LIBERI E UGUALI';

export const COALITIONS: Coalition[] = [
	{
		title: 'CENTRO SINISTRA',
		senatePercentages: [17.43, 20.06],
		roomPercentages: [18, 21],
		borderColor: 'red',
		imagesSrc: ['/images/loghi/civ.jpg', '/images/loghi/civ.jpg', '/images/loghi/civ.jpg']
	},
	{
		title: 'CENTRO DESTRA',
		senatePercentages: [34, 37],
		roomPercentages: [27, 30],
		borderColor: 'blue'
	},
	{
		title: 'MOVIMENTO 5 STELLE',
		senatePercentages: [29, 32],
		roomPercentages: [30, 33],
		borderColor: 'yellow'
	},
	{
		title: 'LIBERI E UGUALI',
		senatePercentages: [8, 11],
		roomPercentages: [18, 21],
		borderColor: 'red'
	}
];
