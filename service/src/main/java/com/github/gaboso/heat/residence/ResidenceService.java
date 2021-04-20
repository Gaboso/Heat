package com.github.gaboso.heat.residence;

import com.github.gaboso.heat.residence.repository.ResidenceRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ResidenceService {

    final ResidenceRepository residenceRepository;

    public ResidenceService(ResidenceRepository residenceRepository) {
        this.residenceRepository = residenceRepository;
    }

    public List<ResidenceDTO> findAll() {
        return residenceRepository.findAllResidence();
    }

    public Residence save(Residence residence) {
        return residenceRepository.save(residence);
    }

}
