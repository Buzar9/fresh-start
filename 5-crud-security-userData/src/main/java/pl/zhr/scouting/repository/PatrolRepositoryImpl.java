package pl.zhr.scouting.repository;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pl.zhr.scouting.entity.Patrol;
import pl.zhr.scouting.entity.User;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class PatrolRepositoryImpl implements PatrolRepository {

    private EntityManager entityManager;

    @Autowired
    public PatrolRepositoryImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<Patrol> findAll() {

        Session currentSession = entityManager.unwrap(Session.class);
        Query query = currentSession.createQuery("from Patrol", Patrol.class);
        List<Patrol> patrolList = query.getResultList();

        return patrolList;
    }

    @Override
    @Transactional
    public Patrol findById(int patrolId) {

        Session currentSession = entityManager.unwrap(Session.class);
        Patrol tempPatrol = currentSession.get(Patrol.class, patrolId);

        return tempPatrol;
    }

    @Override
    @Transactional
    public void saveOrUpdate(Patrol tempPatrol) {

        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(tempPatrol);
    }

    @Override
    @Transactional
    public void addUser(int patrolId, int userId){

        Session currentSession = entityManager.unwrap(Session.class);
        User tempUser = currentSession.get(User.class, userId);
        Patrol tempPatrol = currentSession.get(Patrol.class, patrolId);
        tempPatrol.addUser(tempUser);
        tempUser.setPatrolName(tempPatrol);
        tempUser.setPatrolId(tempPatrol);
    }

    @Override
    @Transactional
    public void delete(int patrolId) {

        Session currentSession = entityManager.unwrap(Session.class);
        Patrol tempPatrol = currentSession.get(Patrol.class, patrolId);
        List<User> tempUsers = tempPatrol.getUsers();
        for (User tempUser : tempUsers) {
            tempUser.setPatrolId(null);
            tempUser.setPatrolName(null);
        }
        currentSession.delete(tempPatrol);
    }
}

