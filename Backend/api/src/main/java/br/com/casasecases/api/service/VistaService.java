package br.com.casasecases.api.service;

import br.com.casasecases.api.client.VistaClient;
import br.com.casasecases.api.dto.PhotoDTO;
import br.com.casasecases.api.dto.PropertyPhotoDTO;
import br.com.casasecases.api.dto.VistaResponseDTO;
import br.com.casasecases.api.mapper.PropertyMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import tools.jackson.databind.JsonNode;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


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
            property = propertyMapper.convertDataProperty(jsonNode);
            return property;
        }catch (Exception e){
            throw new IllegalStateException(
                    "Não foi possível montar a pesquisa de imóveis", e
            );
        }
    }

    public List<PropertyPhotoDTO> listPropertyPhoto(){
        List<VistaResponseDTO> properties = getProperty();

        return properties.stream()
                .map(p -> {
                    Integer codeProperty = p.code();
                    List<PhotoDTO> photos = searchPhotos(codeProperty);

                    return new PropertyPhotoDTO(p, photos);
                }).collect(Collectors.toList());
    }


    public List<PhotoDTO> searchPhotos(Integer code) {
        try{

            String search = "{\"fields\":[\"Codigo\",{\"Foto\":[\"Foto\",\"FotoPequena\",\"Destaque\"]}]}";

            JsonNode jsonNode = client.getPhotos(key, code, search);
            List<PhotoDTO> listPhoto = new ArrayList<>();

            List<PhotoDTO> propertyPhoto = propertyMapper.convertDataPhoto(jsonNode);

            return propertyPhoto;
        }catch (Exception e){
            throw new IllegalStateException(
                    "Não foi possível montar a pesquisa de imóveis", e
            );
        }
    }

}
