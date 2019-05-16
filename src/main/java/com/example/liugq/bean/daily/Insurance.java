package com.example.liugq.bean.daily;

import java.math.BigDecimal;
import java.util.Date;

public class Insurance {
	private Integer id;
	/**
	 * 缴费月份
	 */
	private Date pay_date;
	private BigDecimal base;
	public BigDecimal getBase() {
		return base;
	}

	public void setBase(BigDecimal base) {
		this.base = base;
	}

	/**
	 * 养老保险单位缴纳部分
	 */
	private BigDecimal yanglao_company;
	private BigDecimal yanglao_self;
	private Integer yanglao_confirm;
	
	private BigDecimal yiliao_company;
	private BigDecimal yiliao_self;
	private Integer yiliao_confirm;
	
	private BigDecimal shiye_company;
	private BigDecimal shiye_self;
	private Integer shiye_confirm;
	
	private BigDecimal gongshang_company;
	private Integer gongshang_confirm;
	
	private BigDecimal shengyu_company;
	private Integer shengyu_confirm;
	
	private String company;
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getPay_date() {
		return pay_date;
	}

	public void setPay_date(Date pay_date) {
		this.pay_date = pay_date;
	}

	public BigDecimal getYanglao_company() {
		return yanglao_company;
	}

	public void setYanglao_company(BigDecimal yanglao_company) {
		this.yanglao_company = yanglao_company;
	}

	public BigDecimal getYanglao_self() {
		return yanglao_self;
	}

	public void setYanglao_self(BigDecimal yanglao_self) {
		this.yanglao_self = yanglao_self;
	}

	public Integer getYanglao_confirm() {
		return yanglao_confirm;
	}

	public void setYanglao_confirm(Integer yanglao_confirm) {
		this.yanglao_confirm = yanglao_confirm;
	}

	public BigDecimal getYiliao_company() {
		return yiliao_company;
	}

	public void setYiliao_company(BigDecimal yiliao_company) {
		this.yiliao_company = yiliao_company;
	}

	public BigDecimal getYiliao_self() {
		return yiliao_self;
	}

	public void setYiliao_self(BigDecimal yiliao_self) {
		this.yiliao_self = yiliao_self;
	}

	public Integer getYiliao_confirm() {
		return yiliao_confirm;
	}

	public void setYiliao_confirm(Integer yiliao_confirm) {
		this.yiliao_confirm = yiliao_confirm;
	}

	public BigDecimal getShiye_company() {
		return shiye_company;
	}

	public void setShiye_company(BigDecimal shiye_company) {
		this.shiye_company = shiye_company;
	}

	public BigDecimal getShiye_self() {
		return shiye_self;
	}

	public void setShiye_self(BigDecimal shiye_self) {
		this.shiye_self = shiye_self;
	}

	public Integer getShiye_confirm() {
		return shiye_confirm;
	}

	public void setShiye_confirm(Integer shiye_confirm) {
		this.shiye_confirm = shiye_confirm;
	}

	public BigDecimal getGongshang_company() {
		return gongshang_company;
	}

	public void setGongshang_company(BigDecimal gongshang_company) {
		this.gongshang_company = gongshang_company;
	}

	public Integer getGongshang_confirm() {
		return gongshang_confirm;
	}

	public void setGongshang_confirm(Integer gongshang_confirm) {
		this.gongshang_confirm = gongshang_confirm;
	}

	public BigDecimal getShengyu_company() {
		return shengyu_company;
	}

	public void setShengyu_company(BigDecimal shengyu_company) {
		this.shengyu_company = shengyu_company;
	}

	public Integer getShengyu_confirm() {
		return shengyu_confirm;
	}

	public void setShengyu_confirm(Integer shengyu_confirm) {
		this.shengyu_confirm = shengyu_confirm;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

}
