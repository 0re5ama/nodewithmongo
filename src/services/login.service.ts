import { IModel } from "../models/model";
import mongoose from "mongoose";
import { UserModel } from "../models/user";
import { userSchema } from "../schemas/user.schemas";

export class LoginService {
  private model: IModel;

  constructor($model: IModel) {
    this.model = $model;
    this.model.user = mongoose.model<UserModel>("user", userSchema);
  }

  findByEmail = async (email: string) => {
    return await this.model.user.findOne({ email: email });
  };
}
