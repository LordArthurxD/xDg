let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  conn.sendMessage(m.chat, text, MessageType.extendedText, { contextInfo: { mentionedJid: users } })
}
handler.help = ['hidetag'].map(v => 'o' + v + ' [texto]')
handler.tags = ['owner']
handler.command = /^(ohidetag)$/i
handler.owner = true
handler.mods = true
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
