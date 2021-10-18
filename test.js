import test from 'ava';
import newGithubReleaseUrl from './index.js';

test('main', t => {
	const user = 'sindresorhus';
	const repo = 'test';
	const tag = 'v9.9.9';
	const body = 'Hello';

	const urlString = newGithubReleaseUrl({
		user,
		repo,
		tag,
		body,
	});

	const {searchParams} = new URL(urlString);

	t.true(urlString.includes(user));
	t.true(urlString.includes(repo));
	t.is(searchParams.get('tag'), tag);
	t.is(searchParams.get('body'), body);
});

test('repoUrl option', t => {
	const repoUrl = 'https://github.com/sindresorhus/test';
	const body = 'Hello';

	const urlString = newGithubReleaseUrl({
		repoUrl,
		body,
	});

	const {searchParams} = new URL(urlString);

	t.true(urlString.startsWith(repoUrl));
	t.is(searchParams.get('body'), body);
});

test('throws when required options are not specified', t => {
	t.throws(() => {
		newGithubReleaseUrl();
	}, {
		message: /need to specify either/,
	});
});
