package com.yuting.p1;

import com.google.common.collect.Lists;
import com.google.gson.Gson;
import com.yuting.p1.constants.DBConstants;
import com.yuting.p1.dao.Dao;
import com.yuting.p1.model.User;
import org.junit.Assert;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

public class DatabaseTest {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private Gson gson = new Gson();

    @Test
    public void testLoadAllUsers() {
        String sql = "select uuid, mobile, password from user";
        List<User> users;
        Sql2o userDb = new Sql2o(DBConstants.DATABASE_URL, DBConstants.USER, DBConstants.PASSWORD);
        try (Connection con = userDb.open()) {
            users = con.createQuery(sql).addColumnMapping("uuid", "userId").executeAndFetch(User.class);
        }

        Assert.assertTrue(!Lists.newArrayList(users).isEmpty());
        users.stream().forEach((item) -> System.out.printf("%s\n", gson.toJson(item)));
    }

    @Test
    public void testGetUser() {
        String id = "60000001";
        User user = new Dao().getUser(id);
        Assert.assertNotNull(user);
        System.out.printf("%s", gson.toJson(user));
        Assert.assertEquals(user.getUserId(), id);
    }
}