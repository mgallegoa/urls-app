/**
 * Integration test for the REST controller for the Saved Urls app.
 *
 * @constructor Inject the mock MVC class for testing.
 */
package com.manuel.storesurl.integration

import com.manuel.storesurl.models.Url
import com.manuel.storesurl.services.UrlsService
import com.ninjasquad.springmockk.MockkBean
import io.mockk.every
import io.mockk.mockk
import io.mockk.spyk
import org.json.JSONObject
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@WebMvcTest
class UrlsControllerIntegrationTest(@Autowired val mockMvc: MockMvc) {

    @MockkBean
    private lateinit var urlsService: UrlsService

    @Test
    fun `List all urls`() {
        // given
        val urlEntity = Url("https://start.spring.io", "Create a Spring project", "create-spring-project", "This is the note")

        // when
        every { urlsService.getAllUrls() } returns listOf(urlEntity)

        // then
        mockMvc.perform(MockMvcRequestBuilders.get("/api/urls/").accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.[0].url").value(urlEntity.url))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.[0].description").value(urlEntity.description))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.[0].slug").value(urlEntity.slug))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.[0].notes").value(urlEntity.notes))
    }

    @Test
    fun `Create a urls, with Post REST method`() {
        // given
        val mockkService = mockk<UrlsService>()
        val urlEntity = mockk<Url>(relaxed = true)
        //Url("http://localhost:808/", "local", "this-is-slug", "notes great")
        val urlEntityReturn: Url = spyk(urlEntity)
        val jsonBody = JSONObject( """{"url": "http://localhost:808/", "description": "local", "slug": "this-is-slug", "notes": "notes great"}""" )

        // when
        every { mockkService.createUrl(urlEntity) } returns urlEntityReturn

        // then
        mockMvc.perform(MockMvcRequestBuilders.post("/api/urls/")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(jsonBody.toString())
        )
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.url").value(urlEntity.url))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.description").value(urlEntity.description))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.slug").value(urlEntity.slug))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.notes").value(urlEntity.notes))
    }

    @Test
    fun `Get url from slug`() {
        // given
        val urlEntity = Url("https://start.spring.io", "Create a Spring project", "create-spring-project", "This is the note")
        val urlEntityReturn = spyk(urlEntity)
        val slug = "create-spring-project"

        // when
        every { urlsService.getUrlBySlug(slug) } returns urlEntityReturn

        //then
        mockMvc.perform(MockMvcRequestBuilders.get("/api/urls/?urlSlug=$slug").accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.url").value(urlEntity.url))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.description").value(urlEntity.description))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.slug").value(urlEntity.slug))
                .andExpect(MockMvcResultMatchers.jsonPath("\$.notes").value(urlEntity.notes))
    }
}