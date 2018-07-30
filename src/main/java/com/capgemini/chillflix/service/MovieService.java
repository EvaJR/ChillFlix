package com.capgemini.chillflix.service;

import com.capgemini.chillflix.model.Movie;
import com.capgemini.chillflix.model.persistence.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class MovieService {

    @Autowired
    public MovieRepository movieRepository;

    public Movie create(Movie newMovie){
        this.movieRepository.save(newMovie);
        return newMovie;
    }

    public Iterable<Movie> list(){
        return this.movieRepository.findAll();
    }

    public Movie findById(long id){
        Movie result = this.movieRepository.findById(id).get();
        return result;
    }

    public Movie updateById(long id, Movie update){
        Movie tobeUpdated = this.movieRepository.findById(id).get();
        tobeUpdated.setName(update.getName());
        tobeUpdated.setGenre(update.getGenre());
        tobeUpdated.setDescription(update.getDescription());
        tobeUpdated.setUrl(update.getUrl());
        return this.movieRepository.save(tobeUpdated);
    }

    public void deleteById(long id){
        this.movieRepository.deleteById(id);
    }

    public MovieRepository getMovieRepository(){
        return movieRepository;
    }

    public void setMovieRepository(MovieRepository movieRepository){
        this.movieRepository = movieRepository;
    }

    public MovieService(){
    }

}
