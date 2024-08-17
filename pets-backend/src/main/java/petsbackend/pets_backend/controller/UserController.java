package petsbackend.pets_backend.controller;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import petsbackend.pets_backend.model.Pet;
import petsbackend.pets_backend.model.User;
import petsbackend.pets_backend.repository.PetRepository;
import petsbackend.pets_backend.repository.UserRepository;
import petsbackend.pets_backend.services.UserService;

import java.util.List;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

   

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
    
    public User createUser(User user){
        return userRepository.save(user);
    }

    

    //This specifies that it's taking in taking in Json, which also outputs json. 
    //Don't techinically need consumes/produces application_json_value since react already makes it's objects to JSON
    @RequestMapping(
        value = "/signin",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE,
        method = RequestMethod.POST
    )

    //RequestBody is the information that's being sent to the method. IE User's information
    //Requestbody is like the Json Raw file in postman
    public ResponseEntity<Object> signIn(@RequestBody User user) {
        try {
            //Goes to UserService to attend to the method. WHich goes through Authentication and determines if it's ok or not.
            User loggedInUser = userService.signIn(user);
            return new ResponseEntity<Object>(loggedInUser, HttpStatus.OK);
            //loggedInUser is the entire user object we just tried to sign in.
        } catch (Exception e) {
            //Catching when the authentication didn't go through properly and displays what went wrong.
            System.out.println(e);
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
            //Bad Request is their fault :)
        } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
            //This one is MY fault hehe :)
        }
    }

    @RequestMapping(
    value="/finduserbyid/{id}",
    produces = MediaType.APPLICATION_JSON_VALUE,
    method=RequestMethod.GET
)
public ResponseEntity<Object> findUserById(@PathVariable Long id){


    try{

        User foundUser = userService.findById(id);
        return new ResponseEntity<Object>(foundUser,HttpStatus.OK);

    }
    catch(Exception e){
        System.out.println(e.getMessage());
    return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
    catch(Error e){
    System.out.println(e.getMessage());
    return new ResponseEntity<Object>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);}
}


@RequestMapping(
        value = "/user/{id}/pets",
        produces = MediaType.APPLICATION_JSON_VALUE,
        method = RequestMethod.GET
    )
    public ResponseEntity<Object> getUserPets(@PathVariable Long id){
        try {
            List<Pet> pets = userService.getUserPets(id);
            return new ResponseEntity<>(pets, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
