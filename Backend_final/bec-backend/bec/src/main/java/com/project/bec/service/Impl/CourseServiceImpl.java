package com.project.bec.service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.project.bec.dto.Coursedto;
import com.project.bec.entity.Course;
import com.project.bec.mapper.CourseMapper;
import com.project.bec.repository.CourseRepo;
import com.project.bec.service.CourseService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepo courseRepo;

    @Override
    public Coursedto createCourse(Coursedto courseDto) {
        Course course = CourseMapper.maptoEmployee(courseDto);
        Course savedCourse = courseRepo.save(course);
        return CourseMapper.maptoEmployeeDto(savedCourse);
    }

    @Override
    public Coursedto getCourseById(Long courseId) {
        Optional<Course> optionalCourse = courseRepo.findById(courseId);
        Course course = optionalCourse.orElseThrow(() ->
                new RuntimeException("Course not found with id: " + courseId));
        return CourseMapper.maptoEmployeeDto(course);
    }

    @Override
    public List<Coursedto> getAllCourses() {
        List<Course> courses = courseRepo.findAll();
        return courses.stream()
                .map(CourseMapper::maptoEmployeeDto)
                .collect(Collectors.toList());
    }
    @Override
    public Coursedto updateCourse(Long courseId, Coursedto courseDto) {
        Optional<Course> optionalCourse = courseRepo.findById(courseId);
        Course course = optionalCourse.orElseThrow(() ->
                new RuntimeException("Course not found with id: " + courseId));
        course.setTitle(courseDto.getTitle());
        course.setDescription(courseDto.getDescription());
        course.setDuration(courseDto.getDuration());
        course.setCost(courseDto.getCost());
        Course updatedCourse = courseRepo.save(course);
        return CourseMapper.maptoEmployeeDto(updatedCourse);
    }
    

    @Override
    public void deleteCourse(Long courseId) {
        courseRepo.deleteById(courseId);
    }
}

