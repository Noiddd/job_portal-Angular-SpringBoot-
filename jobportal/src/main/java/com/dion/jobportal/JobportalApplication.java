package com.dion.jobportal;

import com.dion.jobportal.service.JobSeekerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JobportalApplication  {
	public static void main(String[] args) {
		SpringApplication.run(JobportalApplication.class, args);
		System.out.println("START");
	}
}
