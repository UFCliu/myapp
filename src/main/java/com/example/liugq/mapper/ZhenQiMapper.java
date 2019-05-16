package com.example.liugq.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.example.liugq.bean.dzm.ZhenQi;

public interface ZhenQiMapper {
	
    int deleteByPrimaryKey(Integer id);

    int insert(ZhenQi record);

    int insertSelective(ZhenQi record);

    ZhenQi selectByPrimaryKey(Integer id);
    
    List<ZhenQi> zhenqiQuery(@Param("params") Map<String ,Object> params);

    int updateByPrimaryKeySelective(ZhenQi record);

    int updateByPrimaryKey(ZhenQi record);
}