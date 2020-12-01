/**
 * Entities for the Stores Urls app.
 *
 */
package com.manuel.storesurl.models

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

/**
 * Entity for the main Stores Urls.
 *
 * @constructor create a data model for the Stores Urls.
 */
@Entity
class Url(
        var url: String,
        var description: String,
        var slug: String,
        var notes: String?,
        @Id
        @GeneratedValue
        var id: Long? = null
)