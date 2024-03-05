package com.project.bec.service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.project.bec.dto.Paymentdto;
import com.project.bec.entity.Payment;
import com.project.bec.mapper.PaymentMapper;
import com.project.bec.repository.PaymentRepo;
import com.project.bec.service.PaymentService;

import java.util.List;
// import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepo courseRepo;

    @Override
    public Paymentdto makePayment(Paymentdto courseDto) {
        Payment course = PaymentMapper.maptoEmployee(courseDto);
       Payment savedCourse = courseRepo.save(course);
        return PaymentMapper.maptoEmployeeDto(savedCourse);
    }

    // @Override
    // public Coursedto getCourseById(Long courseId) {
    //     Optional<Course> optionalCourse = courseRepo.findById(courseId);
    //     Course course = optionalCourse.orElseThrow(() ->
    //             new CourseNotFoundException("Course not found with id: " + courseId));
    //     return CourseMapper.maptoEmployeeDto(course);
    // }

    @Override
    public List<Paymentdto> getAllPayment() {
        List<Payment> courses = courseRepo.findAll();
        return courses.stream()
                .map(PaymentMapper::maptoEmployeeDto)
                .collect(Collectors.toList());
    }

}


