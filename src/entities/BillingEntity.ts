import { OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity()
export class BillingEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @OneToMany(type => UserEntity, user => user.billing, {
    cascade: true /* I have also tried with true here */
  })
  users: UserEntity[];
}
