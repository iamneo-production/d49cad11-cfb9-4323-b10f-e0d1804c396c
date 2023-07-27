package com.iamneo.security.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.repository.CustomerRepo;
import com.iamneo.security.entity.Customer;


@Service
public class CustomerSer {

	@Autowired
	private CustomerRepo hr;

	public Customer addDetails(Customer h) {
		return hr.save(h);
	}

	public List<Customer> getDetails() {
		return hr.findAll();
	}

	public void delDetails(int id) {
		hr.deleteById(id);
	}

	public Customer update(int id, Customer h) {
		Customer hp = hr.findById(id).get();
		if (Objects.nonNull(hp) && (Objects.nonNull(h.getFname()))) {
			hp.setFname(h.getFname());
		}
		
		if (Objects.nonNull(hp) && (Objects.nonNull(h.getEmail()))) {
			hp.setEmail(h.getEmail());
		}
		if (Objects.nonNull(hp) && (Objects.nonNull(h.getGen()))) {
			hp.setGen(h.getGen());
		}
		if (Objects.nonNull(hp) && (h.getAge() != 0)) {
			hp.setAge(h.getAge());
		}
		
		if (Objects.nonNull(hp) && (h.getMob() != 0)) {
			hp.setMob(h.getMob());
		}
		
		if (Objects.nonNull(hp) && (Objects.nonNull(h.getAdd()))) {
			hp.setAdd(h.getAdd());
		}
		return hr.save(hp);
	}

	public Customer getById(int id) {
		Customer obj = hr.findById(id).get();
		return obj;
	}
}

