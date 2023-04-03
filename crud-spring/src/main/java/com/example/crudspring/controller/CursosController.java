package com.example.crudspring.controller;

import com.example.crudspring.model.Curso;
import com.example.crudspring.repository.CursosRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursosController {

    private final CursosRepository cursosRepository;

    //@RequestMapping(method = RequestMethod.GET) <- outra forma de usar o método get
    @GetMapping
    public @ResponseBody List<Curso> list() {

        return cursosRepository.findAll();

    }

    @GetMapping("/{id}")
    public ResponseEntity<Curso> findById(@PathVariable("id") Long id) {
        return cursosRepository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public void create(@RequestBody Curso curso){
        cursosRepository.save(curso);
        //return ResponseEntity.status(HttpStatus.CREATED).body(cursosRepository.save(curso));
    }

}
