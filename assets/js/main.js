$('.add-to-cart').hide();
$(".category-wrapper").on("mouseenter", "img", function (event) {
    $(this).prev(".cat-title").toggle();
});

$(".product-wrapper").on("mouseenter", "img", function (event) {
    $(this).next(".add-to-cart").show();
});

$(".product-wrapper").on("mouseleave", "img", function (event) {
    $(this).next(".add-to-cart").hide();
});

$(document).on("mouseenter", ".add-to-cart", function (event) {
    $(this).show();
});

$(document).on("mouseleave", ".add-to-cart", function (event) {
    $(this).show();
});