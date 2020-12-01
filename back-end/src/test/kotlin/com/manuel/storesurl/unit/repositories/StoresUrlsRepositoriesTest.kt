/**
 * Unit test for the repositories for the Saved Urls app.
 *
 * @constructor Inject the Entity Manager class for mock persistence testing,
 *              Inject the repository class to test.
 */
package com.manuel.storesurl.unit.repositories

import com.manuel.storesurl.models.Url
import com.manuel.storesurl.repositories.StoresUrlsRepositories
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager
import java.util.Optional

@DataJpaTest
class StoresUrlsRepositoriesTest @Autowired constructor(
        val entityManager: TestEntityManager,
        val storesUrlsRepositories: StoresUrlsRepositories) {

    @Test
    fun `When save a URL then return the Url create`() {
        val url = Url("https://start.spring.io", "Create a Spring project", "create-spring-project", "This is the note")
        val id = entityManager.persistAndGetId(url)
        entityManager.flush()
        val found = storesUrlsRepositories.findById(id as Long)
        assertThat(found).isEqualTo(Optional.of(url))
    }

    @Test
    fun `When findAll then return a list of Urls`() {
        val url = Url("https://start.spring.io", "Create a Spring project", "create-spring-project", "This is the note")
        val url2 = Url("https://kotlinlang.org/", "Learn Kotlin", "learn-kotlin", "This is a great note")
        entityManager.persist(url)
        entityManager.persist(url2)
        entityManager.flush()
        val found = storesUrlsRepositories.findAll()
        assertThat(found).isEqualTo(listOf(url, url2))
    }
}