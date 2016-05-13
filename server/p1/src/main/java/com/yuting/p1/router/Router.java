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

    private final static String JSON_ACCEPT_TYPE = "application/json";

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
        after((request, response) -> logger.info("After filter {}", request.toString()));

        return this;
    }

    public Router handleException() {

        exception(Exception.class, ((exception, request, response) -> logger.error("Meet exception: ", exception)));

        return this;
    }

    public Router route() {

        get("/api/hello", JSON_ACCEPT_TYPE, (req, res) -> req.session().attribute("userId"), gson::toJson);

        get("/api/exception", (req, res) -> {
            throw new RuntimeException("Test exception page");
        });

        post("/login", JSON_ACCEPT_TYPE, ((request, response) -> userController.login(gson.fromJson(request.body(), User.class), request.session())), gson::toJson);

        post("/logout", JSON_ACCEPT_TYPE, ((request, response) -> userController.logout(request.session())));

        return this;
    }

}
