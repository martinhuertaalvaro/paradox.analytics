export interface User {
  id?: number;
  email?: string;
  devices?: Array<string>;
  name?: string | undefined | null;
  password?: string | undefined | null;
  roles?: Array<string>;
  surname?: string | undefined | null;
  teams?: Array<string>;
  tenantId?: number;
  userIdentifier?: string;
  city?: string;
  workfield?: string;
  active?: boolean;
  birthdate?: string;
  registerdate?: string;
  friends?: Array<number>;
}
