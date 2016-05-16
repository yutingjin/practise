package com.yuting.p1.utils;

import spark.Session;

/**
 * p1
 * Created by jinyuting on 5/16/16.
 */
public class SessionUtils {

    public static String getCurrentUserId(Session session) {
        String userId = null;
        Object obj = session.attribute("userId");
        if (obj != null && obj instanceof String) {
            userId = (String) obj;
        }
        return userId;
    }
}
