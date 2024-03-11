package com.project.bec.mapper;

import com.project.bec.dto.UserInfodto;
import com.project.bec.entity.UserInfo;

public class UserInfoMapper {
    public static UserInfodto maptoEmployeeDto(UserInfo stud) {
        return new UserInfodto(
                stud.getId(),
                stud.getName(),
                stud.getEmail(),
                stud.getPassword(),
                stud.getRoles());
    }

    public static UserInfo maptoEmployee(UserInfodto studentdto) {
        return new UserInfo(
            studentdto.getId(),
                studentdto.getName(),
                studentdto.getEmail(),
                studentdto.getPassword(),
                studentdto.getRoles());
    }
}
