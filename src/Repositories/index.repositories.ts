import { Service } from "typedi";
import data from "../Models/user.models";
import "reflect-metadata";

@Service()
export default class UserRepository {
  private data: data = {
    firstName: "Jatin",
    lastName: "Mamtora",
  };

  async getAllUsers() {
    const data = this.data;
    return data;
  }
}
