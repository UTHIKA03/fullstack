package com.project.bec.mapper;

import com.project.bec.dto.Paymentdto;

import com.project.bec.entity.Payment;

public class PaymentMapper {
    public static Paymentdto maptoEmployeeDto(Payment stud) {
        return new Paymentdto(
                stud.getPaymentId(),
                stud.getStudent(),
             
                stud.getStatus(),
                stud.getAmount(),
                stud.getPaymentDate(),
                stud.getModeOfPayment()
                );
    }

    public static Payment maptoEmployee(Paymentdto studentdto) {
        return new Payment(
           studentdto.getPaymentId(),
           studentdto.getStudent(),
           
           studentdto.getStatus(),
           studentdto.getAmount(),
           studentdto.getPaymentDate(),
           studentdto.getModeOfPayment());
    }
}
