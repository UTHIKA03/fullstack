package com.project.bec.mapper;

import com.project.bec.dto.Paymentdto;

import com.project.bec.entity.Payment;

public class PaymentMapper {
    public static Paymentdto maptoEmployeeDto(Payment stud) {
        return new Paymentdto(
                stud.getPaymentId(),
                stud.getStudent(),
                stud.getCourse(),
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
           studentdto.getCourse(),
           studentdto.getStatus(),
           studentdto.getAmount(),
           studentdto.getPaymentDate(),
           studentdto.getModeOfPayment());
    }
}
