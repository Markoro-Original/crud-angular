package com.example.crudspring.model;

import com.fasterxml.classmate.GenericType;
import lombok.Data;

import javax.persistence.*;
import java.lang.reflect.GenericArrayType;

//@Getter <- gera getters
//@Setter <- gera setters
//O @Data gera tanto os getters como os setters, além de doutras funções
@Data
@Entity
//@Table(name = "aulas") <- usar para dar um nome específico à tabela criada no banco de dados
public class Cursos {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(length = 100, nullable = false)
    private String name;
    @Column(length = 20)
    private String tag;

}
