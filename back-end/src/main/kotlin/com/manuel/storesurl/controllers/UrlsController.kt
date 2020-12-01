/**
 * This is the main REST controller for the stores urls app.
 *
 * This controller contain methos for CRUD Stores urls app.
 *
 * @property name the name of the service
 * @constructor inject the services for the stores urls
 */
package com.manuel.storesurl.controllers

import com.manuel.storesurl.models.Url
import com.manuel.storesurl.services.UrlsService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException

@RestController
@RequestMapping("/api/urls")
class UrlsController(private val urlsService: UrlsService) {

    @PostMapping("/")
    @ResponseStatus
    fun createUrl(@RequestBody url: Url): Url = urlsService.createUrl(url)

    @GetMapping("/")
    fun getAllUrls() = urlsService.getAllUrls()

    @GetMapping("/{urlId}")
    fun getUrlById(@PathVariable urlId: Long) =
            urlsService.getUrlById(urlId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "This url id does not exist")

    @GetMapping("/{urlSlug}")
    fun getUrlBySlug(@PathVariable urlSlug: String) =
            urlsService.getUrlBySlug(urlSlug) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "This url Slug does not exist")

    @DeleteMapping("/{urlId}")
    fun deleteUrl(@PathVariable urlId: Long) =
            urlsService.deleteUrlById(urlId)

}