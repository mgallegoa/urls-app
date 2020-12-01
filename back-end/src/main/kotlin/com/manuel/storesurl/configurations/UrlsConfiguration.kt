/**
 * Contain the main configuration parameters for the application
 *
 */
package com.manuel.storesurl.configurations

import com.manuel.storesurl.repositories.StoresUrlsRepositories
import org.springframework.boot.ApplicationRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class UrlsConfiguration {

    @Bean
    fun  databaseInit(urlsRepositories: StoresUrlsRepositories) = ApplicationRunner {

    }
}