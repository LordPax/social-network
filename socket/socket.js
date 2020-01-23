const init = io => {
    const thModel = require('../models/thread_models')
    const logModel = require('../models/login_models')
    const until = require('../include/until')

    const reponse = namespace => {
        io.of(namespace).on('connection', socket => {
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

    const epingle = namespace => {
        io.of(namespace).on('connection', socket => {
            socket.on('epingle', data => {
                const {id, mode} = data
                const {userId, rank} = socket.handshake.session
                const modeInt = parseInt(mode)

                if (userId && rank === 1) {
                    if (id != '' && mode != '') {
                        if (id.length === 10 && (modeInt === 0 || modeInt === 1)) {
                            if (modeInt === 1)
                                thModel.addEpingle(id)
                            else
                                thModel.removeEpingle(id)
                        }
                    }
                }
            })
        })
    }

    return {
        reponse,
        epingle
    }
}

module.exports = init