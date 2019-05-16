package com.example.liugq.bean.daily;

import java.util.Date;

/**
 * 综合查询JavaBean
 * 
 * @author UFC_Qing
 * @version 创建时间：2018年11月5日 下午1:41:12
 * @ClassName 类名称
 * @Description 类描述
 */

public class Summary {

	private Date beginDate;
	private Date endDate;
	private Integer months;
	private Integer year;
	private Integer yearMonth;
	
	public Date getBeginDate() {
		return beginDate;
	}
	public void setBeginDate(Date beginDate) {
		this.beginDate = beginDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public Integer getMonths() {
		return months;
	}
	public void setMonths(Integer months) {
		this.months = months;
	}
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public Integer getYearMonth() {
		return yearMonth;
	}
	public void setYearMonth(Integer yearMonth) {
		this.yearMonth = yearMonth;
	}
	
	
	
}
