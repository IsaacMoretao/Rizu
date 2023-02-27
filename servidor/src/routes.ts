import { Router } from "express";
import { CreateBlousesController } from "./modules/Blouses/useCases/createBlouses/CreateBlousesController";
import { CreateClientController } from './modules/client/useCases/createClient/CreateClientController';
import { CreateShirtController } from './modules/ClothingParts/useCases/createShirt/CreateShirtController'
import { CreateTshirtController } from "./modules/Tshirt/useCases/createTshirt/CreateTshirtController";

const routes = Router();

const createClientController = new CreateClientController();
const createShirtController = new CreateShirtController();
const createTshirtController = new CreateTshirtController();
const createBlousesController = new CreateBlousesController();

routes.post('/client/', createClientController.handle);
routes.post('/shirt/', createShirtController.handle);
routes.post('/tshirt/', createTshirtController.handle);
routes.post('/blouses/', createBlousesController.handle);

export { routes }