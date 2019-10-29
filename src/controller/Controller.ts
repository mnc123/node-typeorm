import {Request, Response} from "express";
import {PersonaService} from "../service/PersonaService";

export class Controller {

    private personaService: PersonaService;

    constructor() {
        this.personaService = new PersonaService();
    }

    getPersonas = (req: Request, res: Response) => {
        this.personaService.getPersonas().then((personas) => {
            res.send(personas);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
            res.send(err);
        });9
    }
}
