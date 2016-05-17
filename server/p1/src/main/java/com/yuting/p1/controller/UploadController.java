package com.yuting.p1.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.Request;
import spark.utils.Assert;

import javax.servlet.MultipartConfigElement;
import javax.servlet.ServletException;
import javax.servlet.http.Part;
import java.io.IOException;

/**
 * p1
 * Created by jinyuting on 5/17/16.
 */
public class UploadController {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    /*
        <form method="post" enctype="multipart/form-data" action="http://localhost:4567/upload">
          <input type="file" name="file" accept="image/*">
          <input type="submit">
        </form>
     */
    public boolean upload(Request request) throws IOException, ServletException {
        MultipartConfigElement multipartConfigElement = new MultipartConfigElement("/tmp");
        request.raw().setAttribute("org.eclipse.jetty.multipartConfig", multipartConfigElement);

        Part file = request.raw().getPart("file"); //file is name of the upload form
        Assert.notNull(file);
        logger.debug("Processing the upload file:{} with size:{}", file.getName(), file.getSize());
        // TODO upload file handler

        return true;
    }
}
