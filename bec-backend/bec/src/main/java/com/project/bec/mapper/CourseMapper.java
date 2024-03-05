package com.project.bec.mapper;

import com.project.bec.dto.Coursedto;
import com.project.bec.entity.Course;

public class CourseMapper {
    public static Coursedto maptoEmployeeDto(Course stud) {
        return new Coursedto(
                stud.getCourseId(),
                stud.getAdmin(),
                stud.getTitle(),
                stud.getDescription(),
                stud.getDuration(),
                stud.getCost());
    }

    public static Course maptoEmployee(Coursedto studentdto) {
        return new Course(
            studentdto.getCourseId(),
            studentdto.getAdmin(),
            studentdto.getTitle(),
            studentdto.getDescription(),
            studentdto.getDuration(),
            studentdto.getCost());
    }
}
