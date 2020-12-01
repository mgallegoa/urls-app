/**
 * Services expose for consuming for the Stores Urls app.
 *
 * Call this services instead call directly the data model.
 *
 * @constructor Inject the repository used for CRUD operations.
 */
package com.manuel.storesurl.services

import com.manuel.storesurl.models.Url
import com.manuel.storesurl.repositories.StoresUrlsRepositories
import org.springframework.stereotype.Service

@Service
class UrlsService (private val urlsRepositories: StoresUrlsRepositories) {

    fun createUrl(url: Url): Url = urlsRepositories.save(url)

    fun getAllUrls(): Iterable<Url> = urlsRepositories.findAll()

    fun getUrlById(urlId: Long) = urlsRepositories.findById(urlId)

    fun getUrlBySlug(urlSlug: String) = urlsRepositories.findBySlug(urlSlug)

    fun deleteUrlById(urlId: Long) = urlsRepositories.deleteById(urlId)
}