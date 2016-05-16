package com.yuting.p1.utils;

import com.yuting.p1.constants.Constants;
import org.flywaydb.core.Flyway;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class DatabaseMigrationTool {

    private Flyway flyway;

    public DatabaseMigrationTool() {
        this.flyway = new Flyway();
        this.flyway.setDataSource(Constants.DATABASE_URL, Constants.USER, Constants.PASSWORD);
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

    /*
        Caution! Clean and migrate db!
     */
    public static void main(String... args) {
        DatabaseMigrationTool tool = new DatabaseMigrationTool();
        tool.clean();
        tool.migrate();
    }
}
