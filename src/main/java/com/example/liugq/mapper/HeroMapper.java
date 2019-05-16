package com.example.liugq.mapper;

import java.util.List;

import com.example.liugq.bean.user.Hero;

public interface HeroMapper {

	public Hero getHeroById(Integer id);
	
	public List<Hero> getAllHero();
	
}
