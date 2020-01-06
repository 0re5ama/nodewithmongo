import { Request, Response } from "express";
import { IModel } from "../models/model";
import { PostService } from "../services/post.service";
import { SUCCESS, CREATED } from "../statuscode/statuscode";

export class PostController {
  private model: IModel;
  private postService: PostService;

  constructor() {
    this.model = Object();
    this.postService = new PostService(this.model);
  }

  findAll = async (_: Request, res: Response) => {
    const postList = await this.postService.findAll();
    return await res.status(SUCCESS).json({
      postList
    });
  };

  save = async (req: Request, res: Response) => {
    console.log(`called inside posts...`);
    console.log(req.body);
    const resp = await this.postService.add(req.body);
    res.status(CREATED);
    res.send(resp);
  };
}
