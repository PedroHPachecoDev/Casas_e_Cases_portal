package br.com.casasecases.api.controller;

import br.com.casasecases.api.dto.PropertyPhotoDTO;
import br.com.casasecases.api.dto.VistaResponseDTO;
import br.com.casasecases.api.service.VistaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tools.jackson.databind.JsonNode;

import java.util.List;

@RestController
@RequestMapping("/v1/imoveis")
public class VistaController {
    private final VistaService vistaService;

    public VistaController(VistaService vistaService) {
        this.vistaService = vistaService;
    }

    @GetMapping
    public List<PropertyPhotoDTO> get(){
        return vistaService.listPropertyPhoto();
    }
}
