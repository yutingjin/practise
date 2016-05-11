package com.yuting.p1.utils;

import com.yuting.p1.constants.Constants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class RedisClient {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private static JedisPool pool = new JedisPool(new JedisPoolConfig(), Constants.REDIS_URL);

    public String get(String key) {
        logger.debug("Get Key[{}] from Redis.", key);
        try (Jedis jedis = pool.getResource()) {
            return jedis.get(key);
        }
    }

    public void set(String key, String value) {
        logger.debug("Set Key[{}] and Value[{}] to Redis.", key, value);
        try (Jedis jedis = pool.getResource()) {
            jedis.set(key, value);
        }
    }
}
