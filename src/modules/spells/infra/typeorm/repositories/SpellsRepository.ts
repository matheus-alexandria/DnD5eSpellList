import { getRepository, Repository } from 'typeorm';

import ISpellRepository from '@modules/spells/repositories/ISpellsRepository';

import Spell from '../entities/Spell';

class SpellsRepository implements ISpellRepository {
  private ormRepository: Repository<Spell>;

  constructor() {
    this.ormRepository = getRepository(Spell);
  }

  public async findAllSpells(): Promise<Spell[]> {
    const spells = await this.ormRepository.find();

    return spells;
  }
}

export default SpellsRepository;
