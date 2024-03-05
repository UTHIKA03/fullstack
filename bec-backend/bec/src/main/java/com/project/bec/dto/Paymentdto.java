package com.project.bec.dto;

import java.sql.Date;

import com.project.bec.entity.Course;
import com.project.bec.entity.UserInfo;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Paymentdto {
    
    
    private Long paymentId;
    private UserInfo student;
    private Course course;
    private String status;
    private double amount;
    private Date paymentDate;
    private String modeOfPayment;

}

