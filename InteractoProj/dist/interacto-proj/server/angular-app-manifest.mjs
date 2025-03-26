
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/InteractoProj/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/InteractoProj"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 511, hash: 'd21c4f1e5557011e76dd08df07159e12f444f358a18485b7ca5eeb3bdb3550da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'c43acf696b210d81072f21067e66c709cabb7dacfb55cded3958f2a611ed930a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2203, hash: '6d83b319e3900fa7bbace790d31782bbd31640cea6ef7e7c7359b3fdbdc0c038', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
