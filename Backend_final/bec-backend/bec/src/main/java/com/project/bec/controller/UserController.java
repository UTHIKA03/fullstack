package com.project.bec.controller;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.bec.dto.AuthRequest;
import com.project.bec.dto.UserInfodto;
// import com.project.bec.security.UserInfoUserDetailsService;
import com.project.bec.service.JwtService;
import com.project.bec.service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4000")
public class UserController {
    private final UserService service;
     @Autowired
    private JwtService jwtService;

    // @Autowired
    // private UserInfoUserDetailsService userDetailsService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping("/new")
    public ResponseEntity<UserInfodto> createStudent(@RequestBody UserInfodto studentDto) {
        UserInfodto savedStudent = service.addUser(studentDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedStudent);
    }
    @GetMapping("/users")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<UserInfodto>> getAllUsers() {
    List<UserInfodto> users = service.getAllUsers();
    return ResponseEntity.ok(users);
    }

    // @PostMapping("/authenticate")
    // public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        //     Authentication authentication = authenticationManager.authenticate(
            //             new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
            //     if (authentication.isAuthenticated()) {
                //         return jwtService.generateToken(authRequest.getUsername());
                //     } else {
                    //         throw new UsernameNotFoundException("invalid user request !");
                    //     }
                    
                    // }
                    
                    //     @PostMapping("/authenticate")
                    // public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
                        //     Authentication authentication = authenticationManager.authenticate(
                            //             new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
                            //     if (authentication.isAuthenticated()) {
                                //         // Load user details
                                //         UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
                                
                                //         // Generate JWT token including user roles
                                //         String token = jwtService.generateToken(authRequest.getUsername(), userDetails.getAuthorities());
                                
                                //         return token;
                                //     } else {
                                    //         throw new UsernameNotFoundException("invalid user request !");
                                    //     }
//                                     // }
//                 @CrossOrigin(origins = "http://localhost:4000")
//                 @PostMapping("/authenticate")
//             public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
//     Authentication authentication = authenticationManager.authenticate(
//             new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
//     if (authentication.isAuthenticated()) {
//         // Load user details including authorities and student ID
//         UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
//         UserInfodto userInfoDto = service.getByUsername(authRequest.getUsername());

//         // Convert student ID to string
//         String studentId = String.valueOf(userInfoDto.getId());

//         // Generate JWT token including user roles and student ID
//         String token = jwtService.generateToken(authRequest.getUsername(), userDetails.getAuthorities(), studentId);

//         return token;
//     } else {
//         throw new UsernameNotFoundException("Invalid user credentials");
//     }
// }

    
    @PutMapping("/users/{id}")
    public ResponseEntity<UserInfodto> updateUser(@PathVariable("id") int userId, @RequestBody UserInfodto userDto) {
        UserInfodto updatedUser = service.updateUser(userId, userDto);
        return ResponseEntity.ok(updatedUser);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") int userId) {
        service.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping("/userDetails")
    public ResponseEntity<UserInfodto> getUserDetails() {
        // Get the authenticated user's details from the SecurityContextHolder
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        // Retrieve user details from the service layer based on the username
        UserInfodto userDetails = service.getByUsername(username);

        // Check if user details exist
        if (userDetails != null) {
            return ResponseEntity.ok(userDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping("/authenticate")

public ResponseEntity<?> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
    try {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

        if (authentication.isAuthenticated()) {
            // Fetch roles from the authenticated user
            Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
            List<String> roles = authorities.stream()
                                            .map(GrantedAuthority::getAuthority)
                                            .collect(Collectors.toList());

            // Fetch user details including the student ID
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            UserInfodto userInfoDto = service.getByUsername(userDetails.getUsername());

            // Convert student ID to string
            String studentId = String.valueOf(userInfoDto.getId());

            // Generate JWT token including user roles and student ID
            // String token = jwtService.generateToken(authRequest.getUsername(), roles, studentId);
            String token = jwtService.generateToken(authRequest.getUsername(), studentId);
            Map<String, Object> response = new HashMap<>();
            response.put("token", token);
            response.put("roles", roles);
            response.put("studentId", studentId);

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                                 .body(Collections.singletonMap("message", "Invalid credentials"));
        }
    } catch (UsernameNotFoundException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                             .body(Collections.singletonMap("message", "User not found"));
    } catch (BadCredentialsException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                             .body(Collections.singletonMap("message", "Invalid username or password"));
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                             .body(Collections.singletonMap("message", "Internal server error"));
    }
}

}
