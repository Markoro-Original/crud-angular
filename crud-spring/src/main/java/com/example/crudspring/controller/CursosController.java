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
    public ResponseEntity<Curso> findById(@PathVariable("id") Long id) { //O ("id") é necessário apenas se a variável id tivesse um nome diferente da variável de path ("/{id}")
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

    @PutMapping("/{id}")
    public ResponseEntity<Curso> update(@PathVariable Long id, @RequestBody Curso curso){
        return cursosRepository.findById(id)
                .map(record -> {
                    record.setName(curso.getName());
                    record.setTags(curso.getTags());
                    Curso updated = cursosRepository.save(record); //essa linha não parece ser necessária. Na linha de baixo, basta usar .body(record)
                    return ResponseEntity.ok().body(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
