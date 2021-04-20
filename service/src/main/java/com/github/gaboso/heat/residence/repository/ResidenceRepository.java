package com.github.gaboso.heat.residence.repository;

import com.github.gaboso.heat.residence.Residence;
import com.github.gaboso.heat.residence.ResidenceDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ResidenceRepository extends JpaRepository<Residence, Long> {

    @Query("SELECT new com.github.gaboso.heat.residence.ResidenceDTO(r.latitude, r.longitude, r.numberOfResidents) " +
        "FROM Residence r")
    List<ResidenceDTO> findAllResidence();

}
