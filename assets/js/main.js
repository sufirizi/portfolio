$(".add-to-cart").hide();
$('.cat-image').hover(function(){ 
    $(this).prev(".cat-title").show();
}, function(){
    $(this).prev(".cat-title").hide();
});

$('.product-image').hover(function(){ 
    $(this).next(".add-to-cart").show();
}, function(){
    $(this).next(".add-to-cart").hide();
});

$('.add-to-cart').hover(function(){ 
    $(this).show();
}, function(){
    $(this).hide();
});

console.log('Automatic git push addedd again!!!!');

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
    }
})

// $(".product-wrapper").on("mouseenter", "img", function (event) {
//     $(this).next(".add-to-cart").show();
// });

// $(".product-wrapper").on("mouseleave", "img", function (event) {
//     $(this).next(".add-to-cart").hide();
// });

// $(document).on("mouseenter", ".add-to-cart", function (event) {
//     $(this).show();
// });

// $(document).on("mouseleave", ".add-to-cart", function (event) {
//     $(this).show();
// });