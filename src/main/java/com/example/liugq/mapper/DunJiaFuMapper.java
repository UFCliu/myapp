package com.example.liugq.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.example.liugq.bean.dzm.DunJiaFu;

public interface DunJiaFuMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(DunJiaFu record);

    int insertSelective(DunJiaFu record);

    DunJiaFu selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(DunJiaFu record);

    int updateByPrimaryKey(DunJiaFu record);
    
    List<DunJiaFu> dunJiaFuQuery(@Param("params") Map<String ,Object> params);
}