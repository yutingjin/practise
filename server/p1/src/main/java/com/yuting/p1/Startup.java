package com.yuting.p1;

import com.yuting.p1.router.Router;
import com.yuting.p1.utils.DatabaseMigrationTool;

public class Startup {

    public static void main(String... args) {
        System.out.println("Migrating Database...");
        try {
            new DatabaseMigrationTool().migrate();
        } catch (Exception ex) {
            ex.printStackTrace();
            return;
        }

        System.out.println("Startup...");
        // Start the server
        new Router().initBefore().initAfter().handleException().route();
        System.out.println("Server started!");
    }

}