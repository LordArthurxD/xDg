let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let fontPath = 'src/font/Zahraaa.ttf'
let handler  = async (m, { conn, args }) => {
  let inputPath ='src/kertas/magernulis1.jpg'
  let outputPath = 'tmp/hasil.jpg'
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
  let teks = args.join` `
  spawn('convert', [
    inputPath,
    '-font',
    fontPath, 
    '-fill', 
    'blue', 
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+78',
    hari,
    '-font',
    fontPath,
    '-fill', 
    'blue', 
    '-size',
    '1024x784',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+102',
    tgl,
    '-font',
    fontPath, 
    '-fill', 
    'blue', 
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+344+142',
    teks,
    outputPath
  ])
  .on('error', e => conn.reply(m.chat, util.format(e), m))
  .on('exit', () => {
    conn.sendFile(m.chat, outputPath, 'nulis.jpg', 'Creado por Mikey:v', m)
  })
}
handler.help = ['n'].map(v => v + 'ulis2 <texto>')
handler.tags = ['nulis']
handler.command = /^nulis2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
