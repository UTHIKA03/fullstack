package com.project.bec.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "enquiries")
public class Enquiry {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long enquiryId;

    @Column(name = "enquiryDate",nullable = false)
    private Date enquiryDate;

    @Column(name = "title",nullable = false)
    private String title;

    @Column(name = "enquiryText",nullable = false)
    private String enquiryText;
    
    @Column(name = "email",nullable = false)
    private String email;

    @Column(name = "enquiryType",nullable = false)
    private String enquiryType;

    @Column(name = "status",nullable = false)
    private String status;



}
