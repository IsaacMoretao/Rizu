import { Router } from "express";

import { CreateBlousesController } from "./modules/ClothingParts/Blouses/useCases/createBlouses/CreateBlousesController";
import { CreateClientController } from "./modules/client/useCases/createClient/CreateClientController";
import { CreateShirtController } from "./modules/ClothingParts/Shirt/useCases/createShirt/CreateShirtController";

import { CreatePantsController } from "./modules/ClothingParts/Pants/useCases/createpants/CreatePantsController";
import { CreateTshirtController } from "./modules/ClothingParts/Tshirt/useCases/createTshirt/CreateTshirtController";
import { FindAllPartsContoller } from "./modules/ClothingParts/AllParts/useCases/FindAllParts/FindAllPartsContoller";

import { FindAllAvailableController } from "./modules/ClothingParts/Blouses/useCases/AllBloses/FindBlosesController";
import { FindAllPantsController } from "./modules/ClothingParts/Pants/useCases/AllPants/FindPantsController";
import { FindAllShirtsController } from "./modules/ClothingParts/Shirt/useCases/AllShirts/FindShirtsController";
import { FindAllTshirtsController } from "./modules/ClothingParts/Tshirt/useCases/FindAllTshirt/FindTshirtController";

const routes = Router();

const createClientController = new CreateClientController();
const createShirtController = new CreateShirtController();
const createTshirtController = new CreateTshirtController();

const createBlousesController = new CreateBlousesController();
const createPantsController = new CreatePantsController();
const findAllPartsContoller = new FindAllPartsContoller();

const findAllAvailableController = new FindAllAvailableController();
const findAllPantsController = new FindAllPantsController();
const findAllShirtsController = new FindAllShirtsController();
const findAllTshirtsController = new FindAllTshirtsController();

routes.post('/client/', createClientController.handle);
routes.post('/shirt/', createShirtController.handle);
routes.post('/tshirt/', createTshirtController.handle);

routes.post('/blouses/', createBlousesController.handle);
routes.post('/pants/', createPantsController.handle);
routes.get('/allParts/', findAllPartsContoller.handle);

routes.get('/bloses/find/', findAllAvailableController.handle);
routes.get('/pants/find/', findAllPantsController.handle);
routes.get('/shirt/find/', findAllShirtsController.handle);
routes.get('/tshirt/find/', findAllTshirtsController.handle);


export { routes }