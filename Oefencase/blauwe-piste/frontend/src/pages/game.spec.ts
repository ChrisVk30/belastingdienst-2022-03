import { tick } from 'svelte';
import Counter from '../lib/Counter.svelte';

describe('Sample Test Block', () => {
	it('sample test which should be true', () => {
		expect(true).toBe(true);
	});

	it('works', async () => {
		const host = document.createElement('div');
		document.body.appendChild(host);
		const counter = new Counter({ target: host });
		expect(counter).toBeTruthy();

		host.querySelector('button')!.click();
		await tick();
		expect(host.querySelector('button')!.textContent).toBe('count is 1');

	});
});
