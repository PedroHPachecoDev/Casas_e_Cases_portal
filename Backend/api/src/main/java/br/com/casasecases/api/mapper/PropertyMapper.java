package br.com.casasecases.api.mapper;

import br.com.casasecases.api.dto.PhotoDTO;
import br.com.casasecases.api.dto.PropertyDetailsDTO;
import br.com.casasecases.api.dto.VistaResponseDTO;
import org.springframework.boot.jackson.autoconfigure.JacksonProperties;
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

    public List<VistaResponseDTO> convertDataProperty(JsonNode jsonNode){
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

    public List<PhotoDTO> convertDataPhoto(JsonNode jsonNode){
        List<PhotoDTO> listPhoto = new ArrayList<>();

        if(jsonNode != null && jsonNode.has("Foto")) {
            JsonNode photoNode = jsonNode.get("Foto");

            if(photoNode.isObject()){
                PropertyDetailsDTO detail = objectMapper.convertValue(
                        jsonNode,
                        PropertyDetailsDTO.class

                );
                if(detail != null && detail.photosMap() != null) {
                    listPhoto.addAll(detail.photosMap().values());
                }
            } else if (photoNode.isArray()) {
                for (JsonNode item : photoNode){
                    PhotoDTO photo = objectMapper.convertValue(item, PhotoDTO.class);
                    if(photo != null){
                        listPhoto.add(photo);
                    }
                }
            }
        }

        return listPhoto;
    }
}
