package com.yuting.p1;

import com.yuting.p1.router.Router;

public class Startup {

    public static void main(String... args) {
        System.out.println("Startup...");
        new Router().route();
    }
}