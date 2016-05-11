package com.yuting.p1.dao;

import com.google.common.collect.Lists;
import com.google.gson.Gson;
import com.yuting.p1.constants.Constants;
import com.yuting.p1.model.User;
import org.junit.Assert;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;
import java.util.UUID;

public class UserDaoTest {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private Gson gson = new Gson();

    private final Dao dao = new Dao();

    @Test
    public void testLoadAllUsers() {
        String sql = "select uuid, mobile, password from user";
        List<User> users;
        Sql2o userDb = new Sql2o(Constants.DATABASE_URL, Constants.USER, Constants.PASSWORD);
        try (Connection con = userDb.open()) {
            users = con.createQuery(sql).addColumnMapping("uuid", "userId").executeAndFetch(User.class);
        }

        Assert.assertTrue(!Lists.newArrayList(users).isEmpty());
        users.stream().forEach((item) -> System.out.printf("%s\n", gson.toJson(item)));
    }

    @Test
    public void testGetUser() {
        String id = "60000001";
        User user = dao.getUser(id);
        Assert.assertNotNull(user);
        logger.debug(gson.toJson(user));
        Assert.assertEquals(user.getUserId(), id);
    }

    @Test
    public void testAddUser() {
        User user = new User();
        user.setUserId(UUID.randomUUID().toString());
        user.setMobile("12312412412");
        user.setPassword("123456");
        user.setStatus("0");

        dao.addUser(user);
    }
}