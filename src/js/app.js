/* eslint no-console:0 */

// RailsUjs is *required* for links in Lucky that use DELETE, POST and PUT.
import RailsUjs from "rails-ujs";

// Turbolinks is optional. Learn more: https://github.com/turbolinks/turbolinks/
import Turbolinks from "turbolinks";

RailsUjs.start();
Turbolinks.start();

import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

import scss from 'highlight.js/lib/languages/scss';
hljs.registerLanguage('scss', scss);

import crystal from 'highlight.js/lib/languages/crystal';
hljs.registerLanguage('crystal', crystal);

import bash from 'highlight.js/lib/languages/bash';
hljs.registerLanguage('bash', bash);

import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('json', json);

import sql from 'highlight.js/lib/languages/sql';
hljs.registerLanguage('sql', sql);

import erb from 'highlight.js/lib/languages/erb';
hljs.registerLanguage('erb', erb);

import html from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('html', html);

import yaml from 'highlight.js/lib/languages/yaml';
hljs.registerLanguage('yaml', yaml);

import diff from 'highlight.js/lib/languages/diff';
hljs.registerLanguage('diff', diff);

document.addEventListener("turbolinks:load", function () {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});

import docsearch from '@docsearch/js';

docsearch({
  container: '#docsearch',
  appId: 'P30IY9NAHF',
  indexName: 'luckyframework',
  apiKey: '5d744498cfdcf4d4340dc3751c5bfd5f',
});

