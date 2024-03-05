package com.project.bec.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.bec.dto.AuthRequest;
// import com.project.bec.dto.Studentdto;
import com.project.bec.dto.UserInfodto;
// import com.project.bec.entity.UserInfo;
import com.project.bec.service.JwtService;
import com.project.bec.service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api")
public class UserController {
        private final UserService service;
     @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

      @PostMapping("/new")
    public ResponseEntity<UserInfodto> createStudent(@RequestBody UserInfodto studentDto) {
        UserInfodto savedStudent = service.addUser(studentDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedStudent);
    }
    @GetMapping("/users")
    // @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<UserInfodto>> getAllUsers() {
    List<UserInfodto> users = service.getAllUsers();
    return ResponseEntity.ok(users);
    }
    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

    }
}
