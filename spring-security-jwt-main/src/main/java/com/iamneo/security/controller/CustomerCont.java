package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Customer;
import com.iamneo.security.service.CustomerSer;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth/cust")
public class CustomerCont {
	@Autowired
	private CustomerSer qs;

	@PostMapping("/add")
	public Customer addDetails(@RequestBody Customer h) {
		return qs.addDetails(h);
	}

	@GetMapping("/get")
	public List<Customer> getDetails() {
		return qs.getDetails();
	}

	@DeleteMapping("/del/{id}")
	public void delDetails(@PathVariable("id") int id) {
		qs.delDetails(id);
	}

	@PutMapping("/add/{id}")
	public Customer update(@PathVariable("id") int id, @RequestBody Customer h) {
		return qs.update(id, h);
	}
	
	@GetMapping("/get/{id}")
	public Customer getById(@PathVariable("id") int id) {
		return qs.getById(id);
	}

}
