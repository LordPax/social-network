const init = io => {
    const thModel = require('../models/thread_models')
    const logModel = require('../models/login_models')
    const until = require('../include/until')

    const reponse = route => {
        io.of(route).on('connection', socket => {
            socket.on('rep', data => {
                const content = data.input_content, str_id = data.id
                if (content != '' && str_id != '') {
                    const {userId} = socket.handshake.session
                    const id = userId ? userId : 0
                    thModel.repThread(str_id, content, id)
                    logModel.searchUserInfo(id, uData => {
                        socket.emit('retour', {
                            content,
                            username : uData.username,
                            user : (userId !== 0 && uData.rank !== 0) 
                                ? uData.username + ' • ' + until.showRank(uData.rank) 
                                : uData.username,
                            date : 'moin d\'une minute'
                        })
                    })
                }
            })
        })
    }

    return {
        reponse
    }
}

module.exports = init