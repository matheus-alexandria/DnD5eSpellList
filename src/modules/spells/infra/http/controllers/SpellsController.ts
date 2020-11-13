import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAllSpellsService from '@modules/spells/services/ListAllSpellsService';

export default class SpellsController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { level, type, classe } = request.query;

      const listAllSpells = container.resolve(ListAllSpellsService);

      const spells = await listAllSpells.execute({
        level: Number(level),
        type: String(type),
        class: String(classe),
      });

      return response.json(spells);
    } catch (err) {
      return response.json({ Error: err.message });
    }
  }
}
