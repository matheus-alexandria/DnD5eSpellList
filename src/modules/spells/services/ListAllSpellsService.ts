/* eslint-disable consistent-return */
import { inject, injectable } from 'tsyringe';

import ISpellsRepository from '../repositories/ISpellsRepository';
import Spell from '../infra/typeorm/entities/Spell';
import IFiltersDTO from '../dtos/IFiltersDTO';

@injectable()
export default class ListAllSpellsService {
  constructor(
    @inject('SpellsRepository')
    private spellsRepository: ISpellsRepository
  ) {}

  public async execute(filtros: IFiltersDTO): Promise<Spell[]> {
    let spells: Spell[] = [];

    const filters: IFiltersDTO = filtros;

    // Checking if there are filters or not
    if (!filters.type && !filters.level && !filters.class) {
      spells = await this.spellsRepository.findAllSpells();
    } else {
      /*
        If others filters are aplied and there is no level filter, filter by all levels
        using the levelArray atribute to filter with In([])
      */
      if (!filters.level) {
        filters.levelArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      } else {
        filters.levelArray = [Number(filters.level)];
      }
      spells = await this.spellsRepository.findSpellsByFilters(filters);
    }

    const names: string[] = [];

    const noRepeatedSpellsWithNull = spells.map(spell => {
      const repeatedSpells = spells.filter(s => s.name === spell.name);

      if (repeatedSpells.length > 1) {
        const alreadyModified = names.find(
          name => name === repeatedSpells[0].name
        );

        if (alreadyModified) {
          return;
        }

        const newClass = repeatedSpells.map(
          repeatedSpell => repeatedSpell.class
        );

        names.push(repeatedSpells[0].name);

        const newSpell = { ...spell, class: newClass };

        return newSpell;
      }

      return spell;
    });

    const noRepeatedSpells = noRepeatedSpellsWithNull.filter(
      spell => spell !== undefined
    );

    return noRepeatedSpells as Spell[];
  }
}
