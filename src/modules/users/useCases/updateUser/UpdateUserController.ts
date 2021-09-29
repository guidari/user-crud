import { Request, Response } from "express";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { name, age, address } = request.headers;

    try {
      const updateUser = this.updateUserUseCase.execute({
        id: String(id),
        name: String(name),
        age: Number(age),
        address: String(address),
      });

      return response.status(201).json(updateUser);
    } catch (err) {
      return response.status(404).json({ error: err });
    }
  }
}

export { UpdateUserController };
