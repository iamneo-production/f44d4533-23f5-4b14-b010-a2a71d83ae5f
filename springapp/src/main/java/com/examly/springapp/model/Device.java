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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "type")
	private String type;

	@Column(name = "brand")
	private String brand;
	
	@Column(name = "model")
	private String model;
	
	
	public Device() {
		
	}
	
	public Device(String type, String brand, String model) {
		super();
		this.type = type;
		this.brand = brand;
		this.model = model;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	
	public String getDeviceType() {
		return type;
	}
	
	public void setDeviceType(String type) {
		this.type = type;
	}
	
	public String getDeviceBrand() {
		return brand;
	}
	
	public void setDeviceBrand(String brand) {
		this.brand = brand;
	}
	
	public String getDeviceModel() {
		return model;
	}
	
	public void setDeviceModel(String model) {
		this.model = model;
	}

	


	
	
}
