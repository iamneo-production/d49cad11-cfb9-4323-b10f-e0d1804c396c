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

import com.iamneo.security.entity.Queries;
import com.iamneo.security.service.QueriesSer;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth")
public class QueriesCont {
	@Autowired
	private QueriesSer qs;

	@PostMapping("/add")
	public Queries addDetails(@RequestBody Queries h) {
		return qs.addDetails(h);
	}

	@GetMapping("/get")
	public List<Queries> getDetails() {
		return qs.getDetails();
	}

	@DeleteMapping("/del/{id}")
	public void delDetails(@PathVariable("id") int id) {
		qs.delDetails(id);
	}

	@PutMapping("/add/{id}")
	public Queries update(@PathVariable("id") int id, @RequestBody Queries h) {
		return qs.update(id, h);
	}
	
	@GetMapping("/get/{id}")
	public Queries getById(@PathVariable("id") int id) {
		return qs.getById(id);
	}

}
