package com.project.bec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.bec.entity.Payment;

public interface PaymentRepo extends JpaRepository<Payment, Long> {

}
