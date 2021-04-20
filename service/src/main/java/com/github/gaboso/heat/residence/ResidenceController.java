package com.github.gaboso.heat.residence;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/residence")
public class ResidenceController {

    private final ResidenceService service;

    public ResidenceController(ResidenceService service) {
        this.service = service;
    }

    @GetMapping
    public List<ResidenceDTO> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Residence save(@RequestBody Residence residence) {
        return service.save(residence);
    }

}
