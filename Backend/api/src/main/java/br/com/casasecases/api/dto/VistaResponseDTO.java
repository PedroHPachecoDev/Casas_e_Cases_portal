package br.com.casasecases.api.dto;

import java.util.List;
import java.util.Map;

public record VistaResponseDTO(
        List<String> fields,
        Map<String, String> order
) {
}
