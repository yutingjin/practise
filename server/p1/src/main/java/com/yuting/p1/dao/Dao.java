package com.yuting.p1.dao;

import com.yuting.p1.constants.DBConstants;
import com.yuting.p1.model.User;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class Dao {

    public Sql2o getConnection() {
        return new Sql2o(DBConstants.USER_DATABASE_URL, DBConstants.USER, DBConstants.PASSWORD);
    }

    public User getUser(String id) {
        String sql = "select uuid, mobile, password from user where uuid = :id";
        try (Connection con = this.getConnection().open()) {
            return con.createQuery(sql).addParameter("id", id).executeAndFetchFirst(User.class);
        }
    }

}
