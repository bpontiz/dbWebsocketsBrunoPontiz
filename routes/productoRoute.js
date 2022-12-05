//? CRUD PRODUCTOS

import { Router } from 'express';
import productoControlador from '../controladores/productoControlador';

const productoRoute = Router();

productoRoute.get();

export default productoRoute;