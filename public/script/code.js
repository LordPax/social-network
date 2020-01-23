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

const rep = io.connect('/reponse')
const ep = io.connect('/epingle')

const showMore = id => {
    const btn = $('.t_' + id + ' .fen_show .link')
    const showContent = $('.t_' + id + ' .fen_content')
    showContent.removeClass('fen_hide')
    btn.text('Afficher moin')
    btn.attr('onclick', 'showLess("' + id + '")')
}

const showLess = id => {
    const btn = $('.t_' + id + ' .fen_show .link')
    const showContent = $('.t_' + id + ' .fen_content')
    showContent.addClass('fen_hide')
    btn.text('Afficher plus')
    btn.attr('onclick', 'showMore("' + id + '")')
}

const showMoreOk = id => {
    const btn = $('.t_' + id + ' .fen_show')
    const showContent = $('.t_' + id + ' .fen_content')
    const taille = showContent.height()
    if (taille < 500)
        btn.hide()
    // alert('salur ' + id)
}

const removePopupTread = id => $('.delete_pop').show()

const epingleOkThread = id => {
    const epingle = $('.t_' + id + ' .fen_title .info_right .ep')
    epingle.attr('src', '/assets/images/epingle_ok.png')
    epingle.attr('onclick', 'epingleNoThread("' + id + '")')
    ep.emit('epingle', {id, mode : '1'})
}

const epingleNoThread = id => {
    const epingle = $('.t_' + id + ' .fen_title .info_right .ep')
    epingle.attr('src', '/assets/images/epingle_no.png')
    epingle.attr('onclick', 'epingleOkThread("' + id + '")')
    ep.emit('epingle', {id, mode : '0'})
}

// ep.on('retourEp', data => {
//     const epingle = $('.t_' + data.id + ' .fen_title .info_right .ep')
//     if (data.mode == 1){
//         epingle.attr('src', '/assets/images/epingle_ok.png')
//         epingle.attr('onclick', 'epingleNoThread("' + data.id + '")')
//     }
//     else{
//         epingle.attr('src', '/assets/images/epingle_no.png')
//         epingle.attr('onclick', 'epingleOkThread("' + data.id + '")')
//     }
// })

$(() => {
    $('.delete_pop').hide()

    $('#form_rep').submit(e => {
        const id = $('.id_thread').val()
        const input_content = $('.input_area_rep').val()
        $('.input_area_rep').val('')

        e.preventDefault()
        rep.emit('rep', {id, input_content})
        
        return false
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

    $('.newthread_pop').hide()
    $('.newthread_btn').click(() => {
        $('.newthread_pop').show()
    })
    $('.close').click(() => {
        $('.popup').hide()
    })

    $('.form_th').submit(e => {
        const title = $('.input_text').val()
        const content = $('.input_area').val()
        if (title == '' || content == '') {
            e.preventDefault()
            $('.err').html(`
                <div class = "fen msgErr">
                    Les champs de textes ne doivent pas être vide
                </div>
            `)
            return false
        }

    })


})