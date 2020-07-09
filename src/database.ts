import { createConnection } from "typeorm";

import { UserEntity } from "./entities/UserEntity";
import { BillingEntity } from "./entities/BillingEntity";

/** Quick connection to sqlite database */
export async function connectDatabase() {
  await createConnection({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [UserEntity, BillingEntity],
    synchronize: true,
    dropSchema: true
  });
}
