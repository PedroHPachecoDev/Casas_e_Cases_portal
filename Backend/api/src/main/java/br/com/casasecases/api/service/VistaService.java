package br.com.casasecases.api.service;

import br.com.casasecases.api.client.VistaClient;
import br.com.casasecases.api.dto.VistaResponseDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@Service
public class VistaService {
    @Value("#{environment.KEY_VISTA}")
    private String key;
    private VistaClient client;
    private final int showTotal = 1;
    private final ObjectMapper objectMapper;
    private List<VistaResponseDTO> property = new ArrayList<>();

    public VistaService(VistaClient client, ObjectMapper objectMapper) {
        this.client = client;
        this.objectMapper = objectMapper;
    }

    public List<VistaResponseDTO> getProperty(){
        String search = "{\"fields\":[\"Codigo\",\"Categoria\",\"Bairro\",\"Cidade\",\"Dormitorios\",\"Suites\",\"Vagas\"]}";


        try{
            JsonNode jsonNode = client.getProperty(key, showTotal, search);
            property = convertData(jsonNode);

            return property;
        }catch (Exception e){
            throw new IllegalStateException(
                    "Não foi possível montar a pesquisa de imóveis", e
            );
        }
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
