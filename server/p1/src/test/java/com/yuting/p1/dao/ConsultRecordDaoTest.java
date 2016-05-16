package com.yuting.p1.dao;

import com.google.gson.Gson;
import com.yuting.p1.model.ConsultRecord;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

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
    }
}
