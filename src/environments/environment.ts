// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`..

interface WindowEnv {
  API_GATEWAY_URL: string;
  TENANT_CODE: string;
}

export const environment = {
  production: false,
  apiGateway: (window as Window & typeof globalThis & { env: WindowEnv })['env']
    .API_GATEWAY_URL,
  defaultTenant: (window as Window & typeof globalThis & { env: WindowEnv })[
    'env'
  ].TENANT_CODE,
  isMobile: undefined as boolean | undefined,
};
