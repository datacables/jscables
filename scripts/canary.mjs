#!/usr/bin/env zx

import { $, echo } from 'zx';

import { constants } from './common.mjs';

const snapshot = `---
'@datacables/react': patch
---

Canary release
`;

await $`npx json -I -f ${constants.ChangesetConfigFile} -e "this.changelog = false"`;

try {
  // exit pre-release mode if we're in it
  await $`npx changeset pre exit`;
  // bump the version of all affected packages
  // this will remove the prerelease versions
  // but will also clear the changeset .md files
  await $`npx changeset version`;
  // generate a temp .md file that indicates that all packages have changes
  // in order to force a snapshot release
  await $`touch .changeset/snap.md && echo ${snapshot} > .changeset/snap.md`;
} catch (e) {
  // otherwise, do nothing
}

const res = await $`npx changeset version --snapshot canary`;
const success = !res.stderr.includes('No unreleased changesets found');

await $`git checkout HEAD -- ${constants.ChangesetConfigFile}`;

if (success) {
  echo('success=1');
} else {
  echo('success=0');
}