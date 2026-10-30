package br.com.casasecases.api.dto;

import java.util.List;

public record PropertyPhotoDTO (
        VistaResponseDTO data,
        List<PhotoDTO> photos
){
}
