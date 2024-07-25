/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import pkg from 'uuid';
const { v4 } = pkg;

export function tester() {
	console.log('helloworld');
}

/**
 * @param {any} browser
 */

export function checkSession(browser) {
	let session = browser ? window.localStorage.getItem('session') ?? 0 : 0;
	if (session == 0) {
		return false;
	}
	return true;
}
export function getSession() {
	let session = window.localStorage.getItem('session') ?? 'none';
	return session;
}
export function createSession() {
	const uuid = v4();
	return uuid;
}
