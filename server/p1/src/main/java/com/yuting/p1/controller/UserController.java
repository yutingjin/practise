package com.yuting.p1.controller;

import com.yuting.p1.dao.Dao;
import com.yuting.p1.model.User;
import spark.Session;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class UserController {

    private Dao dao = new Dao();

    public boolean login(User u, Session session) {
        if (u != null) {
            User user = dao.getUser(u.getUserId());
            if (user != null) {
                // TODO verify password
                session.attribute("userId", user.getUserId());
                return true;
            }
        }
        throw new RuntimeException("Invalid User");
    }

    public boolean logout(Session session) {
        session.invalidate();
        return true;
    }

    public String getCurrentUserId(Session session) {
        Object userId = session.attribute("userId");
        if (userId != null && userId instanceof String) {
            return (String) userId;
        }
        return null;
    }
}
