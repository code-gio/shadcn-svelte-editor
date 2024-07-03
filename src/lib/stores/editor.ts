import { writable, type Writable } from 'svelte/store';

export const selectedComponent: Writable<string | null> = writable(null);
