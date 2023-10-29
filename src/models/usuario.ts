import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    ds_nome: string

    @Column()
    ds_email: string

    @Column()
    ds_sennha: string
}