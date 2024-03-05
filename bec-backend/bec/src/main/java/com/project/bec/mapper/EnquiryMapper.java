package com.project.bec.mapper;

import com.project.bec.dto.Enquirydto;
import com.project.bec.entity.Enquiry;

public class EnquiryMapper {
    public static Enquirydto maptoEmployeeDto(Enquiry stud) {
        return new Enquirydto(
                stud.getEnquiryId(),
                stud.getStudent(),
                stud.getCourse(),
                stud.getEnquiryDate(),
                stud.getTitle(),
                stud.getEnquiryText(),
                stud.getEmail(),
                stud.getEnquiryType(),
                stud.getStatus()
                );
    }

    public static Enquiry maptoEmployee(Enquirydto studentdto) {
        return new Enquiry(
            studentdto.getEnquiryId(),
                studentdto.getStudent(),
                studentdto.getCourse(),
                studentdto.getEnquiryDate(),
                studentdto.getTitle(),
                studentdto.getEnquiryText(),
                studentdto.getEmail(),
                studentdto.getEnquiryType(),
                studentdto.getStatus());
    }
}
