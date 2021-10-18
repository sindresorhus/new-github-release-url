import {expectType, expectError} from 'tsd';
import newGithubReleaseUrl from './index.js';

expectType<string>(
	newGithubReleaseUrl({
		repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
	}),
);
expectType<string>(
	newGithubReleaseUrl({
		user: 'sindresorhus',
		repo: 'new-github-release-url',
	}),
);
expectError(
	newGithubReleaseUrl({
		user: 'sindresorhus',
	}),
);
expectError(
	newGithubReleaseUrl({
		repo: 'new-github-release-url',
	}),
);
expectError(
	newGithubReleaseUrl({
		repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
		user: 'sindresorhus',
		repo: 'new-github-release-url',
	}),
);
expectType<string>(
	newGithubReleaseUrl({
		repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
		tag: 'foo',
	}),
);
expectType<string>(
	newGithubReleaseUrl({
		repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
		target: 'foo',
	}),
);
expectType<string>(
	newGithubReleaseUrl({
		repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
		title: 'foo',
	}),
);
expectType<string>(
	newGithubReleaseUrl({
		repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
		body: 'foo',
	}),
);
expectType<string>(
	newGithubReleaseUrl({
		repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
		isPrerelease: true,
	}),
);
