import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, OneToMany } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_temas"}) //CREATE TABLE tb_postagens()
export class Tema{

    @ApiProperty() 
    @PrimaryGeneratedColumn() //AUTO_INCREMENT PRIMARY KEY
    id: number;

    @ApiProperty() 
    @Transform(({ value }: TransformFnParams) => value?.trim()) //impede que deixe espaços em branco
    @IsNotEmpty() // validação dos dados do objeto ( não deixa o usuario deixar vazio)
    @Column({length: 255, nullable: false}) // VARCHAR(100) NOT NULL
    descricao: string;

    @ApiProperty() 
    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
}