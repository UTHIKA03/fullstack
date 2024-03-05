package com.project.bec.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "payments")
public class Payment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    private UserInfo student;

    @ManyToOne
    @JoinColumn(name = "course_id", referencedColumnName = "courseid")
    private Course course;

    @Column(name = "status",nullable = false)
    private String status;

    @Column(name = "amount",nullable = false)
    private double amount;

    @Column(name = "paymentDate",nullable = false)
    private Date paymentDate;

    @Column(name = "modeOfPayment",nullable = false)
    private String modeOfPayment;

}
