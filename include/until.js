const {match} = require('./lib-perso')

const refomuleDate = d => {
	const modifM = 1000 * 60
	const modifH = 1000 * 60 * 60
	const di = new Date(d)
	const df = new Date()
	const sec = df.getTime() / 1000 - di.getTime() / 1000

	return match(sec)
	.plage(0, 59, () => 'moin d\'une minute')
	.plage(60, 3599, () => {
		const min = Math.round(df.getTime() / modifM - di.getTime() / modifM)
		return min + ' minutes'
	})
	.plage(3600, 86400, () => {
		const heur = Math.round(df.getTime() / modifH - di.getTime() / modifH)
		return heur + ' heurs'
	})
	.default(() => di.getFullYear() + '/' + (di.getMonth() + 1) + '/' + di.getDate())
}

module.exports = {refomuleDate}