package com.yuting.p1.utils;

import com.yuting.p1.constants.DBConstants;
import org.flywaydb.core.Flyway;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class DatabaseMigrationTool {

    private Flyway flyway;

    public DatabaseMigrationTool() {
        this.flyway = new Flyway();
        this.flyway.setDataSource(DBConstants.DATABASE_URL, DBConstants.USER, DBConstants.PASSWORD);
    }

    public void migrate() {
        this.flyway.migrate();
    }

    public void clean() {
        this.flyway.clean();
    }

    public void repair() {
        this.flyway.repair();
    }

    public static void main(String... args) {
        new DatabaseMigrationTool().migrate();
    }
}
