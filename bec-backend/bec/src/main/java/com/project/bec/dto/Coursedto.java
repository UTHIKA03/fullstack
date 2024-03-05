package com.project.bec.dto;

import com.project.bec.entity.UserInfo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Coursedto {
    
    private Long courseId;
    private UserInfo admin;
    private String title;
    private String description;
    private String duration;
    private Long cost;

}

