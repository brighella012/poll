import type { CoalitionType } from './coalitions';
import type { BorderColor } from '../types/global';

export interface RegionalCandidate {
	firstName: string;
	lastName: string;
	percentages: number | [number, number];
	coalition: CoalitionType;
	borderColor: BorderColor;
	imageSrc: string;
}

export interface RegionalData {
	title: string;
	href: string;
	candidates: RegionalCandidate[];
}

export const REGIONAL_DATA: RegionalData[] = [
	{
		title: 'REGIONE 1',
		href: '/',
		candidates: [
			{
				firstName: 'Fontana',
				lastName: 'Attilio',
				coalition: 'CENTRO DESTRA',
				imageSrc: '/images/fontana.jpg',
				borderColor: 'blue',
				percentages: [12, 15]
			},
			{
				firstName: 'Fontana',
				lastName: 'Attilio',
				coalition: 'MOVIMENTO 5 STELLE',
				imageSrc: '/images/fontana.jpg',
				borderColor: 'yellow',
				percentages: 12
			},
			{
				firstName: 'Fontana',
				lastName: 'Attilio',
				coalition: 'CENTRO SINISTRA',
				imageSrc: '/images/fontana.jpg',
				borderColor: 'red',
				percentages: [12, 15]
			}
		]
	},
	{
		title: 'REGIONE 2',
		href: '/',
		candidates: [
			{
				firstName: 'Fontana',
				lastName: 'Attilio',
				coalition: 'CENTRO DESTRA',
				imageSrc: '/images/fontana.jpg',
				borderColor: 'blue',
				percentages: [12, 15]
			},
			{
				firstName: 'Fontana',
				lastName: 'Attilio',
				coalition: 'MOVIMENTO 5 STELLE',
				imageSrc: '/images/fontana.jpg',
				borderColor: 'yellow',
				percentages: 12
			},
			{
				firstName: 'Fontana',
				lastName: 'Attilio',
				coalition: 'CENTRO SINISTRA',
				imageSrc: '/images/fontana.jpg',
				borderColor: 'red',
				percentages: [12, 15]
			}
		]
	}
];
