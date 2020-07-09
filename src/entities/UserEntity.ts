import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BillingEntity } from "./BillingEntity";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => BillingEntity, billing => billing.users, {
    eager: true,
    nullable: true
  })
  billing: BillingEntity;
}
