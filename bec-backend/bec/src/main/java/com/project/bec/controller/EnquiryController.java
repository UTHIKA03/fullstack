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

    @PostMapping
    public ResponseEntity<Enquirydto> createCourse(@RequestBody Enquirydto courseDto) {
        Enquirydto savedCourse = courseService.createEnquiry(courseDto);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    // @GetMapping("{id}")
    // public ResponseEntity<Coursedto> getCourseById(@PathVariable("id") Long courseId) {
    //     Coursedto courseDto = courseService.getCourseById(courseId);
    //     return ResponseEntity.ok(courseDto);
    // }

    @GetMapping
    public ResponseEntity<List<Enquirydto>> getAllCourses() {
        List<Enquirydto> courses = courseService.getAllEnquiry();
        return ResponseEntity.ok(courses);
    }

    // @PutMapping("{id}")
    // public ResponseEntity<CourseDto> updateCourse(@PathVariable("id") Long courseId, @RequestBody CourseDto courseDto) {
    //     CourseDto updatedCourse = courseService.updateCourse(courseId, courseDto);
    //     return ResponseEntity.ok(updatedCourse);
    // }

    // @DeleteMapping("{id}")
    // public ResponseEntity<Void> deleteCourse(@PathVariable("id") Long courseId) {
    //     courseService.deleteCourse(courseId);
    //     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    // }
}
