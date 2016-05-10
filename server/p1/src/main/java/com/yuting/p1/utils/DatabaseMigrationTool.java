package com.yuting.p1.utils;

import com.yuting.p1.constants.DBConstants;
import org.flywaydb.core.Flyway;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class DatabaseMigrationTool {

    public static void main(String... args) {

        Flyway flyway = new Flyway();
        flyway.setDataSource(DBConstants.DATABASE_URL, DBConstants.USER, DBConstants.PASSWORD);

        // Clean the database if checksum not matched
        //flyway.clean();

        //flyway.baseline();

        flyway.migrate();
    }
}
