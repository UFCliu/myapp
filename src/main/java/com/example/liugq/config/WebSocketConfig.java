package com.example.liugq.config;

import javax.servlet.http.HttpSession;
import javax.websocket.HandshakeResponse;
import javax.websocket.server.HandshakeRequest;
import javax.websocket.server.ServerEndpointConfig;
import javax.websocket.server.ServerEndpointConfig.Configurator;

import org.apache.catalina.session.StandardSessionFacade;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 * Websocket
 * 
* @author UFC_Qing
* @version 创建时间：2018年11月6日 上午11:00:19
* @ClassName 类名称
* @Description 类描述
*/


@Configuration
public class WebSocketConfig extends Configurator {
    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }
    
    @Override
	public void modifyHandshake(ServerEndpointConfig sec, HandshakeRequest request, HandshakeResponse response) {
	  /*如果没有监听器,那么这里获取到的HttpSession是null*/
	  StandardSessionFacade ssf = (StandardSessionFacade) request.getHttpSession();
	  if (ssf != null) {
	    HttpSession httpSession = (HttpSession) request.getHttpSession();
	    //关键操作
	    sec.getUserProperties().put("sessionId", httpSession.getId());
	    System.out.println("获取到的SessionID：" + httpSession.getId());
	  }
	}
    
    /**
     * 引入shiro框架下的session，获取session信息
     */
    /*
    @Override
    public void modifyHandshake(ServerEndpointConfig sec, HandshakeRequest request, HandshakeResponse response) {
      Session shiroSession = ShiroUtils.getSubjct().getSession();
      sec.getUserProperties().put("sessionId", shiroSession.getId());
    }
    */
}