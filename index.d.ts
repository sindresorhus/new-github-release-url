import {MergeExclusive} from 'type-fest';

declare namespace newGithubReleaseUrl {
	interface BaseOptions {
		/**
		The tag name of the release.
		*/
		readonly tag?: string;

		/**
		The branch name or commit SHA to point the release's tag at, if the tag doesn't already exist.

		Default: The default branch.
		*/
		readonly target?: string;

		/**
		The title of the release.

		GitHub shows the `tag` name when not specified.
		*/
		readonly title?: string;

		/**
		The description text of the release.
		*/
		readonly body?: string;

		/**
		Whether the release should be marked as a pre-release.

		@default false
		*/
		readonly isPrerelease?: boolean;
	}

	interface RepoUrlOptions extends BaseOptions {
		/**
		The full URL to the repo.
		*/
		readonly repoUrl: string;
	}

	interface UserRepoOptions extends BaseOptions {
		/**
		GitHub username or organization.
		*/
		readonly user: string;

		/**
		GitHub repo.
		*/
		readonly repo: string;
	}

	type Options = MergeExclusive<RepoUrlOptions, UserRepoOptions>;
}

/**
Generate a URL for opening a new GitHub release with prefilled tag, body, and other fields.

@returns A URL string.

@example
```
import newGithubReleaseUrl = require('new-github-release-url');
import open = require('open');

const url = newGithubReleaseUrl({
	user: 'sindresorhus',
	repo: 'new-github-release-url',
	body: '\n\n\n---\nI\'m a human. Please be nice.'
});
//=> 'https://github.com/sindresorhus/new-github-release-url/releases/new?body=%0A%0A%0A---%0AI%27m+a+human.+Please+be+nice.'

// Then open it
open(url);
```
*/
declare function newGithubReleaseUrl(
	options: newGithubReleaseUrl.Options
): string;

export = newGithubReleaseUrl;
