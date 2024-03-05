package com.project.bec.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.bec.dto.Paymentdto;
import com.project.bec.service.PaymentService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    private final PaymentService courseService;

    @PostMapping
    public ResponseEntity<Paymentdto> createCourse(@RequestBody Paymentdto courseDto) {
        Paymentdto savedCourse = courseService.makePayment(courseDto);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    // @GetMapping("{id}")
    // public ResponseEntity<Coursedto> getCourseById(@PathVariable("id") Long courseId) {
    //     Coursedto courseDto = courseService.getCourseById(courseId);
    //     return ResponseEntity.ok(courseDto);
    // }

    @GetMapping
    public ResponseEntity<List<Paymentdto>> getAllCourses() {
        List<Paymentdto> courses = courseService.getAllPayment();
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

