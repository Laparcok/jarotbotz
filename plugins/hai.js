let handler = async (m, { conn }) => {
let caption = `*📮: HALLO KAK SAYA 𝐁𝐎𝐓 𝐉𝐑,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ jarotbotz`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(hallo|hay|bot|bot|botjr|jarotbotz|hai|hay|menu)/i
handler.command = new RegExp
module.exports = handler
