package com.example.crudspring;

import com.example.crudspring.model.Cursos;
import com.example.crudspring.repository.CursosRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {

		 SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CursosRepository cursosRepository){
		return args -> {
			cursosRepository.deleteAll();

			Cursos c = new Cursos();
			c.setName("Curso 3");
			c.setTag("Tag 3");

			cursosRepository.save(c);
		};
	}

}
