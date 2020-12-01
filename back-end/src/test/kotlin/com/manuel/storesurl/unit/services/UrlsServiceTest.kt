/**
 * Unit test for the service in the Saved Urls app.
 *
 * @constructor Inject the service class to test.
 */
package com.manuel.storesurl.unit.services

import com.manuel.storesurl.models.Url
import com.manuel.storesurl.repositories.StoresUrlsRepositories
import com.manuel.storesurl.services.UrlsService
import com.ninjasquad.springmockk.MockkBean
import io.mockk.every
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class UrlsServiceTest @Autowired constructor(val urlsService: UrlsService){

    @MockkBean
    private lateinit var mockkRepositories: StoresUrlsRepositories

    @Test
    fun `When create a URL then return the Url create`() {
        // given
        val url = Url("https://start.spring.io", "Create a Spring project", "create-spring-project", "This is the note")
        // when
        every { mockkRepositories.save(url) } returns url
        val createdUrl = urlsService.createUrl(url)
        // then
        Assertions.assertThat(createdUrl).isEqualTo(url)
    }
    @Test
    fun `When select the URL by slug return the finded Url`() {
        // given
        val url = Url("https://start.spring.io", "Create a Spring project", "create-spring-project", "This is the note")
        val urlSlug = "create-spring-project"
        // when
        every { mockkRepositories.findBySlug(urlSlug) } returns url
        val urlFound = urlsService.getUrlBySlug(urlSlug)
        // then
        Assertions.assertThat(urlFound).isEqualTo(url)
    }
}