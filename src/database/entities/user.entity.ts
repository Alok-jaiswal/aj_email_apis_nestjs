import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn()
  userId: number;

  @Column({ nullable: true })
  userName:string

  @Column({ nullable: true })
  email:string

  @Column({ nullable: true })
  password:string

  @Column({ nullable: true })
  role:string
}
