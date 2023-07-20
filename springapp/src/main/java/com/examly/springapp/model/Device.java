package com.examly.springapp.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "devices")
public class Device {
@Id
	private Long id;
	private String type;
	private String brand;
	private String model;
  
	public Device() {
	}
  
	public Device(Long id, String type, String brand, String model) {
	  this.id = id;
	  this.type = type;
	  this.brand = brand;
	  this.model = model;
	}
  
	public Long getId() {
	  return id;
	}
  
	public void setId(Long id) {
	  this.id = id;
	}
  
	public String getType() {
	  return type;
	}
  
	public void setType(String type) {
	  this.type = type;
	}
  
	public String getBrand() {
	  return brand;
	}
  
	public void setBrand(String brand) {
	  this.brand = brand;
	}
  
	public String getModel() {
	  return model;
	}
  
	public void setModel(String model) {
	  this.model = model;
	}
  }
  