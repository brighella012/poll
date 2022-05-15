import { writable } from "svelte/store";
import type {Chart} from 'chart.js';

export const stackedCharts = writable<Chart<"bar", number[], string>[]>([]);