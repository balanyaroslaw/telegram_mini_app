import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config'
export default class ServerTelegram{
    private token:string = process.env.TOKEN!;
    private bot = new TelegramBot(this.token, {polling: true})

    start():void {
        this.bot.on("message", async (msg) => {
        const chatId = msg.chat.id;
        
        if(msg?.text === "/start"){

          await this.bot.sendMessage(chatId, "Connect your wallet",{
            reply_markup:{
              inline_keyboard:[
                [{text:"Open app", web_app:{url:"https://testtaskwallet.surge.sh"}}]
              ]
            }
          })

        }
      });
    }
}


const telegramBot = new ServerTelegram();
telegramBot.start();
