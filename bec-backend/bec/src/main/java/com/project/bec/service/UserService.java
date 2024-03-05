package com.project.bec.service;

import java.util.List;
import com.project.bec.dto.UserInfodto;


public interface UserService {
     
     UserInfodto addUser(UserInfodto studentdto);

    List<UserInfodto> getAllUsers();
}
