package com.project.bec.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.bec.entity.Enquiry;



public interface EnquiryRepo extends JpaRepository<Enquiry, Long> {
   Optional<Enquiry> findByEnquiryId(Long enquiryId);
}
 