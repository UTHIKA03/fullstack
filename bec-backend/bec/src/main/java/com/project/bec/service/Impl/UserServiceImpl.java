package com.project.bec.service.Impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.bec.dto.UserInfodto;
import com.project.bec.entity.UserInfo;
import com.project.bec.mapper.UserInfoMapper;
import com.project.bec.repository.UserInfoRepo;
import com.project.bec.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
     @Autowired
    private UserInfoRepo repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserInfodto addUser(UserInfodto employeedto) {
        employeedto.setPassword(passwordEncoder.encode(employeedto.getPassword()));
        UserInfo employee = UserInfoMapper.maptoEmployee(employeedto);
        UserInfo savedEmployee = repository.save(employee);
        return UserInfoMapper.maptoEmployeeDto(savedEmployee);
    }
    @Override
    public List<UserInfodto> getAllUsers() {
        List<UserInfo> employees = repository.findAll();

        List<UserInfodto> employeeDtos = new ArrayList<>();
        for (UserInfo employee : employees) {
            employeeDtos.add(UserInfoMapper.maptoEmployeeDto(employee));
        }

        return employeeDtos;
    }
}
