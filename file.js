let smallScreenElement = document.getElementById("seasonSmallImage")
let mediumScreenElement = document.getElementById("seasonMediumImage")

let smallSpringImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let mediumSpringImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";

let smallSummerImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let mediumSummerImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";

let smallAutumnImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let mediumAutumnImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";

let smallWinterImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let mediumWinterImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function springButton() {
    smallScreenElement.src = smallSpringImage
    mediumScreenElement.src = mediumSpringImage
}

function summerButton() {
    smallScreenElement.src = smallSummerImage
    mediumScreenElement.src = mediumSummerImage
}

function autumnButton() {
    smallScreenElement.src = smallAutumnImage
    mediumScreenElement.src = mediumAutumnImage
}

function winterButton() {
    smallScreenElement.src = smallWinterImage
    mediumScreenElement.src = mediumWinterImage
}
