package com.example.liugq.controller.webSocket;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.liugq.websocket.MyWebSocket;

/**
 * webSocket相关功能Controller
 * 
 * @author UFC_Qing
 * @version 创建时间：2018年11月5日 下午1:41:12
 * @ClassName 类名称
 * @Description 类描述
 */

@Controller
@RequestMapping(value = "/webSocket")
public class WebSocketController {

	@RequestMapping("/index")
	public String home(Model model) {
		try {
			MyWebSocket.sendInfo("目前在线人数：" + MyWebSocket.getOnlineCount());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "websocket/index";
	}
	
	
	@RequestMapping(value="/pushVideoListToWeb",method=RequestMethod.POST,consumes = "application/json")
	 public @ResponseBody Map<String,Object> pushVideoListToWeb(@RequestBody Map<String,Object> param) {
		 Map<String,Object> result =new HashMap<String,Object>();
		 
		 try {
			 MyWebSocket.sendInfo("目前在线人数：" + MyWebSocket.getOnlineCount());
			 result.put("operationResult", true);
		 }catch (IOException e) {
			 result.put("operationResult", true);
		 }
		 return result;
	 }
}
