let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪𝐒𝐄𝐖𝐀 𝐁𝐎𝐓 𝐉𝐑⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ • *SEWA BOT TANYA*           ║│ *LANGSUNG KE*
║│ *OWNER*
╰─────────❉
📮 𝗣𝗶𝗻𝗻𝗲𝗱 :
│ *_Tolong jangan dispam_*
_____••••••••• 
⬣━〔Store By 𝐉𝐀𝐑𝐎𝐓〕━⬣
▌│█║▌║▌║║▌║▌║█│▌`.trim()
  const button = {
        buttonText: '↱ 🄺🄻🄸🄺 🅂🄸🄽🄸 ↲',
        description: kontol,
        sections:  [{title: "STORE 𝐁𝐎𝐓 𝐉𝐑", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'nomor owner 𝐁𝐎𝐓 𝐉𝐑', description: "kalau mau sewa silahkan cht owner 𝐁𝐎𝐓 𝐉𝐑", rowId:".owner𝐁𝐎𝐓𝐉𝐑"},
        {title: 'RULES', description: "rules Jarotbotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(botsattt|sewasat)$/i
handler.help = ['rules']
module.exports = handler
