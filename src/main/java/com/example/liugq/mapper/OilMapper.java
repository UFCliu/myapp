package com.example.liugq.mapper;

import java.util.List;

import com.example.liugq.bean.daily.Oil;

public interface OilMapper {

	
	public List<Oil> getAll();
	
	public Oil totalMoney();
	
	public Integer insert(Oil oil);
	
	public Integer update(Oil oil);
	
	public Integer delete(Integer id);
	
	public Oil getById(Integer id);
}
