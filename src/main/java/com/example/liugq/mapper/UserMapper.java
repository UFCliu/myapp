package com.example.liugq.mapper;

import com.example.liugq.bean.user.User;

public interface UserMapper {

	public User getUserById(Integer id);
	
	public User findByUsername(String username);
	
}
