package com.yuting.p1;

import com.yuting.p1.router.Router;
import com.yuting.p1.utils.DatabaseMigrationTool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Startup {

    private static final Logger logger = LoggerFactory.getLogger(Startup.class);

    public static void main(String... args) {
        logger.info("Migrating Database...");
        try {
            new DatabaseMigrationTool().migrate();
        } catch (Exception ex) {
            ex.printStackTrace();
            return;
        }

        logger.info("Startup...");
        // Start the server
        new Router().initBefore().initAfter().handleException().route();
        logger.info("Server started!");
    }

}