export interface User {
  id?: number;
  email?: string;
  devices?: Array<number>;
  name?: string | undefined | null;
  password?: string | undefined | null;
  roles?: Array<string>;
  surname?: string | undefined | null;
  teams?: Array<string>;
  tenantId?: number;
  userIdentifier?: string;
}
