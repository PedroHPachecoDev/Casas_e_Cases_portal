package br.com.casasecases.api.dto;

import com.fasterxml.jackson.annotation.JsonAlias;

public record VistaResponseDTO(
        @JsonAlias("Codigo") String code,
        @JsonAlias("Categoria") String category,
        @JsonAlias("Bairro") String neighborhood,
        @JsonAlias("Cidade") String city,
        @JsonAlias("Dormitorios") Integer dormitory,
        @JsonAlias("Suites") Integer suite,
        @JsonAlias("Vagas") Integer vacancies
) {
}
