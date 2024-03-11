package com.project.bec.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.project.bec.dto.Paymentdto;
import com.project.bec.service.PaymentService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    private final PaymentService courseService;

    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping
    // @PreAuthorize("hasAuthority('STUDENT')")
    public ResponseEntity<Paymentdto> createCourse(@RequestBody Paymentdto courseDto) {
        courseDto.setStatus("paid");
        Paymentdto savedCourse = courseService.makePayment(courseDto);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Paymentdto> getCourseById(@PathVariable("id") Long courseId) {
        Paymentdto courseDto = courseService.getPaymentById(courseId);
        return ResponseEntity.ok(courseDto);
    }
    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping
    // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<Paymentdto>> getAllCourses() {
        List<Paymentdto> courses = courseService.getAllPayment();
        return ResponseEntity.ok(courses);
    }

}

