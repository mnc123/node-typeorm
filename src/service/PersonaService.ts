import {Repository} from "../connection/Connection";


export class PersonaService {

    constructor() {

    }

    async getPersonas() {
        const personaRepository = await Repository.getPersonaRepository();
        return await personaRepository.find();
    }
}
