import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MailEntities{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    template:string;

    @Column('text',{array:true})
    email:string[];

    @Column()
    name:string;

    @Column()
    subject:string;

    @Column()
    response:string;

    @Column({default:null})
    createAtDate:Date;

}