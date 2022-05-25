let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪⸙JAROTT⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ *_GROUP OFFC 𝗥𝗜𝗘𝗟𝗕𝗢𝗧𝗭_*
║│➸  *https://tinyurl.com/y5ck3k4u
      𝗥𝗮𝗺𝗲𝗶𝗻 𝗯𝗮𝗻𝗵
╰─────────❉
▌│█║▌║▌║║▌║▌║█│▌
⳹ ❋ཻུ۪۪⸙𝗥𝗜𝗘𝗟𝗕𝗢𝗧𝗭⳹ ❋ཻུ۪۪⸙ by.𝗥𝗜𝗘𝗟𝗫𝗱
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
