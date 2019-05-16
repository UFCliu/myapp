package com.example.liugq.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.example.liugq.bean.dzm.ShengXing;

public interface ShengXingMapper {
	
    int deleteByPrimaryKey(Integer id);

    int insert(ShengXing record);

    int insertSelective(ShengXing record);

    ShengXing selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ShengXing record);

    int updateByPrimaryKey(ShengXing record);
    
    List<ShengXing> shengxingQuery(@Param("params") Map<String, Long> params);
}