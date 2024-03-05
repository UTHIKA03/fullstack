package com.project.bec.service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.project.bec.dto.Enquirydto;

import com.project.bec.entity.Enquiry;

import com.project.bec.mapper.EnquiryMapper;

import com.project.bec.repository.EnquiryRepo;

import com.project.bec.service.EnquiryService;

import java.util.List;
// import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EnquiryServiceImpl implements EnquiryService {

    private final EnquiryRepo courseRepo;

    @Override
    public Enquirydto createEnquiry(Enquirydto courseDto) {
        Enquiry course = EnquiryMapper.maptoEmployee(courseDto);
        Enquiry savedCourse = courseRepo.save(course);
        return EnquiryMapper.maptoEmployeeDto(savedCourse);
    }

    // @Override
    // public Coursedto getCourseById(Long courseId) {
    //     Optional<Course> optionalCourse = courseRepo.findById(courseId);
    //     Course course = optionalCourse.orElseThrow(() ->
    //             new CourseNotFoundException("Course not found with id: " + courseId));
    //     return CourseMapper.maptoEmployeeDto(course);
    // }

    @Override
    public List<Enquirydto> getAllEnquiry() {
        List<Enquiry> courses = courseRepo.findAll();
        return courses.stream()
                .map(EnquiryMapper::maptoEmployeeDto)
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


