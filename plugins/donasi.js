let handler = async (m, { conn, usedPrefix }) => { 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 8888888889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `${global.wm}

┌─「 Donasi • Pulsa 」
│ • *Axis:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
│ • *Gopay:* [${global.pgopay}]
│ • *Ovo:* [${global.povo}]
│ • *Link Aja:* [${global.plinkaja}]
│ • *Sociabuzz:* [${global.psociabuzz}]
❏────`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: false
      }}}}}}, {})
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler