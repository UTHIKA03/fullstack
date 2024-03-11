package com.project.bec.service;

import java.util.List;

import com.project.bec.dto.Coursedto;

public interface CourseService {

    Coursedto createCourse(Coursedto courseDto);

    Coursedto getCourseById(Long courseId);

    List<Coursedto> getAllCourses();

    Coursedto updateCourse(Long courseId, Coursedto courseDto);

    void deleteCourse(Long courseId);
}
