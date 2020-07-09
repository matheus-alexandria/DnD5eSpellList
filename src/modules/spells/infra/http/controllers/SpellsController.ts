import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAllSpellsService from '@modules/spells/services/ListAllSpellsService';

export default class SpellsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAllSpells = container.resolve(ListAllSpellsService);

    const spells = await listAllSpells.execute();

    return response.json(spells);
  }
}
