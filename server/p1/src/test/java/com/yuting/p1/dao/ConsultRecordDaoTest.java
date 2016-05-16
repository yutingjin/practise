package com.yuting.p1.dao;

import com.google.gson.Gson;
import com.yuting.p1.model.ConsultRecord;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.sql2o.Connection;

import java.util.List;

/**
 * p1
 * Created by jinyuting on 5/16/16.
 */
public class ConsultRecordDaoTest {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private Gson gson = new Gson();

    private final Dao dao = new Dao();

    @Before
    public void startUp() {
        //
    }

    @Test
    public void testConsultRecord() {
        ConsultRecord record = new ConsultRecord();
        record.setUserId("60000001");
        record.setDoctorId("60000002");
        record.setStatus(0);
        record.setType(0);
        record.setTitle("unit test mock title");
        record.setDescription("unit test mock description");
        record.setMedicines("123456");

        String id = dao.addConsultRecord(record);
        Assert.assertNotNull(id);

        record = dao.getConsultRecord(id);
        Assert.assertNotNull(record);
        logger.debug(gson.toJson(record));
        Assert.assertNotNull(record.getCreateTime());
        Assert.assertNotNull(record.getUpdateTime());

        // Test add record within a transaction
        try (Connection con = dao.newConnection().beginTransaction()) {
            id = dao.addConsultRecord(record, con);
            con.commit();
        }
        Assert.assertNotNull(id);

        record = dao.getConsultRecord(id);
        Assert.assertNotNull(record);
        logger.debug(gson.toJson(record));
        Assert.assertNotNull(record.getCreateTime());
        Assert.assertNotNull(record.getUpdateTime());

        // Test add record within a transaction, and the transaction roll back
        try (Connection con = dao.newConnection().beginTransaction()) {
            id = dao.addConsultRecord(record, con);
            con.rollback();
        }
        Assert.assertNotNull(id);

        record = dao.getConsultRecord(id);
        Assert.assertNull(record);
    }

    @Test
    public void testGetConsultRecords() {
        ConsultRecord record = new ConsultRecord();
        record.setUserId("60000001");
        record.setDoctorId("60000002");
        record.setStatus(0);
        record.setType(0);
        record.setTitle("unit test mock title");
        record.setDescription("unit test mock description");
        record.setMedicines("123456");

        dao.addConsultRecord(record);

        List<ConsultRecord> records = dao.getUserConsultRecords("60000001");
        Assert.assertNotNull(records);
        Assert.assertTrue(records.size() > 0);
        records.stream().forEach((r) -> logger.debug(gson.toJson(r)));
    }
}
