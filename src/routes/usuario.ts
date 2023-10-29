
import { UsuarioController } from "../controller/UsuarioController";
import { Router } from "express";

let router: Router = Router();

let usuarioController = new UsuarioController();

// router.get('/produtos', usuarioController.list);

// router.post('/produtos', usuarioController.create);

// router.put('/produtos/:id', usuarioController.update);

// router.delete('/produtos/:id', usuarioController.delete);

// router.get('/produtos/:id', usuarioController.find);

export default router;