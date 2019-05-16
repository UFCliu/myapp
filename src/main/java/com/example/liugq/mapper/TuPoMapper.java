package com.example.liugq.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.example.liugq.bean.dzm.TuPo;

public interface TuPoMapper {
	
    int deleteByPrimaryKey(Integer id);

    int insert(TuPo record);

    int insertSelective(TuPo record);

    TuPo selectByPrimaryKey(Integer id);
    
    List<TuPo> getAll();
    
    List<TuPo> tuPoQuery(@Param("minTupo") Integer minTupo, @Param("maxTupo") Integer maxTupo);

    int updateByPrimaryKeySelective(TuPo record);

    int updateByPrimaryKey(TuPo record);
}