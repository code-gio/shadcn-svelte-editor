import { writable, type Writable } from 'svelte/store';

export const componentStore: Writable<string | null> = writable(null);
export const variantStore: Writable<any> = writable({});
