package com.example.liugq.bean.user;

public class Hero {

	private Integer id;
	private String name;
	private String picMin;
	private String picMax;
	public String getPicMax() {
		return picMax;
	}
	public void setPicMax(String picMax) {
		this.picMax = picMax;
	}
	public String getPicMin() {
		return picMin;
	}
	public void setPicMin(String picMin) {
		this.picMin = picMin;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
