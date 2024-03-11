package com.project.bec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.bec.entity.UserInfo;

import java.util.Optional;

public interface UserInfoRepo extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);

}
 