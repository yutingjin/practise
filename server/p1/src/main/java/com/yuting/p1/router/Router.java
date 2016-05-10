package com.yuting.p1.router;

import com.google.gson.Gson;
import org.eclipse.jetty.http.HttpStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static spark.Spark.*;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class Router {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private Gson gson = new Gson();

    public void route() {
        // enable the spark java error page
        //spark.debug.DebugScreen.enableDebugScreen();

        before((request, response) -> {
            boolean authenticated = false;

            // TODO validate

            if (!authenticated) {
                halt(HttpStatus.FORBIDDEN_403, "User not authenticated!");
            }

        });

        after((request, response) -> logger.info("After filter %s", request.toString()));

        get("/hello", (req, res) -> "Hello World", gson::toJson);

        post("shutdown", (req, res) -> {
            stop();
            return null;
        });

        get("/exception", (req, res) -> {
            throw new RuntimeException("Test exception page");
        });

        get("/halt", (req, res) -> {
            halt(401, "Testing for halt");
            return null;
        });
    }

}
