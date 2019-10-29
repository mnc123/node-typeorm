import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import {Persona} from "../model/Persona";


export class Repository {

    private static pesonaRepository;
    private static connection: Connection;

    public static getInstace = async () : Promise<Connection> => {
        if(!Repository.connection) {
            console.log('------------------------------00000000000000000000000000000000000000000000000000000000000000000000000----');
            if(Repository.connection) {
                return Repository.connection;
            } else {
                const connection = await createConnection({
                    type: "mysql",
                    host: "localhost",
                    port: 3306,
                    username: "root",
                    password: "Admin_123",
                    database: "node_archetype",
                    entities: [
                        Persona
                    ],
                    synchronize: true,
                    logging: false
                });

                Repository.connection = connection;
            }
        }

        return Repository.connection;

    }

    public static getPersonaRepository = async () => {
        const connection = await Repository.getInstace();
        return connection.getRepository(Persona);
    }
}

