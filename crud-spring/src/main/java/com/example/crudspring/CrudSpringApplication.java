package com.example.crudspring;

import com.example.crudspring.model.Curso;
import com.example.crudspring.repository.CursosRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {

		 SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CursosRepository cursosRepository){
		return args -> {
			//cursosRepository.deleteAll();

			Curso c = new Curso();
			c.setName("Curso 1");
			c.setTags(Arrays.asList(new String[]{"Tag 2", " Tag 3"}));

			cursosRepository.save(c);
		};
	}

}
