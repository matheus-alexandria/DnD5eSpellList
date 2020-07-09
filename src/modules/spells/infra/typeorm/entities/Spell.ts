/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('spells')
class Spell {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  type: string;

  @Column()
  cast_time: string;

  @Column()
  range: string;

  @Column()
  components: string;

  @Column()
  duration: string;

  @Column()
  class: string;

  @Column()
  description: string;

  @Column()
  extra: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Spell;
