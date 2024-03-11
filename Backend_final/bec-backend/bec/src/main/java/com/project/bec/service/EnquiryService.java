package com.project.bec.service;

import java.util.List;

import com.project.bec.dto.Enquirydto;

public interface EnquiryService {
     
     Enquirydto createEnquiry(Enquirydto studentdto);

     List<Enquirydto> getAllEnquiry();
     Enquirydto getEnquiryById(Long enquiryId);
     Enquirydto updateEnquiry(Long enquiryId, Enquirydto enquiryDto);
     void deleteEnquiry(Long enquiryId);
}