package com.example.crudspring.repository;

import com.example.crudspring.model.Cursos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursosRepository extends JpaRepository<Cursos, Long> {



}
