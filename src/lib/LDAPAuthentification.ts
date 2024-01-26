/**
 * @author Lucie Delestre
 * @license AGPL3
 */

import ldap, { SearchOptions } from 'ldapjs-promise';
import { Authentification } from "./Authentification";
import { InfoIuType, UserType } from "../Global.types";
import crypto from "crypto";
import { ConfigType } from "../ServerTypes";
import { LOGIN_FAILED, PASSWORD_OR_USER_UNDEFINED } from "../Constants";

export class LDAPAuthentification extends Authentification {
    client: ldap.Client
    config: ConfigType
    enabled: boolean = false;

    constructor(databasePath: string, ldapConfig: ConfigType) {
        super(databasePath);
        this.config = ldapConfig;
        this.enabled = ldapConfig.ldap.enabled;

        this.client = ldap.createClient({
            url: [ldapConfig.ldap.url],
            bindDN: ldapConfig.ldap.bindDN,
            bindCredentials: ldapConfig.ldap.bindCredentials
        });

        this.client.on('connectError', (err) => {
            // handle connection error
            console.log('connection error', err);
        })


    }


    ldapAuthentification = () => {
    // print all the users in the LDAP
    //     client.bind(`uid=${this.config.ldap.bindCredentials},${this.config.ldap.searchBase}`, this.config.ldap.bindPassword, (err) => {
    //         if (err) {
    //             console.log('bind error', err);
    //         }
    //     });
    }

    getLDAPUsers = async () => {
        const opts: SearchOptions = {
            filter: '(objectClass=*)',
            scope: 'sub',
            attributes: ['uid', 'memberOf']
        };

        const results = await this.client.searchReturnAll(this.config.ldap.searchBase, opts);

        const usersLogins = results.entries.map((entry) => entry.attributes.find(e => e.type == "uid")?.values[0]).filter(e => e);
        console.log(usersLogins);
        return usersLogins as string[];
    }

    verifyPasswordLDAP = async (
        login: string,
        clearPassword: string
    ): Promise<[number, string | InfoIuType | string[][]]> => {
        if (this.users && clearPassword && process.env.USER_ENCRYPT_SECRET) {
            // find user in database
            const opts: SearchOptions = {
                filter: `uid=${login}`,
                scope: 'sub',
                attributes: ['uid']
            }
            // todo: migrate to findUser
            const results = await this.client.searchReturnAll(this.config.ldap.searchBase, opts);
            // check if user exists

            const currentUser = results.entries[0];
            console.log(currentUser.attributes.map(e => [e.type, e.values.toString()]));

            // check password
            try {
                const localClient = ldap.createClient({
                    url: [this.config.ldap.url]
                });

                await localClient.bind(`uid=${login},${this.config.ldap.searchBase}`, clearPassword);

                console.log("bind success");
                await localClient.unbind();
                console.log("unbind success");

                return [200, this.getInfoForUi(login)];
            } catch (error) {
                console.log(error);
                return [401, LOGIN_FAILED];
            }
        } else {
            return [500, PASSWORD_OR_USER_UNDEFINED];
        }
    };


    makeLDAPUser = (login: string): UserType => {
        return {
            login: login,
            uuid: crypto.randomBytes(16).toString("hex"),
            password: "",
            //Reverse needed
            bearer: Authentification.dataEncrypt(
                this.generateBearerKey(),
                process.env.USER_ENCRYPT_SECRET
            ),
            type: "ldap",
        };
    };
}
