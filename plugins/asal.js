let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *BIODATA OWNER* ❉───
║│➸ *Nama* : 𝐑𝐈𝐄𝐋 
║│➸ *Umur* : 15 𝐓𝐇
║│➸ *Kelas* :  9 𝐒𝐌𝐏
║│➸ *Status* : butuh ayng 𝐎𝐀𝐊𝐖𝐖𝐊
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *ASAL KOTA* ❉───
║│➸ *DAERAH* : 𝐊𝐀𝐋𝐈𝐌𝐀𝐍𝐓𝐀𝐍 𝐓𝐈𝐌𝐔𝐑 =}} 𝐒𝐌𝐃_*
║│➸ *ASAL KOTA* : *_𝐒𝐀𝐌𝐀𝐑𝐈𝐍𝐃𝐀_*
║│➸ *ALAMAT RUMAH* : *[PRIVASI]*
║│
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'ROZI')).buffer(), ext, 'zifabotz', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewazifa', m)

}
handler.help = ['asal', 'kota']
handler.tags = ['info']
handler.command = /^(asal|kota)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
