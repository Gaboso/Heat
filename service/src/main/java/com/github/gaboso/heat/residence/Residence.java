package com.github.gaboso.heat.residence;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(name = "tb_residence_id_seq", sequenceName = "heat.tb_residence_id_seq")
@Table(name = "tb_residence", schema = "heat")
public class Residence {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "tb_residence_id_seq")
    private Long id;

    @Column(name = "zip_code")
    private String zipCode;

    @Column(name = "number_residence")
    private Integer number;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "number_residents")
    private Integer numberOfResidents;

}
