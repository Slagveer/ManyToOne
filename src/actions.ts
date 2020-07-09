import { getRepository } from "typeorm";

import { BillingEntity } from "./entities/BillingEntity";
import { UserEntity } from "./entities/UserEntity";

export function saveUser() {
  const user = getRepository(UserEntity).create();
  return getRepository(UserEntity).save(user);
}

export function saveBilling(user: UserEntity) {
  const billing = getRepository(BillingEntity).create();
  billing.users = [user];
  return getRepository(BillingEntity).save(billing);
}

export function getUser(id) {
  return getRepository(UserEntity).findOne(id);
}
