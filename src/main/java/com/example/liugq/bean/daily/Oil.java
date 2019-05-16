package com.example.liugq.bean.daily;

import java.math.BigDecimal;
import java.util.Date;

/**
 * 加油记录JavaBean
 * 
 * @author UFC_Qing
 * @version 创建时间：2018年11月5日 下午1:41:12
 * @ClassName 类名称
 * @Description 类描述
 */

public class Oil {
	private Integer id;
	/** 加油时间 **/
	private Date date;
	private BigDecimal money;
	private BigDecimal price;
	private BigDecimal miles;
	private String platenumber;
	private BigDecimal monthTotal;
	private BigDecimal yearTotal;
	
	public BigDecimal getMonthTotal() {
		return monthTotal;
	}
	public void setMonthTotal(BigDecimal monthTotal) {
		this.monthTotal = monthTotal;
	}
	public BigDecimal getYearTotal() {
		return yearTotal;
	}
	public void setYearTotal(BigDecimal yearTotal) {
		this.yearTotal = yearTotal;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public BigDecimal getMoney() {
		return money;
	}
	public void setMoney(BigDecimal money) {
		this.money = money;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public BigDecimal getMiles() {
		return miles;
	}
	public void setMiles(BigDecimal miles) {
		this.miles = miles;
	}
	public String getPlatenumber() {
		return platenumber;
	}
	public void setPlatenumber(String platenumber) {
		this.platenumber = platenumber;
	}

	public static void main(String[] args) {
		Oil oil = new Oil();
		oil.setDate(new Date());
		System.out.println(oil.getDate());
	}
}
