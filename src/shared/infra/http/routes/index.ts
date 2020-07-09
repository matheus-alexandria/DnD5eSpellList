import { Router } from 'express';

import spellsRoutes from '@modules/spells/infra/http/routes/spells.routes';

const routes = Router();

routes.use('/spells', spellsRoutes);

export default routes;
