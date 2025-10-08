import { writable } from 'svelte/store';

export type PageType = 'home' | 'lessons';

export const currentPage = writable<PageType>('home');

export function setCurrentPage(page: PageType) {
	currentPage.set(page);
}
