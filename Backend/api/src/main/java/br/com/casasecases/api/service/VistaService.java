package br.com.casasecases.api.service;

import br.com.casasecases.api.client.VistaClient;
import br.com.casasecases.api.dto.VistaResponseDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;
import tools.jackson.databind.exc.JsonNodeException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class VistaService {
    @Value("#{environment.KEY_VISTA}")
    private String key;
    private VistaClient client;
    private final int showTotal = 1;
    private ObjectMapper objectMapper;

    public VistaService(VistaClient client, ObjectMapper objectMapper) {
        this.client = client;
        this.objectMapper = objectMapper;
    }

    public JsonNode getProperty(){

        var search = new VistaResponseDTO(
           List.of(
                "Codigo",
                "Categoria",
                "Bairro",
                "Cidade",
                "Dormitorios",
                "Suites",
                "Vagas"
           ),
           Map.of("Bairro", "asc")
        );

        try{
            String json = objectMapper.writeValueAsString(search);

            return client.getProperty(key, showTotal, json);
        }catch (JsonNodeException e){
            throw new IllegalStateException(
                    "Não foi possível montar a pesquisa de imóveis", e
            );
        }

    }
}
