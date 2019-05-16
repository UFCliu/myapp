//package com.example.liugq.jpa.entity;
//
//import java.util.List;
//
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToMany;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//import org.springframework.format.annotation.DateTimeFormat;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
////
////@Entity
////@Table(name="user")
//public class User {
//	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	private Long id;
//	private String name;
//	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
//	private String createdate;
//	
//	@ManyToOne
//	@JoinColumn(name="did")
//	@JsonBackReference
//	private Department department;
//	
//	@ManyToMany(cascade= {},fetch=FetchType.EAGER)
//	@JoinTable(name="user_role", 
//		joinColumns = {@JoinColumn(name="user_id")},
//		inverseJoinColumns = {@JoinColumn(name="roles_id")})
//	private List<Role> roles;
//	
//	public User() {
//		
//	}
//
//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public String getCreatedate() {
//		return createdate;
//	}
//
//	public void setCreatedate(String createdate) {
//		this.createdate = createdate;
//	}
//
//	public Department getDepartment() {
//		return department;
//	}
//
//	public void setDepartment(Department department) {
//		this.department = department;
//	}
//
//	public List<Role> getRoles() {
//		return roles;
//	}
//
//	public void setRoles(List<Role> roles) {
//		this.roles = roles;
//	}
//	
//}
