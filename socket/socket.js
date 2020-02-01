const init = io => {
    const thModel = require('../models/thread_models')
    const logModel = require('../models/login_models')
    const until = require('../include/until')
    const {escapeHtml, match} = require('../include/lib-perso')
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
                const {id, reason} = data
                const {userId, rank} = socket.handshake.session
                const idUser = userId === 1 ? userId : 0
                
                if (id != '' && id.length === 10) {
                    const idEsc = escapeHtml(id)
                    const reasonEsc = escapeHtml(reason ? reason : '')

                    thModel.searchThread(idEsc, dataTh => {
                        if (dataTh.userId !== userId && (rank !== 1 || rank !== 2))
                            thModel.addReport(idEsc, idUser, reasonEsc)
                    })
                }
            })
        })
    }

    const moreThread = namespace => {
        io.of(namespace).on('connection', socket => {
            socket.on('moreThread', () => {
                const {nbThread, userId, rank} = socket.handshake.session
                const nb = nbThread ? nbThread + 10 : 10
                socket.handshake.session.nbThread = nb

                thModel.threadAcc(10, data => {
                    const thread = data.map(elem => {

                        const ep = match()
                            .if(userId != 0 && (rank == 1 || rank == 2), () => {
                                return elem.isEpingle == 0 
                                    ? `<img class = "more_btn ep" src = "/assets/images/epingle_no.png" onclick="epingleOkThread('${elem.str_id}')">`
                                    : `<img class = "more_btn ep" src = "/assets/images/epingle_ok.png" onclick="epingleNoThread('${elem.str_id}')">`
                            })
                            .default(() => '')
                        
                        const ed = userId != 0 && elem.userId == userId
                            ? `<img class = "more_btn edit" src = "/assets/images/edit.png">`
                            : ''
                        const rem = userId != 0 && (elem.userId == userId || (rank == 1 || rank == 2))
                            ? `<img class = "more_btn remove" src = "/assets/images/delete.png" onclick="removePopupThread('${elem.str_id}')">`
                            : ''
                        const rep = !userId || (elem.userId != userId && rank == 0)
                            ? `<img class = "more_btn report" src = "/assets/images/report.png" onclick="reportPopupThread('${elem.str_id}')">`
                            : ''

                        return `
                            <div class = "fen t_${elem.str_id}">
                                <div class = "fen_title">
                                    <a class = "link" href = "/thread/${elem.str_id}">${elem.title}</a>
                                    <div class = "info_right">
                                        ${ep}${ed}${rem}${rep}
                                    </div>
                                </div>
                                <div class = "fen_content fen_hide">
                                    ${elem.content}
                                </div>
                                <div class = "fen_show">
                                    <label class = "link" onclick = "showMore('${elem.str_id}')">Afficher plus</label>
                                </div>
                                <div class = "fen_info">
                                    <a class = "link" href = "/profil/${elem.username}">${elem.user}</a>
                                    <div class = "info_right">${elem.date}</div>
                                </div>
                                <script type = "text/javascript">showMoreOk('${elem.str_id}')</script>
                            </div>
                        `
                    })
                    socket.emit('retourMt', thread)
                }, nb)
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