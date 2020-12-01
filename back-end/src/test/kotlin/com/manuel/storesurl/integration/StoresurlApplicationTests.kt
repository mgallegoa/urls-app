package com.manuel.storesurl.integration

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class StoresurlApplicationTests() {

	@BeforeAll
	fun setup() {
		println(">> Setup")
	}

	@Test
	fun contextLoads() {
	}

	@AfterAll
	fun teardown() {
		println(">> Tear down")
	}
}
