package com.project.bec.service;

import java.util.List;

import com.project.bec.dto.Enquirydto;

public interface EnquiryService {
     
     Enquirydto createEnquiry(Enquirydto studentdto);

    List<Enquirydto> getAllEnquiry();
}