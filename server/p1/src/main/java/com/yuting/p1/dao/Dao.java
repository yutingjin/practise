package com.yuting.p1.dao;

import com.yuting.p1.constants.Constants;
import com.yuting.p1.model.ConsultRecord;
import com.yuting.p1.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * p1
 * Created by jinyuting on 5/10/16.
 */
public class Dao {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final Sql2o sql2o;

    public Dao() {
        this.sql2o = this.newConnection();
    }

    public Sql2o newConnection() {
        return new Sql2o(Constants.DATABASE_URL, Constants.USER, Constants.PASSWORD);
    }

    public User getUser(String id) {
        String sql = "select * from user where uuid = :id";
        try (Connection con = this.sql2o.open()) {
            return con.createQuery(sql).addParameter("id", id)
                    .addColumnMapping("uuid", "id")
                    .addColumnMapping("create_time", "createTime")
                    .addColumnMapping("update_time", "updateTime")
                    .executeAndFetchFirst(User.class);
        }
    }

    public String addUser(User user) {
        String sql = "INSERT INTO user ( uuid, mobile, status, password, create_time, update_time)" +
                " VALUES (:id, :mobile, :status, :password, :createTime, :updateTime)";
        String id = UUID.randomUUID().toString();
        try (Connection con = this.sql2o.open()) {
            Object key = con.createQuery(sql, true).bind(user)
                    .addParameter("id", id)
                    .addParameter("createTime", new Date().getTime())
                    .addParameter("updateTime", new Date().getTime())
                    .executeUpdate()
                    .getKey();
            logger.debug("Get key {}", key);
        }
        return id;
    }

    public List<ConsultRecord> getUserConsultRecords(String userId) {
        String sql = "select * from consult_record where user_id = :userId";
        try (Connection con = this.sql2o.open()) {
            return con.createQuery(sql).addParameter("userId", userId)
                    .addColumnMapping("uuid", "id")
                    .addColumnMapping("user_id", "userId")
                    .addColumnMapping("doctor_id", "doctorId")
                    .addColumnMapping("create_time", "createTime")
                    .addColumnMapping("update_time", "updateTime")
                    .executeAndFetch(ConsultRecord.class);
        }
    }

    public ConsultRecord getConsultRecord(String id) {
        String sql = "select * from consult_record where uuid = :id";
        try (Connection con = this.sql2o.open()) {
            return con.createQuery(sql).addParameter("id", id)
                    .addColumnMapping("uuid", "id")
                    .addColumnMapping("user_id", "userId")
                    .addColumnMapping("doctor_id", "doctorId")
                    .addColumnMapping("create_time", "createTime")
                    .addColumnMapping("update_time", "updateTime")
                    .executeAndFetchFirst(ConsultRecord.class);
        }
    }

    /**
     * Add a consult Record
     *
     * @param record     a data structure with consult record
     * @param connection for the outer transaction
     * @return Consult Record ID
     */
    public String addConsultRecord(ConsultRecord record, Connection... connection) {
        final String sql = "insert into consult_record (uuid, user_id, title, status, doctor_id, description, medicines, create_time, update_time)" +
                " values (:id, :userId, :title, :status, :doctorId, :description, :medicines, :createTime, :updateTime)";
        final String id = UUID.randomUUID().toString();

        LambdaConnection execConn = con -> con.createQuery(sql).bind(record)
                .addParameter("id", id)
                .addParameter("createTime", new Date().getTime())
                .addParameter("updateTime", new Date().getTime())
                .executeUpdate();

        if (connection == null || connection.length == 0) {
            try (Connection con = this.sql2o.open()) {
                execConn.execute(con);
            }
        } else {
            execConn.execute(connection[0]);
        }
        return id;
    }

}
