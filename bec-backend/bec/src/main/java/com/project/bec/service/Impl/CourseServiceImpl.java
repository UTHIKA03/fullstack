package com.project.bec.service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.project.bec.dto.Coursedto;
import com.project.bec.entity.Course;
import com.project.bec.mapper.CourseMapper;
import com.project.bec.repository.CourseRepo;
import com.project.bec.service.CourseService;

import java.util.List;
// import java.util.Optional;
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

    // @Override
    // public Coursedto getCourseById(Long courseId) {
    //     Optional<Course> optionalCourse = courseRepo.findById(courseId);
    //     Course course = optionalCourse.orElseThrow(() ->
    //             new CourseNotFoundException("Course not found with id: " + courseId));
    //     return CourseMapper.maptoEmployeeDto(course);
    // }

    @Override
    public List<Coursedto> getAllCourses() {
        List<Course> courses = courseRepo.findAll();
        return courses.stream()
                .map(CourseMapper::maptoEmployeeDto)
                .collect(Collectors.toList());
    }

    // @Override
    // public CourseDto updateCourse(Long courseId, CourseDto courseDto) {
    //     Optional<Course> optionalCourse = courseRepo.findById(courseId);
    //     Course existingCourse = optionalCourse.orElseThrow(() ->
    //             new CourseNotFoundException("Course not found with id: " + courseId));

    //     // Update fields with values from CourseDto
    //     existingCourse.setCourseName(courseDto.getCourseName());
    //     existingCourse.setCourseDescription(courseDto.getCourseDescription());
    //     existingCourse.setCourseDuration(courseDto.getCourseDuration());
    //     existingCourse.setFees(courseDto.getFees());
    //     existingCourse.setNoOfSeats(courseDto.getNoOfSeats());

    //     // Assuming you have a method to update the institute in the Course entity
    //     // You can map the instituteDto to Institute and set it in the existingCourse
    //     College institute = CollegeMapper.mapToCollege(courseDto.getInstituteDto());
    //     existingCourse.setInstitute(institute);

    //     // Save the updated entity back to the repository
    //     Course updatedCourse = courseRepo.save(existingCourse);
    //     return CourseMapper.mapToCourseDto(updatedCourse);
    // }

    // @Override
    // public void deleteCourse(Long courseId) {
    //     courseRepo.deleteById(courseId);
    // }
    // Other methods for updating, deleting, etc. can be added as needed
}

