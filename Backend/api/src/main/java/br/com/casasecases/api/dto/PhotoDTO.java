package br.com.casasecases.api.dto;

import com.fasterxml.jackson.annotation.JsonAlias;

public record PhotoDTO (
        @JsonAlias("Codigo") String code,
        @JsonAlias("Foto") String urlPhoto,
        @JsonAlias("FotoPequena") String urlPhotoSmall,
        @JsonAlias("Destaque") String featuredPhoto
) {}
