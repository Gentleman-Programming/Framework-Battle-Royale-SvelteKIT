import { writable } from 'svelte/store';
import type { User } from '../models';

export const emptyUserState: User = {
	name: ''
};

export const userState = writable<User>(emptyUserState);
