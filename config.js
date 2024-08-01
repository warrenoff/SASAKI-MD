const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
process.env.OWNER_NUMBER = process.env.OWNER_NUMBER || '24105114159,242069953931'
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://lionelstes58:w4xtzeaSBIPqqYYM@cluster0.2kwex3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'deathsgun2.0@gmail.com'
global.github = 'https://github.com/Alp24ni/SASAKI-MD'
global.location = 'Africa, Gabon, Libreville'
global.gurl = 'https://instagram.com/lawliet.kfx' // add your username
global.sudo = process.env.SUDO || '24105114159,242069953931'
global.devs = '24105114159,242069953931';
global.website = 'https://github.com/Alp24ni/SASAKI-MD' //wa.me/+242069953931
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/acf07e2ad76c2c142c3b9.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝐒𝐀𝐒𝐀𝐊𝐈-𝐌𝐃' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'TEAM SASAKI' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUFuV1BZOFk2blYvSTZFZ2gvcDNGRTJnK04zRGRDVkpYR2JCUzd6UkNVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTk03STBWbWdEMDBvK2VPdlpwYVpiVm41cGxubDBBQ1g0dGlDM202eHhBcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUDBGajhBc0FwZys1cUtoSExxc0tJVk5qQ2paNE5OM3ZoNk5WWUtxTFVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSWnNqV2xkcE92L3BJeXJDQ0FVazFBMVVJakd6NkVlbTIyTWY1dWZONUZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRJb0hMR211QkZielJjSlFQT1NuNDh4SGwzSXN0a1haTHVqUTlkc3AvMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJJWld2SFBwQllpcWZHcGU0Z3RQVk5NZzYwMmc4dGhoZGNLR2xFYnd1QUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0FaYzVWRUYrREpqSWZ2WTNqU0p6UTFqQ3R6a2VWdXVjZjZTUzdaWGNWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnovcVpYRkdBZW1rMHJFcEQzUC8xTncvWkF2MjYwd3pRclJ3YkpKbkVrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdwNERXbFE0aDMwT1BQaEd4TFFzdGpTQm9pbDlsam9xaEM2NVBoZEQ4czMyUGxiNW5MRGtmZmtMWnN0Z25RbU01azQrT3JERWxyWU5uNktVdGxYNWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6Ik1pa2dERWpSNUdhQVZuRFd1TG5VMmxneDJZWTMyZ1F2eURrNjdGczJ5YUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozOSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjM5LCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ii0xdjRPMGt3Ul9TcGdwT3JLUkhNWFEiLCJwaG9uZUlkIjoiOGE4NzhkMzUtYjI1MS00OTMyLTk5ZWMtZjZiMjVlODRmODQ0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpkK1pvYU1Kc1dvUVY0YXAwd2FoaHdnMmw1ST0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVNjUHRlQkNKSFRQSUduajNVOU5yNVlNb1BZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzcxOGE4REVKdVpxN1VHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN3czY3I1Z0E0QVYyYTc2QkRRSElBMlMrU0krWkczM1RYWEZyYXRtZUJFTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidHRqbk9WWFQrdFlSREZjQWVQSW5OaU4rQVYzcVJJbDg3QitOYXBYUjVKMlNjNWwzUkdrVGxJSHBOcnpXQjZzM2RQQ2dhUEFVc2cwa1VaU2NxcjBsQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Imh2ZkYwNG1sZmUyTzNtWGFKbTBRTEJrQTVDNGRiTzA0aFkrOE9ZUmFTaEx2ZlV0UzkxWlpWZ2h3dS9oTUU3andDL2c0d3NOL1JzSTV4UVpObWRFbmpBPT0ifSwibWUiOnsiaWQiOiIyNDEwNTExNDE1OTozNkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDEwNTExNDE1OTozNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlOE4zSytZQU9BRmRtdStnUTBCeUFOa3ZraVBtUnQ5MDExeGEyclpuZ1JEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNDY5NTgyfQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? '𝐒𝐀𝐒𝐀𝐊𝐈-𝐌𝐃' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? '𝐒𝐀𝐒𝐀𝐊𝐈-𝐌𝐃' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '242' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey bruh, I,am 𝐒𝐀𝐒𝐀𝐊𝐈-𝐌𝐃...Alive Now...' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'SASAKI-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE,
  LG: process.env.LG === undefined ? 'false' : process.env.LG,
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
