let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════════════════

║╭──❉ 〔 ⳹ ❋ཻུ۪۪TIKTOK⳹ ❋ཻུ۪۪ 〕 ❉────── 

║│➸ *_TIKTOK OWNER_*

║│➸  *https://vt.tiktok.com/ZSduPhdNG/*

╰─────────❉

▌│█║▌║▌║║▌║▌║█│▌

⳹ ❋ཻུ۪۪BOT JR⳹ ❋ཻུ۪۪⸙ by.JAROT

`
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['tiktok']
handler.tags = ['info']
handler.command = /^tt$/i

module.exports = handler
