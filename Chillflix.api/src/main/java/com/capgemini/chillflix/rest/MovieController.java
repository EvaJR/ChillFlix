package com.capgemini.chillflix.rest;

import com.capgemini.chillflix.model.Movie;
import com.capgemini.chillflix.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Movie> create(@RequestBody Movie newMovie){
        this.movieService.create(newMovie);
        return new ResponseEntity<>(newMovie, HttpStatus.CREATED);
    }

    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public Iterable<Movie> list() {
        return this.movieService.list();
    }

    @GetMapping("recent")
    @CrossOrigin(origins = "http://localhost:4200")
    public Iterable<Movie> findAllByOrderByIdDesc() {
        return this.movieService.findAllByOrderByIdDesc();
    }

    @GetMapping("{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Movie findById(@PathVariable long id){
        return this.movieService.findById(id);
    }

    @DeleteMapping("{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void delete(@PathVariable long id){
        this.movieService.deleteById(id);
    }

    @PutMapping("{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Movie updateById(@PathVariable long id, @RequestBody Movie update){
        return this.movieService.updateById(id, update);
    }

    public MovieService getMovieService(){
        return this.movieService;
    }

    public void setMovieService(MovieService movieService){
        this.movieService = movieService;
    }

    public MovieController(){
    }

}
