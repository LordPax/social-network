const init = io => {
    const thModel = require('../models/thread_models')
    const logModel = require('../models/login_models')
    const until = require('../include/until')
    const {escapeHtml} = require('../include/lib-perso')
    const showdown = require('showdown')
    const convert = new showdown.Converter()

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
                const modeInt = parseInt(escapeHtml(mode))
                const idEsc = escapeHtml(id)

                if (userId && (rank === 1 || rank === 2)) {
                    if (idEsc != '' && mode != '') {
                        if (idEsc.length === 10 && (modeInt === 0 || modeInt === 1)) {
                            if (modeInt === 1)
                                thModel.addEpingle(idEsc)
                            else
                                thModel.removeEpingle(idEsc)
                        }
                    }
                }
            })
        })
    }

    const remove = namespace => {
        io.of(namespace).on('connection', socket => {
            socket.on('remove', data => {
                const {id, reason} = data
                const {userId, rank} = socket.handshake.session
                
                if (userId !== 0) {
                    if (id != '' && id.length === 10) {
                        const idEsc = escapeHtml(id)
                        const reasonEsc = escapeHtml(reason ? reason : '')

                        thModel.searchThread(idEsc, dataTh => {
                            if (dataTh.userId === userId || (rank === 1 || rank === 2)){
                                const r = dataTh.userId !== userId ? reasonEsc : 'aucune'
                                const by = dataTh.userId === userId ? 'le propriétaire' : 'un modérateur'
                                const title = '[Supprimer par ' + by + ']'
                                const content = '# Raison de la suppression\n ' + r

                                thModel.updateThread(idEsc, {
                                    title,
                                    content
                                })

                                socket.emit('retourRem', {
                                    title,
                                    content : convert.makeHtml(content),
                                    idEsc
                                })
                            }
                        })
                    }
                }
            })
        })
    }

    const report = namespace => {
        io.of(namespace).on('connection', socket => {
            socket.on('report', data => {
                console.log(data)
            })
        })
    }

    const moreThread = namespace => {
        io.of(namespace).on('connection', socket => {
            socket.on('moreThread', data => {
                console.log(data)
            })
        })
    }

    const searchUser = namespace => {
        io.of(namespace).on('connection', socket => {
            socket.on('searchUser', data => {
                logModel.searchAllUser(data, user => {
                    socket.emit('retourUser', user.map(elem => {
                        return {
                            username : elem.username,
                            rank : until.showRank(elem.rank),
                            email : elem.email
                        }
                    }))
                })
            })
        })
    }

    return {
        reponse,
        epingle,
        remove,
        report,
        searchUser,
        moreThread
    }
}

module.exports = init