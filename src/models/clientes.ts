import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cidades } from "./cidades";
import internal from "stream";

@Entity('clientes')
export class Doador extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public nome: string;

    @Column()
    public cpf: string;

    @Column()
    public email: string;

    @Column()
    public telefone: string;

    @Column()
    public endereco: string;

    @Column()
    public id_cidade: number;

    @Column()
    public estado: string

    @ManyToOne(() => Cidades, (cidade) => cidade.doadores, {
        eager: true})
    public cidade: Cidades;

}