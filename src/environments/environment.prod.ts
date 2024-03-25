interface WindowEnv {
  API_GATEWAY_URL: string;
  TENANT_CODE: string;
}

export const environment = {
  production: true,
  apiGateway: (window as Window & typeof globalThis & { env: WindowEnv })['env']
    .API_GATEWAY_URL,
  defaultTenant: (window as Window & typeof globalThis & { env: WindowEnv })[
    'env'
  ].TENANT_CODE,
};
