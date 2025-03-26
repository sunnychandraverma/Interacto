
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Interacto/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Interacto"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 507, hash: '0a0bd0796fa96da75e6f28dbf9bd49adba76e2e90aaa822bfb6e272fa997d914', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: '399a2071342c9359e7599a1c1cd9051dea8cca6a0efa4629136ab4aad98a4454', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2199, hash: '9aeb8d84c148908feba0df04b06b2d1a8b38a49de3cae017fc875613dbf407a6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
