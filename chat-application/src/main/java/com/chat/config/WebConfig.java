package com.chat.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.PropertiesPropertySource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Properties;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public PropertiesPropertySource dotenvPropertySource() {
        Dotenv dotenv = Dotenv.load(); // Load the .env file

        Properties properties = new Properties();
        dotenv.entries().forEach(entry -> properties.setProperty(entry.getKey(), entry.getValue()));

        return new PropertiesPropertySource("dotenvProperties", properties);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
