import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Mathjax from 'reveal.js/plugin/math/math.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

const slide = new Reveal({
  width: 1024,
  height: 768,
  slideNumber: 'c/t',
  hash: true,
  center: true,
  plugins: [Markdown, Mathjax],
  math: {
    mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
    config: 'TeX-AMS_HTML-full',
  },
  transitionSpeed: 'fast',
  mouseWheel: true,
});

slide.initialize();
