package com.project.bec.service.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    @Override
public UserInfodto getByUsername(String username) {
    // Fetch the user by their username from the repository
    Optional<UserInfo> optionalUser = repository.findByName(username);

    // Check if the user exists
    if (optionalUser.isPresent()) {
        // Map the UserInfo entity to UserInfodto and return it
        return UserInfoMapper.maptoEmployeeDto(optionalUser.get());
    } else {
        // If the user does not exist, throw an exception or handle it accordingly
        throw new RuntimeException("User not found with username: " + username);
    }
}

    @Override
    public UserInfodto updateUser(int userId, UserInfodto userDto) {
        Optional<UserInfo> optionalUser = repository.findById(userId);
        UserInfo user = optionalUser.orElseThrow(() ->
                new RuntimeException("User not found with id: " + userId));

        // Update the user entity with the new data from userDto
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setRoles(userDto.getRoles());

        // Save the updated user entity
        UserInfo updatedUser = repository.save(user);
        return UserInfoMapper.maptoEmployeeDto(updatedUser);
    }
    @Override
    public void deleteUser(int userId) {
        repository.deleteById(userId);
    }
}
