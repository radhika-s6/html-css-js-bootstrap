$(document).ready(function() {
    $('#servicesSlider').carousel();

    $('.service-item').hover(function() {
        $(this).find('.hover-content').css('opacity', '1');
    }, function() {
        $(this).find('.hover-content').css('opacity', '0');
    });


    $('.project-item').click(function() {
        var newImage = $(this).data('image');
        $('#projectImage').attr('src', newImage);
        
        $('.project-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.project-content').click(function() {
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
        $('.project-content').removeClass('active');
        $(this).addClass('active');
    });
});


