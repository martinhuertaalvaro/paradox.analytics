(function (window) {
  window['env'] = window['env'] || {};
  window['env'].API_GATEWAY_URL = '${ENV_API_GATEWAY_URL}';
  window['env'].TENANT_CODE = '${ENV_DEFAULT_TENANT_CODE}';
})(this);
