package com.example.springapp.Booking;


import jakarta.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "device_type")
	private String deviceType;

	@Column(name = "device_brand")
	private String deviceBrand;
	
	@Column(name = "device_model")
	private String deviceModel;
	
	@Column(name = "problem")
	private String problem;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "time_slot")
	private String timeSlot;
	@Column(name = "customer_id")
	private String customerid;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Column(name = "status")
	private String status;

	public String getCustomerid() {
		return customerid;
	}

	public void setCustomerid(String customerid) {
		this.customerid = customerid;
	}

	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	@Column(name = "customer_name")
	private String customer_name;

	
	public Booking() {
		
	}
	
	public Booking(String deviceType, String deviceBrand, String deviceModel, String problem, String date, String timeSlot, String customerid, String customer_name,String status) {
		super();
		this.deviceType = deviceType;
		this.deviceBrand = deviceBrand;
		this.deviceModel = deviceModel;
		this.problem = problem;
		this.date = date;
		this.timeSlot = timeSlot;
		this.customer_name=customer_name;
		this.customerid=customerid;
		this.status=status;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getDeviceType() {
		return deviceType;
	}
	
	public void setDeviceType(String deviceType) {
		this.deviceType = deviceType;
	}
	
	public String getDeviceBrand() {
		return deviceBrand;
	}
	
	public void setDeviceBrand(String deviceBrand) {
		this.deviceBrand = deviceBrand;
	}
	
	public String getDeviceModel() {
		return deviceModel;
	}
	
	public void setDeviceModel(String deviceModel) {
		this.deviceModel = deviceModel;
	}
	
	public String getProblem() {
		return problem;
	}
	
	public void setProblem(String problem) {
		this.problem = problem;
	}
	
	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}
	
	public String getTimeSlot() {
		return timeSlot;
	}
	
	public void setTimeSlot(String timeSlot) {
		this.timeSlot = timeSlot;
	}
}
