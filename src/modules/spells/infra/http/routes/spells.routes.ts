import { Router } from 'express';

import SpellsController from '../controllers/SpellsController';

const spellsRouter = Router();
const spellsController = new SpellsController();

spellsRouter.get('/', spellsController.index);

export default spellsRouter;
