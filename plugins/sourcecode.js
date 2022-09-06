let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/eb1e8d5bf73fc25b14d65.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ https://xnxx.com/bokep:v
│ *Base :* 
│ ╰ https://oyo.com/
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Jangan Lupa kasih star & kasih credit

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
