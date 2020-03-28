package pl.zhr.scouting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.zhr.scouting.entity.User;
import pl.zhr.scouting.entity.UserData;
import pl.zhr.scouting.repository.UserDataRepository;

import java.util.List;

@RestController
public class UserDataController {

    @Autowired
    private UserDataRepository userDataRepositoryImpl;

    @GetMapping("/patrols/users/data")
    public List<UserData> findAll() {

        List<UserData> userDataList = userDataRepositoryImpl.findAll();

        return userDataList;
    }

    @GetMapping("/patrols/users/{userId}/data")
    public UserData findUserDataByUserId (@PathVariable int userId) {

        UserData tempUserData = userDataRepositoryImpl.findByUserId(userId);

        return tempUserData;
    }

    @PostMapping("/patrols/users/{userId}/data")
    public void addDataToUser(@PathVariable int userId,
                                @RequestBody UserData tempUserData){

        tempUserData.setUserDataId(0);
        userDataRepositoryImpl.saveOrUpdate(tempUserData, userId);
    }

    @PutMapping("/patrols/users/{userId}/data")
    public void updateDatainUser(@PathVariable int userId,
                                 @RequestBody UserData tempUserData) {

        userDataRepositoryImpl.saveOrUpdate(tempUserData, userId);
    }

    @DeleteMapping("/patrols/users/{userId}/data")
    public String deleteUserData(@PathVariable int userId){

        userDataRepositoryImpl.deleteUserData(userId);

        return "Deleted data user id - " + userId;
    }
}

