# Site regression checks

The site itself has no runtime dependencies. These optional development checks
use Node's test runner, Playwright, axe-core, html-validate, and an installed
Google Chrome browser.

Install the tools outside the site repository, then run:

```sh
npm install --prefix /your/test-tools playwright axe-core html-validate
NODE_PATH=/your/test-tools/node_modules node --test tests/site.test.cjs
```

The suite serves the working tree on a temporary loopback port and checks:

- Viewport metadata, landmarks, current navigation state, and page navigation.
- Keyboard skip-link behavior and visible link focus.
- Inline link identification, local assets, and fragment targets.
- axe-core WCAG A/AA and best-practice rules at 1280px and 320px.
- Source and rendered HTML validation.
- Reflow at 320, 375, 768, and 1280px, with normal and doubled root text size.
- Desktop contact-label alignment, badge removal, and retained `document.write`.

## Evidence for the correctness/accessibility changes

Requirements came from the agreed conversation plan. Before implementation,
all five test groups failed: viewport metadata and navigation landmarks were
missing, and the obsolete badge was present. After the fixes, all five passed.
Additional runs exposed and verified fixes for small link targets, a malformed
PERFECT DOI URL, a closing-tag error, and desktop contact alignment.

Desktop and 320px screenshots were also inspected. Automated checks are not a
claim of full WCAG compliance: no manual screen-reader session or actual browser
400% zoom test has been completed. The 320px checks exercise equivalent reflow
width, not browser zoom itself. Conventional code-coverage percentages are not
reported for this static HTML/CSS site.

A separate external-link check found public 404 responses for Rudder and
PowerTrip. Their URLs and technical descriptions were left unchanged pending
confirmed replacements. Access-blocked publisher/profile links were not treated
as broken. HPCToolkit's working non-`www` URL replaced the failing `www` URL.
