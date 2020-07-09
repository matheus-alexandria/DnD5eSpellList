import Spell from '../infra/typeorm/entities/Spell';

export default interface ISpellRepository {
  findAllSpells(): Promise<Spell[]>;
}
