package br.com.casasecases.api.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import tools.jackson.databind.JsonNode;

import java.awt.*;

@FeignClient(name = "VistaClient",
url = "${integrations.vistahost.url}")
public interface VistaClient {

    @GetMapping(value = "/imoveis/listar",
                produces = MediaType.APPLICATION_JSON_VALUE)
    JsonNode getProperty(
            @RequestParam("key") String key,
            @RequestParam("showtotal") int showTotal,
            @RequestParam("pesquisa") String search
    );
}
