package com.yuting.p1.dao;

import com.google.gson.Gson;
import com.yuting.p1.constants.Constants;
import com.yuting.p1.model.User;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.time.Instant;
import java.util.Date;
import java.util.List;

public class UserDaoTest {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private Gson gson = new Gson();

    private final Dao dao = new Dao();

    @Before
    public void startUp() {
        //
    }

    @Test
    public void testLoadAllUsers() {
        String sql = "select uuid, mobile, password from user";
        List<User> users;
        Sql2o userDb = new Sql2o(Constants.DATABASE_URL, Constants.USER, Constants.PASSWORD);
        try (Connection con = userDb.open()) {
            users = con.createQuery(sql).addColumnMapping("uuid", "id").executeAndFetch(User.class);
        }

        Assert.assertNotNull(users);
        Assert.assertTrue(users.size() > 0);
        // show result
        users.stream().forEach((item) -> logger.debug("{}\n", gson.toJson(item)));
    }

    @Test
    public void testAddUser() {
        User user = new User();
        user.setMobile("12312412412");
        user.setPassword("123456");
        user.setStatus("0");

        // save the user into database
        String userId = dao.addUser(user);

        user = dao.getUser(userId);

        Assert.assertNotNull(user);
        logger.debug(gson.toJson(user));
        Assert.assertEquals(user.getId(), user.getId());
        Assert.assertNotNull(user.getId());
        Assert.assertNotNull(user.getCreateTime());
        Assert.assertNotNull(user.getUpdateTime());
    }

    @Test
    public void testInstantVsDate() {
        Instant instant = Instant.now();
        System.out.println("Instant:" + instant.getEpochSecond() * 1000);
        System.out.println("Date: \t" + new Date().getTime());
    }
}