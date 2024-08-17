package petsbackend.pets_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import petsbackend.pets_backend.PetsBackendApplication;
import petsbackend.pets_backend.model.Pet;
import petsbackend.pets_backend.model.User;
import petsbackend.pets_backend.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;


    public User signIn(User user) throws Exception{
        User foundUser = userRepository.findByEmail(user.getEmail());

        if (foundUser == null) {
            throw new Exception("User not found");
        }
    
        if (!foundUser.getPassword().equals(user.getPassword())) {
            throw new Exception("Invalid credentials");
        }
    
        return foundUser;
    }
    public User findById(Long id) {

        User user = userRepository.findById(id).orElse(null);

        return user;

    }

    public List<Pet> getUserPets(Long userid) {
        Optional<User> user = userRepository.findById(userid);

        if (user.isPresent()) {
            return user.get().getPets();
        } else {
            throw new RuntimeException("User not found");
        }
    }
    }
