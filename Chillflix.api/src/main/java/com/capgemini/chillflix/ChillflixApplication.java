package com.capgemini.chillflix;

import com.capgemini.chillflix.controller.AppController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChillflixApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChillflixApplication.class, args);
		AppController appController = new AppController();
		appController.run();
	}
}
