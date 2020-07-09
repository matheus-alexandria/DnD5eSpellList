import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSpell1591377383882 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'spells',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'level',
            type: 'smallint',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'cast_time',
            type: 'varchar',
          },
          {
            name: 'range',
            type: 'varchar',
          },
          {
            name: 'components',
            type: 'varchar',
          },
          {
            name: 'duration',
            type: 'varchar',
          },
          {
            name: 'class',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'extra',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('spells');
  }
}
