package br.com.casasecases.api.dto;

import com.fasterxml.jackson.annotation.JsonAlias;

import java.util.Map;

public record PropertyDetailsDTO(
        @JsonAlias("Codigo") String code,
        @JsonAlias("Foto") Map<String, PhotoDTO> photosMap
) {
}
