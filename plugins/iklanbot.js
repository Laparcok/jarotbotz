let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *STORE BOT* ]─────✧
┴
│ *STORE 𝐉𝐀𝐑𝐎𝐓 𝐁𝐎𝐓𝐙*
┬
╰──────────···`.trim()
  const button = {
        buttonText: '🛒STORE JAROTRBOTZ🛒',
        description: kontol,
        sections:  [{title: "STORE JAROTRBOTZ", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa botz jr', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewasat"},
        {title: 'Jasa run mursid', description: "jasa run bot", rowId:".runbotmursid"},
        {title: 'RULES', description: "rules JAROTbotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(iklan|sponsor)$/i
handler.help = ['rules']
module.exports = handler
