import Spell from '../infra/typeorm/entities/Spell';
import IFiltersDTO from '../dtos/IFiltersDTO';

export default interface ISpellRepository {
  findAllSpells(): Promise<Spell[]>;
  findSpellsByFilters(filters: IFiltersDTO): Promise<Spell[]>;
}
