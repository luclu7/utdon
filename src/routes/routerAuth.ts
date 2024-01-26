/**
 * @author DHENRY for mytinydc.com
 * @license AGPL3
 */

import express, { NextFunction, Request, Response } from "express";
import { ERRORINVALIDREQUEST } from "../Constants";
import {
    ChangePasswordType,
    InfoIuType,
    NewUserType,
    UsersType, UserType,
} from "../Global.types";
import { SessionExt } from "../ServerTypes";
const routerAuth = express.Router();

/**
 *
 * @swagger
 * /userlogin:
 *   post:
 *     summary: login to the system with UI
 *     description: UI login method
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: login properties
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login OK
 *         content:
 *           application/text:
 *             schema:
 *               $ref: '#/components/schemas/InfoIuType'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Error'
 */
routerAuth.post(
  "/userlogin",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let verif: [number, string | InfoIuType] = ERRORINVALIDREQUEST;
        // check if user's type
        if (req.body && req.body.login && req.body.password) {
            // check if LDAP is enabled
            if (req.app.get("LDAP").enabled &&
                req.app.get("AUTH").users.users
                    .filter((user: UserType) => user.login === req.body.login)[0].type === "ldap"
            ) {
                // if so, use verifyPasswordLDAP
                verif = await req.app.get("LDAP").verifyPasswordLDAP(req.body.login, req.body.password);
            } else {
                // if not, use verifyPassword
                verif = req.app
                    .get("AUTH")
                    .verifyPassword(req.body.login, req.body.password);
            }
            if (verif[0] === 200) {
                req.app.get("LOGGER").info({
                    action: "login",
                    user: req.body.login
                });

                const session = req.session as SessionExt;
                session.user = req.app.get("AUTH").getInfoForUi(req.body.login);
            }
        }
        res.status(verif[0]).json(verif[1]);
    } catch (error) {
        next(error);
    }
  }
);

/**
 *
 * @swagger
 * /users:
 *   get:
 *     summary: get users list
 *     description: Used by the User Management UI to get users list
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Users list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Error'
 */
routerAuth.get(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    //next step: for admin users only
    try {
      res.status(200).json(req.app.get("AUTH").getUsersLogins());
    } catch (error: unknown) {
      next(error);
    }
  }
);

/**
 *
 * @swagger
 * /users:
 *   post:
 *     summary: create user in the database
 *     description: UI create user method
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: login and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewUserType'
 *
 *     responses:
 *       200:
 *         description: created user
 *         content:
 *           application/text:
 *             schema:
 *               type: object
 *               properties:
 *                 login:
 *                   type: string
 *       400:
 *          description: User already exists
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Error'
 */
routerAuth.post(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    //next step: for admin users only
    try {
      // get the login and password
      const newUser = req.body as NewUserType;
      // get the list of current users, to check if user already exists
      const users: string[] = req.app.get("AUTH").getUsersLogins();

      // check if user already exists
      if (!users.find((user) => user === newUser.login)) {
        const user = req.app
          .get("AUTH")
          .makeUser(newUser.login, newUser.password);
        req.app.get("AUTH").addUser(user); // add user to the list
        req.app.get("LOGGER").info({
          action: "create user",
          user: newUser.login,
        });
        res.status(200).json({ login: newUser.login });
      } else {
        res.status(400).json({ error: "User already exists" });
      }
    } catch (error: unknown) {
      next(error);
    }
  }
);

/**
 *
 * @swagger
 * /users:
 *   put:
 *     summary: modify user in the database
 *     description: UI modify user method
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: login and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewUserType'
 *
 *     responses:
 *       204:
 *         description: modified user
 *       404:
 *          description: User not found
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Error'
 */
routerAuth.put(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    //next step: for admin users only
    try {
      // get the login and password
      const newUser = req.body as NewUserType;
      // get the list of current users, to check if user already exists
      const users: UsersType = req.app.get("AUTH").users;
      const idx = users.users.findIndex((u) => u.login === newUser.login);
      if (idx !== -1) {
        users.users[idx].password = req.app
          .get("AUTH")
          .encryptPassword(newUser.password);
        req.app.get("AUTH").writeDB(JSON.stringify(users));
        req.app.get("LOGGER").info({
          action: "modify user",
          user: newUser.login,
        });
        res.status(204).send();
      } else {
        res.status(400).json({ error: "User  not found" });
      }
    } catch (error: unknown) {
      next(error);
    }
  }
);

/**
 *
 * @swagger
 * /users/{login}:
 *   delete:
 *     summary: delete user from the database
 *     description: UI delete user method
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: path
 *         name: login
 *         required: true
 *         description: login of the user to delete
 *         schema:
 *           type: string
 *           example: "user"
 *
 *     responses:
 *       200:
 *         description: deleted
 *         content:
 *           application/text:
 *             schema:
 *               type: object
 *               properties:
 *                 login:
 *                   type: string
 *       404:
 *          description: User not found
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Error'
 */
routerAuth.delete(
  "/users/:login",
  async (req: Request, res: Response, next: NextFunction) => {
    //next step: for admin users only
    try {
      // get the login
      const userToDelete = req.params.login;
      // get the list of current users, to check if user exists before deleting it
      const users: string[] = req.app.get("AUTH").getUsersLogins();

      const user = users.find((user) => user === userToDelete);

      const session = req.session as SessionExt;

      // check if user exists - user could not delete their account
      if (user && session.user.login !== req.params.login) {
        // if so, delete it
        req.app.get("AUTH").deleteUser(user); // add user to the list
        req.app.get("LOGGER").info({
          action: "delete user",
          user: userToDelete,
        });
        res.status(200).json({ login: userToDelete });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error: unknown) {
      next(error);
    }
  }
);

/**
 *
 * @swagger
 * /isauthenticated:
 *   get:
 *     summary: is user logged
 *     description: Used by UI to verify user is logged
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: User is logged
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Error'
 */
routerAuth.get(
  "/isauthenticated",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const verif = req.app.get("AUTH").isAuthenticated(req);
      res.status(verif ? 200 : 401).json();
    } catch (error) {
      next(error);
    }
  }
);

routerAuth.get(
    "/ldapusers",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const logins = await req.app.get("LDAP").getLDAPUsers();
            res.json(logins);
            // res.status(verif ? 200 : 401).json();
        } catch (error) {
            next(error);
        }
    }
)

routerAuth.get(
    "/ldap/import",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const logins: string[] = await req.app.get("LDAP").getLDAPUsers();
            const users: UsersType = req.app.get("AUTH").users;
            const newUsers = logins.map((login) =>
                req.app.get("LDAP").makeLDAPUser(login)
            )
            newUsers.forEach((user) => {
                if (!users.users.find((u) => u.login === user.login)) {
                    users.users.push(user);
                }
            })
            req.app.get("AUTH").writeDB(JSON.stringify(users));
            res.json(logins);
            // res.status(verif ? 200 : 401).json();
        } catch (error) {
            next(error);
        }
    }
)

routerAuth.get(
    "/ldap/auth",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const login = req.query.login as string;
            const password = req.query.password as string;
            // use verifyPasswordLDAP
            res.json(await req.app.get("LDAP").verifyPasswordLDAP(login, password));
        }
        catch (error) {
            next(error);
        }
    }
)

/**
 * @swagger
 * /userlogout:
 *   get:
 *     summary: user logout method
 *     description: Used by UI to logout user
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Authentication
 *     responses:
 *       204:
 *         description: User is logged out
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Error'
 */

routerAuth.get(
  "/userlogout",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const session = req.session as SessionExt;
      req.app.get("LOGGER").info({
        action: "logout",
        user: session.user.login ? session.user.login : "session user unknown",
      });
      session.user.login = "";
      req.session.destroy((error: Error) => {
        if (error) {
          req.app.get("LOGGER").error(error);
        }
        res.clearCookie("connect.sid");
        res.status(204).json();
      });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @swagger
 * /changepassword:
 *   put:
 *     summary: user change password
 *     description: Used by UI to change user password
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: passwords list
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChangePasswordType'
 *     responses:
 *       204:
 *         description: Password has been changed
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Error'
 */

routerAuth.put(
  "/changepassword",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const changepassword = req.body as ChangePasswordType;
      const verified = req.app.get("AUTH").changePassword(changepassword);
      if (verified[0] === 200) {
        res.status(204).send();
      } else {
        res.status(500).json({ error: verified[1] });
      }
    } catch (error: unknown) {
      next(error);
    }
  }
);

/**
 * @swagger
 * /bearer:
 *   get:
 *     summary: get user user auth Token
 *     description: Used by UI to get user auth Token
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: User auth Token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bearer:
 *                   type: string
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Error'
 */

routerAuth.get(
  "/bearer",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const session = req.session as SessionExt;
      if (
        session.user &&
        session.user.login // &&
        // session.user.login === "admin"
      ) {
        res.status(200).json({
          bearer: req.app.get("AUTH").getUserBearer(session.user.login),
        });
      } else {
        res.status(500).json({ error: "User is not logged with session" });
      }
    } catch (error: unknown) {
      next(error);
    }
  }
);

/**
 * @swagger
 * /user:
 *   get:
 *     summary: get user's login
 *     description: Used by UI to show the user's login in the header
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: User's login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 login:
 *                   type: string
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Error'
 */
routerAuth.get(
  "/user",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const session = req.session as SessionExt;
      if (
        session.user &&
        session.user.login // &&
        // session.user.login === "admin"
      ) {
        res.status(200).json({ login: session.user.login });
      } else {
        res.status(401).json({ error: "User is not logged with session" });
      }
    } catch (error: unknown) {
      next(error);
    }
  }
);

/**
 * @swagger
 * /bearer:
 *   put:
 *     summary: change user auth Token
 *     description: Used by UI to get new user auth Token
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Authentication
 *     responses:
 *       204:
 *         description: User auth Token has been changed
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Error'
 */

routerAuth.put(
  "/bearer",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const session = req.session as SessionExt;
      if (
        session.user &&
        session.user.login // &&
        // session.user.login === "admin"
      ) {
        const result = req.app.get("AUTH").changeBearer();
        if (result[0] === 200) {
          res.status(204).json();
        } else {
          res.status(500).json({ error: result[1].toString() });
        }
      } else {
        res.status(500).json({ error: "User is not logged with session" });
      }
    } catch (error: unknown) {
      next(error);
    }
  }
);

export default routerAuth;
