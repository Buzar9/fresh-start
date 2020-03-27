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

    @GetMapping("/patrols/users")
    public List<User> findAll() {

        return userRepositoryImpl.findAll();
    }

    @GetMapping("/patrols/users/{userId}")
    public User findUserById (@PathVariable(value = "userId") int userId) {

        User tempUser = userRepositoryImpl.findByUserId(userId);

        return tempUser;
    }

    @PostMapping("/patrols/{patrolId}/users")
    public void addUser(@PathVariable(value = "patrolId") int patrolId,
                        @RequestBody User tempUser) {

        tempUser.setUserId(0);
        userRepositoryImpl.saveOrUpdate(tempUser, patrolId);
    }

    @PutMapping("/patrols/{patrolId}/users")
    public void updateUser(@PathVariable(value = "patrolId") int patrolId,
                            @RequestBody User tempUser) {

        userRepositoryImpl.saveOrUpdate(tempUser, patrolId);
    }

    @DeleteMapping("/patrols/users/{userId}")
    public String deleteUser(@PathVariable(value = "userId") int userId) {

        userRepositoryImpl.deleteUser(userId);

        return "Deleted user id - " + userId;
    }
}
