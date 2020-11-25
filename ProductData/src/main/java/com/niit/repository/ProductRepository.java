package com.niit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.niit.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
/////////////////////////////////////////////////////<Model CLass Object, Data Type of ID>
	
	Product findByName(String name);
	
}
