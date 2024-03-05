package com.project.bec.service;

import java.util.List;
import com.project.bec.dto.Paymentdto;

public interface PaymentService {
    Paymentdto makePayment(Paymentdto courseDto);

    List<Paymentdto> getAllPayment();
}
