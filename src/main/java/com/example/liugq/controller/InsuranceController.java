package com.example.liugq.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.liugq.bean.daily.Insurance;
import com.example.liugq.bean.daily.Summary;
import com.example.liugq.mapper.InsuranceMapper;

/**
 * 保险相关
 * 
 * @author UFC_Qing
 *
 */
@Controller
@RequestMapping(value = "/insurance")
public class InsuranceController {

	@Autowired
	InsuranceMapper insuranceMapper;
	
	@RequestMapping("/detail")
	public String detail(Model model) {
		List<Insurance> baoXianList = insuranceMapper.getAll();
		model.addAttribute("baoXianList", baoXianList);
		Summary summary = insuranceMapper.summary();
		summary.setYear(summary.getMonths()/12);
		summary.setYearMonth(summary.getMonths()%12);
		
		model.addAttribute("summary", summary);
		
		return "shebao/insuranceList";
	}
	
	@RequestMapping("/managerInsurance")
	public String managerInsurance(Model model) {
		List<Insurance> baoXianList = insuranceMapper.getAll();
		model.addAttribute("baoXianList", baoXianList);
		Summary summary = insuranceMapper.summary();
		summary.setYear(summary.getMonths()/12);
		summary.setYearMonth(summary.getMonths()%12);
		
		model.addAttribute("summary", summary);
		model.addAttribute("manager", true);
		
		return "shebao/insuranceList";
	}
	
	@RequestMapping("/summary")
	public String summary(Model model) {
		Summary summary = insuranceMapper.summary();
		summary.setYear(summary.getMonths()/12);
		summary.setYearMonth(summary.getMonths()%12);
		
		model.addAttribute("summary", summary);
		return "shebao/summary";
	}
	
	@ResponseBody
	@RequestMapping("/save")
	public Object saveInsurance(Insurance insurance, Model model) {
		try {
			if (insurance != null && insurance.getId() != null) {
				return insuranceMapper.update(insurance);
			} else {
				return insuranceMapper.insert(insurance);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}
	}
	
	@ResponseBody
	@RequestMapping("/delete")
	public Object deleteInsurance(Integer id, Model model) {
		try {
			return insuranceMapper.delete(id);
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}
	}
	
	@ResponseBody
	@RequestMapping("/get")
	public Object get(Integer id, Model model) {
		try {
			return insuranceMapper.getById(id);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
