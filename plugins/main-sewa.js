let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/59974a2e3324de3085145.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "◈ Made by YanzzOfc",
        "description": `
┌「 *Sewa bot* 」
│     
├ 2Grup / 30Hari
├ Rp. 5.000 Gopay/Dana/Qris
├ Rp. 10.000 Pulsa Indosat
│
├ Grup Bebas / Permanen
├ Rp. 15.000 (promo jadi 5k) Dana/Gopay/Dana/Qris
├ Rp. 10,000 Pulsa Indosat
│
├ tertarik? hubungi: 
├ @79811094834 (OWN)
└────
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4730029423700586"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4730029423700586",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6288217277973@s.whatsapp.net"
        },
        "footerText": "https://wa.me/c/79811094834\n\nowner number : wa.me/79811094834"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|premium)$/i

module.exports = handler