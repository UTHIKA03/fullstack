package com.project.bec.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.project.bec.dto.Coursedto;
import com.project.bec.service.CourseService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseService courseService;

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Coursedto> createCourse(@RequestBody Coursedto courseDto) {
        Coursedto savedCourse = courseService.createCourse(courseDto);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    // @GetMapping("{id}")
    // public ResponseEntity<Coursedto> getCourseById(@PathVariable("id") Long courseId) {
    //     Coursedto courseDto = courseService.getCourseById(courseId);
    //     return ResponseEntity.ok(courseDto);
    // }

    @GetMapping
    public ResponseEntity<List<Coursedto>> getAllCourses() {
        List<Coursedto> courses = courseService.getAllCourses();
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
