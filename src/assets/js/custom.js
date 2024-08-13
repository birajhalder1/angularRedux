// /* Js */

 $(document).ready(function () {
    $('.tab_menu_itme').click(function(){
        $('.tab_menu_li').removeClass('active');
        $(this).parent().addClass('active');
    });

    $(document).on("keypress",".number_input",function(e) { 
        return e.metaKey || // cmd/ctrl
            e.which <= 0 || // arrow keys
            e.which == 8 || // delete key
            /[0-9]/.test(String.fromCharCode(e.which)); // numbers
    })
// /* Button Click To Select */
//     $('.select-btn').on('click', function(){
//         $('.select-btn').removeClass('selected');
//         $(this).addClass('selected');
//     });

//     /* Serial Number Click To Select */
//     $('.btn-serial').on('click', function(){
//         $('.btn-serial').removeClass('serial-selected');
//         $(this).addClass('serial-selected');
//     });

//     /* Delivery Number Click To Select */
//     $('.btn-delivey').on('click', function(){
//         $('.btn-delivey').removeClass('delivery-selected');
//         $(this).addClass('delivery-selected');
//     });

//     /* Unit Click To Select */
//     $('.btn-unit').on('click', function(){
//         $('.btn-unit').removeClass('unit-selected');
//         $(this).addClass('unit-selected');
//     });

//     /* Increment and Decrement */
//      const minus = $('.quantity__minus');
//         const plus = $('.quantity__plus');
//         const input = $('.quantity__input');
//         minus.click(function(e) {
//             e.preventDefault();
//             var value = input.val();
//             if (value > 0) {
//             value--;
//             }
//             input.val(value);
//         });
        
//         plus.click(function(e) {
//             e.preventDefault();
//             var value = input.val();
//             value++;
//             input.val(value);
//         })

//         /* Serial Slider */
//         var swiper = new Swiper(".serial_slider", {
//             slidesPerView: 1,
//             spaceBetween: 17,
//             autoplay: true,
//             loop: true,
//             breakpoints: {
//                 480: {
//                     slidesPerView: 3,
//                     spaceBetween: 12,
//                 },
//                 640: {
//                 slidesPerView: 4,
//                 spaceBetween: 15,
//                 },
//                 768: {
//                 slidesPerView: 5,
//                 spaceBetween: 15,
//                 },
//                 1024: {
//                 slidesPerView: 6,
//                 spaceBetween: 15,
//                 },
//                 1100: {
//                     slidesPerView: 7,
//                     spaceBetween: 17,
//                 },
                
//                 1199: {
//                     slidesPerView: 12,
//                     spaceBetween: 17,
//                 },
//             },
//         });


//         /* Home Page */

//         $(window).scroll(function(){
//             var aTop = $('header').height();
//             if($(this).scrollTop()>=aTop){
//                 $('header').addClass('header_sm');
//             }else{
//                 $('header').removeClass('header_sm');
//             }
//         });

//         $('.srchIcon > a').click(function(){
//             $('.header_srchBar').toggleClass('show');
//         });
//         /* megamenu */
//         $('.menuIcon').click(function(){
//             $('.mega_menu').addClass('open');
//         });
//         $('.close_icon').click(function(){
//             $('.mega_menu').removeClass('open');
//         });

//         /* avilavle collection */

//         var swiper = new Swiper(".avil_slider", {
//             slidesPerView: 2,
//             spaceBetween: 25,
//             autoplay: true,
//             loop: true,
//             breakpoints: {
//                 480: {
//                     slidesPerView: 3,
//                     spaceBetween: 25,
//                 },
//                 640: {
//                 slidesPerView: 4,
//                 spaceBetween: 25,
//                 },
//                 768: {
//                 slidesPerView: 5,
//                 spaceBetween: 25,
//                 },
//                 1024: {
//                 slidesPerView: 6,
//                 spaceBetween: 25,
//                 },
//                 1100: {
//                     slidesPerView: 7,
//                     spaceBetween: 25,
//                 },
                
//                 1199: {
//                     slidesPerView: 8,
//                     spaceBetween: 25,
//                 },
//             },
//         });

//         $('.colection_box').click(function(){
//             $('.check').removeClass('check'),
//             $(this).addClass('check');
//         });


//         /* upcomming slider */
//             var swiper = new Swiper(".upcomming_slider", {
//                 slidesPerView: "auto",
//                 loop: true,
//                 spaceBetween: 25,
//                 navigation: {
//                     nextEl: '.swiper-button-next-upcomming',
//                     prevEl: '.swiper-button-prev-upcomming',
//                 },
//             });

//             var swiper = new Swiper(".offering_slider", {
//                 slidesPerView: "auto",
//                 loop: true,
//                 spaceBetween: 25,
//                 navigation: {
//                     nextEl: '.swiper-button-next-offer',
//                     prevEl: '.swiper-button-prev-offer',
//                 },
//             });

 });
  
