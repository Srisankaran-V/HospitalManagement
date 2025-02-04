package com.security.drugInventory.kafka;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableMBeanExport;

@Configuration
public class KafkaTopicConfig {
    @Bean
    public NewTopic appointmentTopic(){
        return new NewTopic("appointment_topic", 1, (short) 1);
    }


}
