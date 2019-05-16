package com.example.liugq.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.example.liugq.bean.dzm.QiShi;

public interface QiShiMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(QiShi record);

    int insertSelective(QiShi record);

    QiShi selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(QiShi record);

    int updateByPrimaryKey(QiShi record);
    
    List<QiShi> qiShiQuery(@Param("params") Map<String ,Object> params);
}