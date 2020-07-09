import { saveUser } from "./actions";

/** Seed the database with a sample film and associated sample key */
export async function seedDatabase() {
  saveUser();
}
