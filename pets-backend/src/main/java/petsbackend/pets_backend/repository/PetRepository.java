package petsbackend.pets_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import petsbackend.pets_backend.model.Pet;
import java.util.List;


@EnableJpaRepositories
@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
    
}
