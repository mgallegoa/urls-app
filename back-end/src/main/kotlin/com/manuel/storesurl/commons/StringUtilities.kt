package com.manuel.storesurl.commons

fun String.toReplaceAndCharacter() = toLowerCase()
        .replace("&", "and")

fun String.toReplacePercentCharacter() = toLowerCase()
        .replace("%", "and")

fun String.toReplaceAtCharacter() = toLowerCase()
        .replace("@", "at")

fun String.toRemoveSpecialCharacters() = toLowerCase()
        .replace("[^a-z\\d\\s]".toRegex(), " ")

fun String.toSeparateByHyphen() = toLowerCase()
        .split(" ").joinToString("-")

fun String.toRemoveMoreThanOneHyphen() = toLowerCase()
        .replace("-+".toRegex(), "-")