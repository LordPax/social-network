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

// const rep = io.connect('http://192.168.1.24:8081/reponse')
const rep = io.connect('/reponse')

$(() => {
    $('#form_rep').submit(e => {
        const id = $('.id_thread').val()
        const input_content = $('.input_area_rep').val()
        $('.input_area_rep').val('')

        e.preventDefault()
        rep.emit('rep', {id, input_content})
        
        return false;
    })

    rep.on('retour', data => {
        $('.rep').append(`
            <div class = "fen_rep">
                <div class = "fen_name">
                    <a class = "link" href = "/profil/${data.username}">${data.user}</a>
                    <div class = "info_right">${data.date}</div>
                </div>
                <div class = "fen_rep_content">${data.content}</div>
            </div>
        `)
    })

    $('.user_option').hide()
    $('.user_menu').mouseover(() => {
        $('.user_option').stop().slideDown(100)
    })
    
    $('.user_menu').mouseout(() => {
        $('.user_option').stop().slideUp(100)
    })


    const btn = $('.change_btn')
    const btn2 = $('.change_btn2')
    const show = $('.show_info')
    const change = $('.change_info')

    show.show()
    btn.show()
    change.hide()
    btn2.hide()

    btn.click(() => {
        show.hide()
        change.show()
        btn.hide()
        btn2.show()
    })

    btn2.click(() => {
        show.show()
        change.hide()
        btn.show()
        btn2.hide()
    })
})