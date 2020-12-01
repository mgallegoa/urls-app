/**
 * Main Spring boot class for run the Saved Urls app.
 *
 */
package com.manuel.storesurl

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class StoresurlApplication

fun main(args: Array<String>) {
	runApplication<StoresurlApplication>(*args)
}
