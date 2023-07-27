package com.iamneo.security.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Customer_details")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "First_name")
	private String fname;
	@Column(name = "Last_name")
	private int age;
	@Column(name = "Gender")
	private String gen;
	@Column(name = "Phone_Number")
	private long mob;
	@Column(name = "Email")
	private String email;
	@Column(name = "Query")
	private String add;
	

	public Customer(int id, String fname,  int age, String gen, long mob, String email,
			String add) {
		super();
		this.id = id;
		this.fname = fname;
		this.age = age;
		this.gen = gen;
		this.mob = mob;
		this.email = email;
		this.add = add;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}


	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGen() {
		return gen;
	}

	public void setGen(String gen) {
		this.gen = gen;
	}

	public long getMob() {
		return mob;
	}

	public void setMob(long mob) {
		this.mob = mob;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

	public String getAdd() {
		return add;
	}

	public void setAdd(String add) {
		this.add = add;
	}

	

	public Customer() {
	}

}


