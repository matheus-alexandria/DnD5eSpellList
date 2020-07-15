import { getRepository, Repository, Like } from 'typeorm';

import ISpellRepository from '@modules/spells/repositories/ISpellsRepository';
import IFiltersDTO from '@modules/spells/dtos/IFiltersDTO';

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

  public async findSpellsByFilters(filters: IFiltersDTO): Promise<Spell[]> {
    const spells = await this.ormRepository.find({
      where: {
        level: filters.level,
        type: Like(`%${filters.type}%`),
      },
    });

    return spells;
  }
}

export default SpellsRepository;
