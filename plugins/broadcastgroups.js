const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
    let logo = global.logo
    let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
    conn.reply(m.chat, `_Send a broadcast message to ${groups.length} group_\nestimation complete ${groups.length * 1.5} seconds`, m)
    for (let id of groups) {
        await delay(1500)
        await conn.send2ButtonLoc(id, logo,'*—「 𝐁𝐎𝐓 𝐉𝐑 Broadcast 」—*\n' + text, wm, '⋮☰ Menu', '.menu', 'Sewa', '.sewa')
    }
    m.reply('_*Broadcast berhasil di kirim*_')
}
handler.help = ['bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(gc|groups)$/i

handler.owner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))

let wm = global.botwm
