import { container } from 'tsyringe';

import ISpellsRepository from '@modules/spells/repositories/ISpellsRepository';
import SpellsRepository from '@modules/spells/infra/typeorm/repositories/SpellsRepository';

container.registerSingleton<ISpellsRepository>(
  'SpellsRepository',
  SpellsRepository
);
