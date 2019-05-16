package com.example.liugq.controller.dzm;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.liugq.bean.dzm.DunJiaFu;
import com.example.liugq.bean.dzm.QiBao;
import com.example.liugq.bean.dzm.QiShi;
import com.example.liugq.bean.dzm.ShengXing;
import com.example.liugq.bean.dzm.TuPo;
import com.example.liugq.bean.dzm.ZhenQi;
import com.example.liugq.mapper.DunJiaFuMapper;
import com.example.liugq.mapper.QiBaoMapper;
import com.example.liugq.mapper.QiShiMapper;
import com.example.liugq.mapper.ShengXingMapper;
import com.example.liugq.mapper.TuPoMapper;
import com.example.liugq.mapper.ZhenQiMapper;

/**
 * 	大掌门相关
 * 
 * @author UFC_Qing
 *
 */
@Controller
@RequestMapping(value = "/dzm")
public class DzmController {

	@Autowired
	TuPoMapper tuPoMapper;
	
	@Autowired
	ZhenQiMapper zhenQiMapper;
	
	@Autowired
	ShengXingMapper shengXingMapper;
	
	@Autowired
	QiBaoMapper qiBaoMapper;
	
	@Autowired
	DunJiaFuMapper dunJiaFuMapper;
	
	@Autowired
	QiShiMapper qiShiMapper;
	
	@RequestMapping("/dzm")
	public String tupo(Model model) {
		//List<TuPo> tuPoList = tuPoMapper.getAll();
		//model.addAttribute("tuPoList", tuPoList);
		return "dzm/dzm";
	}
	
	@ResponseBody
	@RequestMapping("/tupoQuery")
	public Object tupoQuery(Integer minTupo, Integer maxTupo) {
		List<TuPo> tuPoList = tuPoMapper.tuPoQuery(minTupo, maxTupo);
		return tuPoList;
	}
	
	@ResponseBody
	@RequestMapping("/zhenqiQuery")
	public Object zhenqiQuery(String secondLevelProperty, String property) {
		Map<String ,Object> params = new HashMap<String ,Object>();
		if (property != null && !"".equals(property)) {
			params.put("property", property);
		}
		if (secondLevelProperty != null && !"".equals(secondLevelProperty)) {
			params.put("secondLevelProperty", secondLevelProperty);
		}
		List<ZhenQi> zhenqiList = zhenQiMapper.zhenqiQuery(params);
		return zhenqiList;
	}
	
	@ResponseBody
	@RequestMapping("/qibaoQuery")
	public Object qibaoQuery(String mainPropertyName) {
		Map<String ,Object> params = new HashMap<String ,Object>();
		if (mainPropertyName != null && !"".equals(mainPropertyName)) {
			params.put("mainPropertyName", mainPropertyName);
		}
		List<QiBao> qibaoList = qiBaoMapper.qiBaoQuery(params);
		return qibaoList;
	}
	
	@ResponseBody
	@RequestMapping("/dunJiaFuQuery")
	public Object dunJiaFuQuery(String mainPropertyName) {
		Map<String ,Object> params = new HashMap<String ,Object>();
		if (mainPropertyName != null && !"".equals(mainPropertyName)) {
			params.put("mainPropertyName", mainPropertyName);
		}
		List<DunJiaFu> dunJiaFuList = dunJiaFuMapper.dunJiaFuQuery(params);
		return dunJiaFuList;
	}
	
	@ResponseBody
	@RequestMapping("/qiShiQuery")
	public Object qiShiQuery(String property) {
		Map<String ,Object> params = new HashMap<String ,Object>();
		if (property != null && !"".equals(property)) {
			params.put("property", property);
		}
		List<QiShi> qiShiList = qiShiMapper.qiShiQuery(params);
		return qiShiList;
	}
	
	
	@ResponseBody
	@RequestMapping("/shengxingQuery")
	public Object shengxingQuery(Long wuqiXing, Long yifuXing, Long shipinXing) {
		Map<String, Long> params = new HashMap<String, Long>();
		
		if (wuqiXing != null) {
			params.put("wuqiXing", wuqiXing);
		}
		if (yifuXing != null) {
			params.put("yifuXing", yifuXing);
		}
		if (shipinXing != null) {
			params.put("shipinXing", shipinXing);
		}
		List<ShengXing> zhenqiList = shengXingMapper.shengxingQuery(params);
		
		ShengXing totalShengxing = new ShengXing();
		totalShengxing.setBaoji(0l);totalShengxing.setFangbao(0l);totalShengxing.setPozhao(0l);totalShengxing.setGedang(0l);
		totalShengxing.setShanbi(0l);totalShengxing.setMingzhong(0l);
		for(ShengXing shengXing : zhenqiList) {
			totalShengxing.setBaoji(totalShengxing.getBaoji() + shengXing.getBaoji());
			totalShengxing.setFangbao(totalShengxing.getFangbao() + shengXing.getFangbao());
			totalShengxing.setShanbi(totalShengxing.getShanbi() + shengXing.getShanbi());
			totalShengxing.setMingzhong(totalShengxing.getMingzhong() + shengXing.getMingzhong());
			totalShengxing.setPozhao(totalShengxing.getPozhao() + shengXing.getPozhao());
			totalShengxing.setGedang(totalShengxing.getGedang() + shengXing.getGedang());
		}
		System.out.println(totalShengxing);
		
		return totalShengxing;
	}
	
	
	@RequestMapping("/zhenqi")
	public String zhenqi(Model model) {
		//List<TuPo> tuPoList = tuPoMapper.getAll();
		//model.addAttribute("tuPoList", tuPoList);
		return "dzm/dzm";
	}
	
	/*@RequestMapping("/index")
	public String ss(Model model) {
		List<Hero> heroList = heroMapper.getAllHero();
		model.addAttribute("heroList", heroList);
		return "index/index";
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
	}*/
}
