import {Router} from 'express';
import { peticionController } from './PeticionesController';
const router: Router = Router();
class PeticionesRouter {
    router:Router;
    constructor(){
        this.router = router;
        this.routes();
    }
    routes(){
       // this.router.post('/agregar', peticionController.agregar);
        this.router.get('/listar', peticionController.listar);
       // this.router.put('/modificar',peticionController.modificar)
       // this.router.delete('/delete', peticionController.eliminarReclamos);
    }
}
const peticionController = new PeticionesRouter();
export default PeticionesRouter.router;