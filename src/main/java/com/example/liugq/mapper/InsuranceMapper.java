package com.example.liugq.mapper;

import java.util.List;

import com.example.liugq.bean.daily.Insurance;
import com.example.liugq.bean.daily.Summary;

public interface InsuranceMapper {

	public Insurance getUserById(Integer id);
	
	public List<Insurance> getAll();
	
	public Summary summary();
	
	public Integer insert(Insurance insurance);
	
	public Integer update(Insurance insurance);
	
	public Integer delete(Integer id);
	
	public Insurance getById(Integer id);
	
}
