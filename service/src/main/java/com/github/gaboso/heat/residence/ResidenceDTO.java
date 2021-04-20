package com.github.gaboso.heat.residence;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResidenceDTO {

    private Double lat;
    private Double lng;
    private Integer weight;

}
