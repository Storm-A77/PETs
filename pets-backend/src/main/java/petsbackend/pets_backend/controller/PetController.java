package petsbackend.pets_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import petsbackend.pets_backend.model.Pet;
import petsbackend.pets_backend.model.User;
import petsbackend.pets_backend.repository.PetRepository;
import petsbackend.pets_backend.repository.UserRepository;
import petsbackend.pets_backend.services.PetService;
import petsbackend.pets_backend.services.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin("http://localhost:3000")
public class PetController {
 
    @Autowired
    private PetRepository petRepository;

    @Autowired
    private PetService petService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    //Get the ID of the user currently signed in.
    //Then we take the pet that's being created and save it in the pet table.
    //On 47 then we create a list that holds Pets so we can store all of them that are assosiated with the user.
    //Then on 49 we take the list of pets and add to it.
    @PostMapping("/{id}/addpet")
    Pet newPet(@RequestBody Pet newPet, @PathVariable Long id) {
        User user = userService.findById(id);

        

        Pet savedPet = petRepository.save(newPet);
        


        List<Pet> userPets = user.getPets();
        userPets.add(savedPet);
        user.setPets(userPets);
        userRepository.save(user);
        return savedPet;
    }

    
    
    
}
