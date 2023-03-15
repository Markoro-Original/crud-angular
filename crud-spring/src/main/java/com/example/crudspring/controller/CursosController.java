package com.example.crudspring.controller;

import com.example.crudspring.model.Cursos;
import com.example.crudspring.repository.CursosRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursosController {

    private final CursosRepository cursosRepository;

    //@RequestMapping(method = RequestMethod.GET) <- outra forma de usar o método get
    @GetMapping
    public @ResponseBody List<Cursos> list() {

        return cursosRepository.findAll();

    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public void create(@RequestBody Cursos curso){
        cursosRepository.save(curso);
        //return ResponseEntity.status(HttpStatus.CREATED).body(cursosRepository.save(curso));
    }

}
