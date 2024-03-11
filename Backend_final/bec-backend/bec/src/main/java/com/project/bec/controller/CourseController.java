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

    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping("/addcourse")
    // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Coursedto> createCourse(@RequestBody Coursedto courseDto) {
        Coursedto savedCourse = courseService.createCourse(courseDto);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }
    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping("/getbyid/{id}")
    public ResponseEntity<Coursedto> getCourseById(@PathVariable("id") Long courseId) {
        Coursedto courseDto = courseService.getCourseById(courseId);
        return ResponseEntity.ok(courseDto);
    }
    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping
    public ResponseEntity<List<Coursedto>> getAllCourses() {
        List<Coursedto> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);
    }

    @CrossOrigin(origins = "http://localhost:4000")
    @PutMapping("/{id}")
    // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Coursedto> updateCourse(@PathVariable("id") Long courseId, @RequestBody Coursedto courseDto) {
        Coursedto updatedCourse = courseService.updateCourse(courseId, courseDto);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteCourse(@PathVariable("id") Long courseId) {
        courseService.deleteCourse(courseId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
