import { writable } from 'svelte/store';

export const dialogState = writable<boolean>(false);
