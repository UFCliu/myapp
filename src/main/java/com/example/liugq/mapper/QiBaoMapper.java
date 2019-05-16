package com.example.liugq.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.example.liugq.bean.dzm.QiBao;

public interface QiBaoMapper {
	
    int deleteByPrimaryKey(Integer id);

    int insert(QiBao record);

    int insertSelective(QiBao record);

    QiBao selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(QiBao record);

    int updateByPrimaryKey(QiBao record);
    
    List<QiBao> qiBaoQuery(@Param("params") Map<String ,Object> params);
}