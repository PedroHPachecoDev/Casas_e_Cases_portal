package br.com.casasecases.api.service;

import br.com.casasecases.api.client.VistaClient;
import br.com.casasecases.api.dto.VistaResponseDTO;
import br.com.casasecases.api.mapper.PropertyMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import tools.jackson.databind.JsonNode;

import java.util.ArrayList;
import java.util.List;


@Service
public class VistaService {
    @Value("#{environment.KEY_VISTA}")
    private String key;
    private VistaClient client;
    private final int showTotal = 1;
    private List<VistaResponseDTO> property = new ArrayList<>();
    private final PropertyMapper propertyMapper;

    public VistaService(VistaClient client, PropertyMapper propertyMapper) {
        this.client = client;
        this.propertyMapper = propertyMapper;
    }

    public List<VistaResponseDTO> getProperty(){
        String search = "{\"fields\":[\"Codigo\",\"Categoria\",\"Bairro\",\"Cidade\",\"Dormitorios\",\"Suites\",\"Vagas\"]}";


        try{
            JsonNode jsonNode = client.getProperty(key, showTotal, search);
            property = propertyMapper.convertData(jsonNode);
            getPropertyPhoto(property);
            return property;
        }catch (Exception e){
            throw new IllegalStateException(
                    "Não foi possível montar a pesquisa de imóveis", e
            );
        }
    }

    public List<VistaResponseDTO> getPropertyPhoto(List<VistaResponseDTO> prop) {
        String search = "{\"fields\":[\"Codigo\",{\"Foto\":[\"Foto\",\"FotoPequena\",\"Destaque\"]}]}";

        for(VistaResponseDTO dto : prop){
            Integer code = dto.code();

            JsonNode jsonNode = client.getPhotos(key, code, search);

        }

        try{

            property = propertyMapper.convertData(jsonNode);

            return property;
        }catch (Exception e){
            throw new IllegalStateException(
                    "Não foi possível montar a pesquisa de imóveis", e
            );
        }
    }

}
