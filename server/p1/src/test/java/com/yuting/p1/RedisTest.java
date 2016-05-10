package com.yuting.p1;

import com.yuting.p1.utils.RedisClient;
import org.junit.Assert;
import org.junit.Test;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class RedisTest {

    @Test
    public void testRedis() {
        RedisClient client = new RedisClient();
        client.set("hello", "world");

        System.out.println(client.get("hello"));
        Assert.assertEquals(client.get("hello"), "world");
    }
}
