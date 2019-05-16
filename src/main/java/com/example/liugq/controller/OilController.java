package com.example.liugq.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.liugq.bean.daily.Oil;
import com.example.liugq.mapper.OilMapper;

/**
 * 加油记录相关
 * 
 * @author UFC_Qing
 *
 */

@Controller
@RequestMapping(value = "/oil")
public class OilController {

	@Autowired
	OilMapper oilMapper;
	
	@RequestMapping("/oilList")
	public String oilList(Model model) {
		List<Oil> oilList = oilMapper.getAll();
		model.addAttribute("oilList", oilList);
		
		Oil oil = oilMapper.totalMoney();
		model.addAttribute("oil", oil);
		
		return "oil/oilList";
	}
	
	@RequestMapping("/managerOilList")
	public String managerOilList(Model model) {
		List<Oil> oilList = oilMapper.getAll();
		model.addAttribute("oilList", oilList);
		Oil oil = oilMapper.totalMoney();
		model.addAttribute("oil", oil);
		model.addAttribute("manager", true);
		
		return "oil/oilList";
	}
	
	@ResponseBody
	@RequestMapping("/save")
	public Object saveOil(Oil oil, Model model) {
		try {
			if (oil != null && oil.getId() != null) {
				return oilMapper.update(oil);
			} else {
				return oilMapper.insert(oil);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}
	}
	
	@ResponseBody
	@RequestMapping("/delete")
	public Object deleteOil(Integer id, Model model) {
		try {
			return oilMapper.delete(id);
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}
	}
	
	@ResponseBody
	@RequestMapping("/get")
	public Object get(Integer id, Model model) {
		try {
			return oilMapper.getById(id);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
}
