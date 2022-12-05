import { Router } from 'express';
import carritoRoute from './carritoRoute';
import productoRoute from './productoRoute';

const apiRoutes = Router();

apiRoutes.use("/carrito", carritoRoute);
apiRoutes.use("/producto", productoRoute);

export default apiRoutes;