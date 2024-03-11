package com.project.bec.service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.project.bec.dto.Enquirydto;
import com.project.bec.entity.Enquiry;
import com.project.bec.mapper.EnquiryMapper;
import com.project.bec.repository.EnquiryRepo;
import com.project.bec.service.EnquiryService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EnquiryServiceImpl implements EnquiryService {

    private final EnquiryRepo courseRepo;

    @Override
    public Enquirydto createEnquiry(Enquirydto courseDto) {
        Enquiry course = EnquiryMapper.maptoEmployee(courseDto);
        course.setStatus("Pending");
        Enquiry savedCourse = courseRepo.save(course);
        return EnquiryMapper.maptoEmployeeDto(savedCourse);
    }

    @Override
    public List<Enquirydto> getAllEnquiry() {
        List<Enquiry> courses = courseRepo.findAll();
        return courses.stream()
                .map(EnquiryMapper::maptoEmployeeDto)
                .collect(Collectors.toList());
    }
    @Override
    public Enquirydto getEnquiryById(Long enquiryId) {
        Optional<Enquiry> optionalEnquiry = courseRepo.findById(enquiryId);
        Enquiry enquiry = optionalEnquiry.orElseThrow(() ->
                new RuntimeException("Enquiry not found with id: " + enquiryId));
        return EnquiryMapper.maptoEmployeeDto(enquiry);
    }

    @Override
    public Enquirydto updateEnquiry(Long enquiryId, Enquirydto enquiryDto) {
        Optional<Enquiry> optionalEnquiry = courseRepo.findById(enquiryId);
        Enquiry enquiry = optionalEnquiry.orElseThrow(() ->
                new RuntimeException("Enquiry not found with id: " + enquiryId));

        // Update the enquiry entity with the new data from enquiryDto
        enquiry.setTitle(enquiryDto.getTitle());
        enquiry.setEnquiryText(enquiryDto.getEnquiryText());
        enquiry.setEmail(enquiryDto.getEmail());
        enquiry.setEnquiryType(enquiryDto.getEnquiryType());
        enquiry.setStatus(enquiryDto.getStatus());

        // Save the updated enquiry entity
        Enquiry updatedEnquiry = courseRepo.save(enquiry);
        return EnquiryMapper.maptoEmployeeDto(updatedEnquiry);
    }

    @Override
    public void deleteEnquiry(Long enquiryId) {
        courseRepo.deleteById(enquiryId);
    }

}


