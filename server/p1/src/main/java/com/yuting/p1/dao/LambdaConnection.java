package com.yuting.p1.dao;

import org.sql2o.Connection;

/**
 * p1
 * Created by jinyuting on 5/16/16.
 */
public interface LambdaConnection {

    /**
     * A lambda function to be executed in the try with resource statement with connection
     *
     * @param con
     * @return
     */
    Object execute(Connection con);

}
