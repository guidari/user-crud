import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";
import { deleteUserController } from "../modules/users/useCases/deleteUser";
import { updateUserController } from "../modules/users/useCases/updateUser";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) =>
  createUserController.handle(request, response)
);

usersRoutes.delete("/:user_id", (request, response) =>
  deleteUserController.handle(request, response)
);

usersRoutes.put("/:id", (request, response) =>
  updateUserController.handle(request, response)
);

usersRoutes.get("/", (request, response) =>
  listAllUsersController.handle(request, response)
);

export { usersRoutes };
