import { Request, Response } from "express";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const userDeleted = this.deleteUserUseCase.execute({
        user_id: String(user_id),
      });
      return response.status(201).json(userDeleted);
    } catch (err) {
      return response.status(404).json({ error: err });
    }
  }
}

export { DeleteUserController };
