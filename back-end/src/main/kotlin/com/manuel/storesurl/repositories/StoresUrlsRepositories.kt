/**
 * Repositories for the Stores Urls app.
 *
 * Contain the different CRUD methods for the app.
 * Here can override the different customs queries.
 *
 * @constructor Inject the repository implementation.
 */
package com.manuel.storesurl.repositories

import com.manuel.storesurl.models.Url
import org.springframework.data.repository.CrudRepository

interface StoresUrlsRepositories : CrudRepository<Url, Long> {

    fun findBySlug(slug: String): Url?
}
