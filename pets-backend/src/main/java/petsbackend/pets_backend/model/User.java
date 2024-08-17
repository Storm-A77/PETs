package petsbackend.pets_backend.model;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="email", unique = true, nullable = false)
    private String email;

    @Column(name = "password")
    private String password;

    //When it's one to many, the foreign key is always stored in the child. One being the parent, many being the child. Since our user is grabbing the pets, that makes it our parent
    
    @OneToMany
    @JoinColumn(name ="userid")
    private List<Pet> pets;


    public User(){}

    //V This guy is a constructor NOT getters and setters
    public User(Long id, String email, String password){
        this.id = id;
        this.email = email;
        this.password = password;
    }

    //THATS WHAT THESE DUDES ARE :3

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Pet> getPets() {
        return pets;
    }

    public void setPets(List<Pet> pets) {
        this.pets = pets;
    }

    
    

}
