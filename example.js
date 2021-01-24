'use strict';
const open = require('open');
const newGithubReleaseUrl = require('.');

const url = newGithubReleaseUrl({
	// Change these to your own repo for testing
	user: 'sindresorhus',
	repo: 'new-github-release-url',
	tag: 'v9.9.9',
	target: 'main',
	title: 'Cookies',
	body: 'Nom nom nom nom...',
	isPrerelease: true
});

open(url);
