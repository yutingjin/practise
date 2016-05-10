package com.yuting.p1.utils;

import com.yuting.p1.constants.Constants;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class RedisClient {

    private static JedisPool pool = new JedisPool(new JedisPoolConfig(), Constants.REDIS_URL);


    public String get(String key) {
        try (Jedis jedis = pool.getResource()) {
            return jedis.get(key);
        }
    }

    public void set(String key, String value) {
        try (Jedis jedis = pool.getResource()) {
            jedis.set(key, value);
        }
    }
}
