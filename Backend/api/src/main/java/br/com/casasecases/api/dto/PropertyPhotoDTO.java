package br.com.casasecases.api.dto;

import java.util.List;

public record PropertyPhotoDTO (
        String code,
        String category,
        String neighborhood,
        String city,
        Integer dormitory,
        Integer suite,
        List<String> photos
){
}
