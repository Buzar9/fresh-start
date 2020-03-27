package pl.zhr.scouting.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "patrol")
public class Patrol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "patrol_id")
    private int patrolId;

    @Column(name = "patrol_name")
    private String patrolName;

    @OneToMany(mappedBy = "patrolId")
//            , cascade = CascadeType.REMOVE - usuw patrol i wszystkich users w tym patrolu)
    private List<User> users;

    public Patrol() {
    }

    public int getPatrolId() {
        return patrolId;
    }

    public void setPatrolId(int patrolId) {
        this.patrolId = patrolId;
    }

    public String getPatrolName() {
        return patrolName;
    }

    public void setPatrolName(String patrolName) {
        this.patrolName = patrolName;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public void addUser(User tempUser) {

        if(users == null) users = new ArrayList<>();
        users.add(tempUser);
        tempUser.setPatrolId(this);
    }
}
