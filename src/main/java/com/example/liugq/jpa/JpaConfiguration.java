//package com.example.liugq.jpa;
//
//import org.springframework.boot.autoconfigure.domain.EntityScan;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.Ordered;
//import org.springframework.core.annotation.Order;
//import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
////@Order(Ordered.HIGHEST_PRECEDENCE)
////@Configuration
////@EnableTransactionManagement(proxyTargetClass = true)
////@EnableJpaRepositories(basePackages="com.example.liugq.jpa.api")
////@EntityScan(basePackages="com.example.liugq.jpa.entity")
//public class JpaConfiguration {
//
////	@Bean
//	public PersistenceExceptionTranslationPostProcessor persistenceExceptionTranslationPostProcessor() {
//		return new PersistenceExceptionTranslationPostProcessor();
//	}
//}
