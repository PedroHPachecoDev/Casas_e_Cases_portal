package br.com.casasecases.api.mapper;

import br.com.casasecases.api.dto.VistaResponseDTO;
import org.springframework.stereotype.Component;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
@Component
public class PropertyMapper {
    private final ObjectMapper objectMapper;

    public PropertyMapper(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public List<VistaResponseDTO> convertData(JsonNode jsonNode){
        List<VistaResponseDTO> listProperty = new ArrayList<>();

        if(jsonNode != null){
            Map<String, Object> map = objectMapper.convertValue(
                    jsonNode,
                    new TypeReference<Map<String, Object>>() {}
            );

            for (Map.Entry<String, Object> entry : map.entrySet()) {
                String keyName = entry.getKey();

                // Ignora os metadados de paginação
                if (!List.of("total", "paginas", "pagina", "quantidade").contains(keyName)) {
                    // Converte cada valor do mapa (que é o objeto do imóvel) para o seu DTO
                    VistaResponseDTO dto = objectMapper.convertValue(entry.getValue(), VistaResponseDTO.class);
                    listProperty.add(dto);

                }
            }
        }
        return listProperty;
    }
}
