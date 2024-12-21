const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="adetolaraji610@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d8f7c18771d634b714976.jpg"; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ myles" 


global.devs = "2348136876357" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348136876357";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "https://telegra.ph/file/d8f7c18771d634b714976.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_38_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjExLFxuICAgICAgICA4NyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM3LFxuICAgICAgICA2MixcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQyLFxuICAgICAgICA3NixcbiAgICAgICAgMTU1LFxuICAgICAgICA3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDY0LFxuICAgICAgICA0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgxLFxuICAgICAgICA4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDkwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9rcUtka1d3bWJpK2NkNDJyNFFWbjVCWU5FWWIwYnVQNTFXaFJZQ2xBYUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlmZXYtVGpWVGtLX3BjUk5tNUJldGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2RlOWViZWEtM2E3Yi00YzM4LWEyMzYtN2Y1ZjIzMGRjMTE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDE4MyxcbiAgICAgIDE5NyxcbiAgICAgIDcwLFxuICAgICAgOCxcbiAgICAgIDU0LFxuICAgICAgMTYxLFxuICAgICAgMTA5LFxuICAgICAgMjQ4LFxuICAgICAgMjE0LFxuICAgICAgMTgwLFxuICAgICAgODMsXG4gICAgICAyMzgsXG4gICAgICA4MixcbiAgICAgIDE2MSxcbiAgICAgIDg0LFxuICAgICAgNCxcbiAgICAgIDk2LFxuICAgICAgMTIxLFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNixcbiAgICAgIDI1MCxcbiAgICAgIDEyOSxcbiAgICAgIDUwLFxuICAgICAgMTAsXG4gICAgICAxOSxcbiAgICAgIDI3LFxuICAgICAgNzIsXG4gICAgICAxMDksXG4gICAgICAxMDgsXG4gICAgICAxNTgsXG4gICAgICA5OSxcbiAgICAgIDE0NixcbiAgICAgIDE2NCxcbiAgICAgIDI1MixcbiAgICAgIDE5MixcbiAgICAgIDExMCxcbiAgICAgIDE5OSxcbiAgICAgIDE5NyxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdEV1ZUOTdIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM2ODc2MzU3Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjkxNjYzNjM0NDc0Njg6NzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnVObXRRQ0VNU2xtN3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuOTIrbXd0RHlZcDFGRVJzVUp0RkVMd2wzNy9RRGU0TTg4ZWlKeVJMM2lnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldxWFQ2eGVwVzRFQW5VZnlhandTd2xzTWVHSjcvM0I2NnJuc2FOL1pBN3Q2S1NKbzlOQmRhejBpL1NWa2JIVXYveWowYnRvUEVtaEd4eXcvTWM1OEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhFNE0rYXZ5aGlCdkFRT01MbHlBR2l4MkxmRHlNckNNNTFYajJMbjNIUityRi8wSkZwZ2cxV2JTVWtKZWdBQ0pBN3dDTkZUaGJUdU5peHo4aHhqTENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzY4NzYzNTc6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NzkxODc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHo4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQejguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0MXpNeEZGa2o0djE4R0ZFVDNoemlDVkt0K3JpMUlxTVR2ajUveFVmYWE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxMzQ1OTQxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹 | 🅲🅴🅽🆃",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🅲🅴🅽🆃",
  ownername:process.env.OWNER_NAME|| "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "MYLES"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
