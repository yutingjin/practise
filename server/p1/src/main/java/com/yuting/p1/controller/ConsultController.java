package com.yuting.p1.controller;

import com.yuting.p1.dao.Dao;
import com.yuting.p1.model.ConsultRecord;
import com.yuting.p1.utils.SessionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.Session;
import spark.utils.Assert;

import java.util.List;

/**
 * p1
 * Created by jinyuting on 5/16/16.
 */
public class ConsultController {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private Dao dao = new Dao();

    public List<ConsultRecord> getConsultRecords(Session session) {
        String userId = SessionUtils.getCurrentUserId(session);
        Assert.notNull(userId, "Cannot find current user id in the session.");
        logger.debug("Get Consult records for user {}", userId);
        return dao.getUserConsultRecords(userId);
    }
}
