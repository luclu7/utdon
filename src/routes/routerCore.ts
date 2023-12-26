/**
 * @author DHENRY for mytinydc.com
 * @license AGPL3
 */

import express, { NextFunction, Request, Response } from "express";
import { scrapUrl } from "../lib/Features";
import { APPLICATION_VERSION } from "../Constants";
const routerCore = express.Router();

routerCore.get(
  "/scrap/:url",
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.params.url !== undefined) {
      await scrapUrl(req.params.url, "GET")
        .then((data: string) => {
          // Warn Reduxtookit expect text so data will always be type = string
          res.status(200).send(data);
        })
        .catch((error: Error) => {
          res
            .status(500)
            .json({ error: `${error.toString()}-${req.params.url}` });
        });
    } else {
      next(new Error("Url is not provided"));
    }
  }
);

routerCore.get(
  "/version",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send({ version: APPLICATION_VERSION });
    } catch (error: unknown) {
      next(error);
    }
  }
);

routerCore.get(
  "/healthz",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(204).send();
    } catch (error: unknown) {
      next(error);
    }
  }
);

routerCore.get(
  "/metrics",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(503).json("Service is not available");
    } catch (error: unknown) {
      next(error);
    }
  }
);

export default routerCore;