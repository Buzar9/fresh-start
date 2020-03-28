package pl.zhr.scouting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.zhr.scouting.entity.User;
import pl.zhr.scouting.repository.UserRepository;


import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepositoryImpl;

//    todo wywalić wszystkie "/patrols
//    todo jeżeli request potrzebuje patrolu, dodać osobne mapowanie w PatrolController
//    todo dodać entery na końcu każdego pliku (enter po każdym '}')

    @GetMapping("/users")
    public List<User> findAll() {

        return userRepositoryImpl.findAll();
    }

    @GetMapping("/users/{userId}")
    public User findUserById (@PathVariable(value = "userId") int userId) {

        User tempUser = userRepositoryImpl.findByUserId(userId);

        return tempUser;
    }

    @PostMapping("/users")
    public void addUser(@RequestBody User tempUser) {

        tempUser.setUserId(0);
        userRepositoryImpl.saveOrUpdate(tempUser);
    }

    @PutMapping("/users/{userId}")
    public void updateUser(@PathVariable int userId,
                           @RequestBody User tempUser) {

        tempUser.setUserId(userId);
        userRepositoryImpl.saveOrUpdate(tempUser);
    }

    @DeleteMapping("/users/{userId}")
    public String deleteUser(@PathVariable(value = "userId") int userId) {

        userRepositoryImpl.deleteUser(userId);

        return "Deleted user id - " + userId;
    }
}

