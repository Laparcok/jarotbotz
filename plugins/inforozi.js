let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : JAROTT
║│➸ ```UMUR``` : 18thn
║│➸ ```ASAL``` : pasuruan
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/E5l0ofPuMxG3H8ZhMRyI7e
║│➸ ```ISTAGRAM``` : https://www.instagram.com/sdlrangkringan_/
║│➸ ```WHATSAPP``` : https://wa.me/6285850539404
╰────────❉
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
