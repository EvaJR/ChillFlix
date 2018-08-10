package com.capgemini.chillflix.model.persistence;

import com.capgemini.chillflix.model.Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {

    List<Movie> findAllByOrderByIdDesc();

}
