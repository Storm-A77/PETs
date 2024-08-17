package petsbackend.pets_backend.model;

import java.sql.Blob;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "pets")
public class Pet {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="petname", unique=true, nullable=false)
    private String petname;

    
    @Column(name="petspecies")
    private String petspecies;
    
    @Lob
    @Column(name = "petphoto", columnDefinition = "BLOB")
    private byte[] petphoto;
    
    @Column(name = "petbirthday")
    private Date petbirthday;

    @Column(name = "petdescrip")
    private String petdescrip;
    
    // @ManyToOne(cascade = CascadeType.PERSIST)
    // private User user;
    
    
   
    
    public Date getPetbirthday() {
        return petbirthday;
    }

    public void setPetbirthday(Date petbirthday) {
        this.petbirthday = petbirthday;
    }

    public String getPetdescrip() {
        return petdescrip;
    }

    public void setPetdescrip(String petdescrip) {
        this.petdescrip = petdescrip;
    }

    public Pet(){}
    
    public Pet(Long id, String petname, String petspecies, byte[] petphoto){
        this.petname = petname;
        this.petspecies = petspecies;
        this.petphoto = petphoto;
    }
    
    

    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getPetname() {
        return petname;
    }
    
    public void setPetname(String petname) {
        this.petname = petname;
    }
    
    public String getPetspecies() {
        return petspecies;
    }
    
    public void setPetspecies(String petspecies) {
        this.petspecies = petspecies;
    }
    
    public byte[] getPetphoto() {
        return petphoto;
    }
    
    public void setPetphoto(byte[] petphoto) {
        this.petphoto = petphoto;
    }

    // public User getUser() {
    //     return user;
    // }

    // public void setUser(User user) {
    //     this.user = user;
    // }
}
