package com.github.gaboso.heat.residence;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping(path = "/{id}")
    public Residence findById(@PathVariable("id") Long id) {
        return service.findById(id);
    }

    @GetMapping
    public List<ResidenceDTO> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Residence save(@RequestBody Residence residence) {
        return service.save(residence);
    }

    @PutMapping
    public Residence update(@RequestBody Residence residence) {
        return service.update(residence);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        service.delete(id);
    }


}
