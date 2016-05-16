package com.yuting.p1.model;

/**
 * p1
 * Created by jinyuting on 5/16/16.
 */
@SuppressWarnings("unused")
public class ConsultRecord extends Record {

    private String doctorId;

    private String medicines;

    public String getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(String doctorId) {
        this.doctorId = doctorId;
    }

    public String getMedicines() {
        return medicines;
    }

    public void setMedicines(String medicines) {
        this.medicines = medicines;
    }
}
