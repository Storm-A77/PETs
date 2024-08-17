package petsbackend.pets_backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import petsbackend.pets_backend.model.User;

//You need the main datatype of User to pass through the extends.
//In this case it would be Long, since ID is our primary key
@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

 public User findByEmail(String email);

}

