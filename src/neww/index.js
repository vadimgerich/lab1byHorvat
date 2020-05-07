import { Router } from 'express';
import newwControler from './controler.js'

const newwRouter = new Router();

//роути 
newwRouter.get("/init", newwControler.init);
newwRouter.get('/', newwControler.get);
newwRouter.get('/:count', newwControler.getByCount);
newwRouter.post('/', newwControler.post);
newwRouter.delete('/:id', newwControler.delete_id);
newwRouter.patch('/:id', newwControler.patch);

export default newwRouter;