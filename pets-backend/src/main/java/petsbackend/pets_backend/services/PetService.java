package petsbackend.pets_backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import petsbackend.pets_backend.model.Pet;
import petsbackend.pets_backend.model.User;
import petsbackend.pets_backend.repository.PetRepository;
import petsbackend.pets_backend.repository.UserRepository;

@Service
public class PetService {
 
@Autowired
private PetRepository petRepository;

@Autowired
private UserRepository userRepository;

// public Pet createPetWithUser(Pet pet, Long userid){
//     User user = userRepository.findById(userid).orElse(null);
//     pet.setUser(user);
//     return petRepository.save(pet);
// }
   
}
