var owl = $('.two');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});