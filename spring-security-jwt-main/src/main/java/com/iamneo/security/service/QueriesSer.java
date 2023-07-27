package com.iamneo.security.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.repository.QueriesRepo;
import com.iamneo.security.entity.Queries;


@Service
public class QueriesSer {

	@Autowired
	private QueriesRepo hr;

	public Queries addDetails(Queries h) {
		return hr.save(h);
	}

	public List<Queries> getDetails() {
		return hr.findAll();
	}

	public void delDetails(int id) {
		hr.deleteById(id);
	}

	public Queries update(int id, Queries h) {
		Queries hp = hr.findById(id).get();
		if (Objects.nonNull(hp) && (Objects.nonNull(h.getName()))) {
			hp.setName(h.getName());
		}
		if (Objects.nonNull(hp) && (Objects.nonNull(h.getEmail()))) {
			hp.setEmail(h.getEmail());
		}
		if (Objects.nonNull(hp) && (Objects.nonNull(h.getMessage()))) {
			hp.setMessage(h.getMessage());
		}

		return hr.save(hp);
	}

	public Queries getById(int id) {
		Queries obj = hr.findById(id).get();
		return obj;
	}
}

