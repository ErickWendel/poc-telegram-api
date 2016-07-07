'use strict';
var TelegramBot = require('node-telegram-bot-api');
//https://api.telegram.org/waassssa0506:6a4dbd6294baf58f00637c30b1d38fd5/getMe
var token = '213544824:AAGSkcndtbpxxk7UHFv0zdnZ-7udvktbLX8';
// Setup polling way
var bot = new TelegramBot(token, { polling: true });

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, "resp");
});

// Any kind of message
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    
    //mensagem
    console.log(msg);

    //enviar mensagem
    bot.sendMessage(chatId,
        "<b style='color:red'>Negrito</b>. <i>Italico</i> Respondendo a Mensagem do " + msg.from.first_name + " " +
        msg.from.last_name + " -  Mensagem: " + msg.text, 
                    { 
                        parse_mode: 'HTML',
                        reply_to_message_id: msg.message_id,
                        reply_markup: JSON.stringify({
                            inline_keyboard: [
                                    [{ text: 'Pizza', callback_data: '0' }, { text: 'Feijao', callback_data: '1' }],
                                    [{ text: 'Hamburger', callback_data: '2' }, { text: 'Arroz', callback_data: '3' }],
                                    [{ text: 'Macarrão', callback_data: '4' }]
                                ]
                            })
                        
                        });
    
    //encaminhar mensagem
    // bot.forwardMessage(chatId, msg.from.id, msg.message_id);
    
    // bot.onReplyToMessage(chatId, msg.from.id);
});
