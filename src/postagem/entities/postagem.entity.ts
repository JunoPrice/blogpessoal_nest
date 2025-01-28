import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_postagens' }) //CREATE TABLE tb_postagens()
export class Postagem {
  @ApiProperty()
  @PrimaryGeneratedColumn() //AUTO_INCREMENT PRIMARY KEY
  id: number;

  @ApiProperty()
  @Transform(({ value }: TransformFnParams) => value?.trim()) //impede que deixe espaços em branco
  @IsNotEmpty() // validação dos dados do objeto ( não deixa o usuario deixar vazio)
  @Column({ length: 100, nullable: false }) // VARCHAR(100) NOT NULL
  titulo: string;

  @ApiProperty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() // validação dos dados do objeto ( não deixa o usuario deixar vazio)
  @Column({ length: 1000, nullable: false }) // VARCHAR(1000) NOT NULL
  texto: string;

  @ApiProperty()
  @UpdateDateColumn()
  data: Date;

  @ApiProperty({ type: () => Tema })
  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  tema: Tema;

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}
