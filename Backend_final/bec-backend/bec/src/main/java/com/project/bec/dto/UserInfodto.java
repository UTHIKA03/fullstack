package com.project.bec.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserInfodto {
   
    private int id;
    private String name;
    private String email;
    private String password;
    private String roles;
} 
