package com.yuting.p1.controller;

import com.yuting.p1.dao.Dao;
import com.yuting.p1.model.User;
import com.yuting.p1.utils.SessionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.Session;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class UserController {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private Dao dao = new Dao();

    public boolean login(User u, Session session) {
        if (u != null) {
            User user = dao.getUser(u.getId());
            if (user != null) {
                logger.debug("User[{}] login.", user.getId());
                // TODO verify password
                session.attribute("userId", user.getId());
                return true;
            }
        }
        throw new RuntimeException("Invalid User");
    }

    public boolean logout(Session session) {
        String userId = SessionUtils.getCurrentUserId(session);
        logger.debug("User[{}] logout.", userId);
        session.invalidate();
        return true;
    }

}
