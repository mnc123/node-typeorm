import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'personas'})
export class Persona {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;
}
