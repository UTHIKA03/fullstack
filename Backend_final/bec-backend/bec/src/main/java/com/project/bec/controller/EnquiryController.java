package com.project.bec.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.bec.dto.Enquirydto;
import com.project.bec.service.EnquiryService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/enquiries")
public class EnquiryController {

    private final EnquiryService courseService;

    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping
    public ResponseEntity<Enquirydto> createCourse(@RequestBody Enquirydto courseDto) {
        courseDto.setEnquiryDate(new java.sql.Date(System.currentTimeMillis()));
        Enquirydto savedCourse = courseService.createEnquiry(courseDto);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Enquirydto> getEnquiryById(@PathVariable("id") Long enquiryId) {
        Enquirydto enquiryDto = courseService.getEnquiryById(enquiryId);
        return ResponseEntity.ok(enquiryDto);
    }
    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping
    public ResponseEntity<List<Enquirydto>> getAllCourses() {
        List<Enquirydto> courses = courseService.getAllEnquiry();
        return ResponseEntity.ok(courses);
    }
    @CrossOrigin(origins = "http://localhost:4000")
    @PutMapping("/{id}")
    public ResponseEntity<Enquirydto> updateEnquiry(@PathVariable("id") Long enquiryId, @RequestBody Enquirydto enquiryDto) {
        Enquirydto updatedEnquiry = courseService.updateEnquiry(enquiryId, enquiryDto);
        return ResponseEntity.ok(updatedEnquiry);
    }
    @CrossOrigin(origins = "http://localhost:4000")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnquiry(@PathVariable("id") Long enquiryId) {
        courseService.deleteEnquiry(enquiryId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
