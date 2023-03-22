package com.example.crudspring.model;

import com.fasterxml.classmate.GenericType;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.lang.reflect.GenericArrayType;
import java.util.List;

//@Getter <- gera getters
//@Setter <- gera setters
//O @Data gera tanto os getters como os setters, além de doutras funções
@Data
@Entity
//@Table(name = "aulas") <- usar para dar um nome específico à tabela criada no banco de dados
public class Cursos {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;
    @Column(length = 100, nullable = false)
    private String name;
    @ElementCollection
    private List<String> tags;

}
