package com.example.liugq.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.liugq.bean.user.Hero;
import com.example.liugq.bean.user.User;
import com.example.liugq.mapper.HeroMapper;
import com.example.liugq.mapper.InsuranceMapper;
import com.example.liugq.mapper.UserMapper;

/**
 * 相关测试
 * 
 * @author UFC_Qing
 *
 */
@Controller
public class IndexController {

	@Autowired
	UserMapper userMapper;
	
	@Autowired
	HeroMapper heroMapper;
	
	@Autowired
	InsuranceMapper baoXianMapper;
	
	
	@RequestMapping("/")
	public String home(Model model) {
		List<Hero> heroList = heroMapper.getAllHero();
		model.addAttribute("heroList", heroList);
		return "index";
	}
	
	@RequestMapping("/index3")
	public String index2(Model model) {
		List<Hero> heroList = heroMapper.getAllHero();
		model.addAttribute("heroList", heroList);
		return "index3";
	}
	
	@RequestMapping("/index")
	public String ss(Model model) {
		List<Hero> heroList = heroMapper.getAllHero();
		model.addAttribute("heroList", heroList);
		return "index/index";
	}
	
	@RequestMapping("/login")
	public String login(Model model) {
		List<Hero> heroList = heroMapper.getAllHero();
		model.addAttribute("heroList", heroList);
		return "login";
	}
	
	@ResponseBody
	@RequestMapping("/getUser/{id}")
	public Object getUser(@PathVariable Integer id) {
		 User user = userMapper.getUserById(id);
		 return user;
	}
	
	public static void main(String[] args) {
		System.out.println(108/12);
		System.out.println(108%12);
	}
}
