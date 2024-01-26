/**
 * @author DHENRY for mytinydc.com
 * @license AGPL3
 */

import { Session } from "express-session";
import { InfoIuType } from "./Global.types";

/**
 * No need for UI
 */
export interface SessionExt extends Session {
  user: InfoIuType;
}

// server side config
export interface ConfigType {
  ldap: {
    enabled: boolean;
    url: string;
    bindDN: string;
    bindCredentials: string;
    bindPassword: string;
    searchBase: string;
    searchFilter: string;
  }
}