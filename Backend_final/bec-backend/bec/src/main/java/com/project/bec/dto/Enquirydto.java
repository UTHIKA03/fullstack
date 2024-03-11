package com.project.bec.dto;

import java.sql.Date;

// import com.project.bec.entity.Course;
// import com.project.bec.entity.UserInfo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Enquirydto {

    private Long enquiryId;
    private Date enquiryDate;
    private String title;
    private String enquiryText;
    private String email;
    private String enquiryType;
    private String status;



}
