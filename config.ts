/**
 * The name of the content repo. Should be the same as the name of the package
 */
const REPO_HANDLE = `content-init`;

/**
 * The github account handle. Can be a private user or an organization
 */
const GITHUB_HANDLE = "maxpaleo";

/**
 * // TODO - Create functions
 *
 * - getContentRepoHandle({
 *  githubHandle: GITHUB_HANDLE,
 *  repoHandle: REPO_HANDLE
 * })
 *
 * - getContentRepoUrl()
 *
 * - getSearchDataUrl()
 * - getSearchData()
 *
 * - getNavUrl()
 * - getNavItems()
 */

/**
 *
 */
export const CONFIG = {
  GITHUB_HANDLE,
  REPO_HANDLE,
  CONTENT_REPO_URL: `https://github.com/${GITHUB_HANDLE}/${REPO_HANDLE}.git`,
  SEARCH_DATA_URL: `https://raw.githubusercontent.com/${GITHUB_HANDLE}/${REPO_HANDLE}/refs/heads/main/search-data.json`,
  NAV_URL: `https://raw.githubusercontent.com/${GITHUB_HANDLE}/${REPO_HANDLE}/refs/heads/main/nav.json`
} as const;
