/*const ecran = () => {
    $(() => {
        const large = $('.taille').width()
        const long = $(window).height()
        let long2 = $('section').height() + $('footer').height()
        if(large >= 800)
            long2 = $('section').height() + $('footer').height() + 80
        else
            long2 = $('section').height() - $('footer').height() + 110
            
        const long3 = $(window).height() - ($('footer').height() + 23)
        
        if(long2 <= long3){
            $('footer').css({
                'position' : 'absolute',
                'top' : long3
            })
        }
        else{
            $('footer').css({
                'position' : 'static'
            })
        }
        
        $('.panel').css({
            'height' : long
        })
            
        
    })
}*/

$(() => {
    $('.user_option').hide();
    $('.user_menu').mouseover(() => {
        $('.user_option').stop().slideDown(100);
    })
    
    $('.user_menu').mouseout(() => {
        $('.user_option').stop().slideUp(100);
    })
})