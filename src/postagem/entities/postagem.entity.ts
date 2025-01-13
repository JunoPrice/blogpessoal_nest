import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"}) //CREATE TABLE tb_postagens()
export class Postagem{

    @PrimaryGeneratedColumn() //AUTO_INCREMENT PRIMARY KEY
    id: number;

    @IsNotEmpty() // validação dos dados do objeto ( não deixa o usuario deixar vazio)
    @Column({length: 100, nullable: false}) // VARCHAR(100) NOT NULL
    titulo: string;

    @IsNotEmpty() // validação dos dados do objeto ( não deixa o usuario deixar vazio)
    @Column({length: 1000, nullable: false}) // VARCHAR(1000) NOT NULL
    texto: string;

    @UpdateDateColumn()
    data: Date;


}