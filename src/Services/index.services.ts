import { Service, Container } from "typedi";
import "reflect-metadata";
import UserRepository from "../Repositories/index.repositories";

@Service()
export default class UserService {
  static userRepo = Container.get(UserRepository);

  async getUserData() {
    const data = await UserService.userRepo.getAllUsers();
    return data;
  }
}
