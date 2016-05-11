package com.yuting.p1.dao;

import com.yuting.p1.constants.Constants;
import com.yuting.p1.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.Date;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class Dao {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final Sql2o sql2o;

    public Dao() {
        this.sql2o = this.newConnection();
    }

    public Sql2o newConnection() {
        return new Sql2o(Constants.DATABASE_URL, Constants.USER, Constants.PASSWORD);
    }

    public User getUser(String id) {
        String sql = "select uuid, mobile, password from user where uuid = :id";
        try (Connection con = this.sql2o.open()) {
            return con.createQuery(sql).addParameter("id", id).addColumnMapping("uuid", "userId").executeAndFetchFirst(User.class);
        }
    }

    public void addUser(User user) {
        String sql = "INSERT INTO user ( uuid, mobile, status, password, create_time, update_time)" +
                " VALUES (:userId, :mobile, :status, :password, :createTime, :updateTime)";
        try (Connection con = this.sql2o.open()) {
            Object key = con.createQuery(sql, true)
                    .addParameter("userId", user.getUserId())
                    .addParameter("mobile", user.getMobile())
                    .addParameter("status", user.getStatus())
                    .addParameter("password", user.getPassword())
                    .addParameter("createTime", new Date().getTime())
                    .addParameter("updateTime", new Date().getTime())
                    .executeUpdate()
                    .getKey();
            logger.debug("Get key {}", key);
        }
    }

}
