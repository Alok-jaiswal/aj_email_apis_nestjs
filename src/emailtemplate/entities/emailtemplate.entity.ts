import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Emailtemplate {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    template:string
}
