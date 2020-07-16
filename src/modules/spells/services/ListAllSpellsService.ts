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

  public async execute(filters: IFiltersDTO): Promise<Spell[]> {
    let spells: Spell[] = [];

    if (filters) {
      spells = await this.spellsRepository.findSpellsByFilters(filters);
    } else {
      spells = await this.spellsRepository.findAllSpells();
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
