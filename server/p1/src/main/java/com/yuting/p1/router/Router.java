package com.yuting.p1.router;

import com.google.gson.Gson;
import com.yuting.p1.controller.UserController;
import com.yuting.p1.model.User;
import org.eclipse.jetty.http.HttpStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static spark.Spark.*;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class Router {

    final private Logger logger = LoggerFactory.getLogger(getClass());

    private Gson gson = new Gson();

    private UserController userController = new UserController();

    public Router initBefore() {
        // enable the spark java error page
        //spark.debug.DebugScreen.enableDebugScreen();

        before("/api/*", (request, response) -> {
            if (request.session().attribute("userId") == null) {
                halt(HttpStatus.FORBIDDEN_403, "Please login first!");
            }
        });

        return this;
    }

    public Router initAfter() {
        after((request, response) -> logger.info("After filter %s", request.toString()));

        return this;
    }

    public Router handleException() {
        logger.debug("debug");

        exception(Exception.class, ((exception, request, response) -> exception.printStackTrace()));

        return this;
    }

    public Router route() {

        get("/api/hello", (req, res) -> req.session().attribute("userId"), gson::toJson);

        get("/api/exception", (req, res) -> {
            throw new RuntimeException("Test exception page");
        });

        post("/login", ((request, response) -> userController.login(gson.fromJson(request.body(), User.class), request.session())), gson::toJson);

        post("/logout", ((request, response) -> userController.logout(request.session())));

        return this;
    }

}
