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


global.devs = "923184474176" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_16_09_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEzLFxuICAgICAgICA3MixcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMixcbiAgICAgICAgMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTMyLFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg2LFxuICAgICAgICA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT00rdzNGRHFNaUhOL2RTd2NDY0x6cFVaelhuNjVpeWxhMDFENzNva2h3dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUkJfeGtFLTVSMFNTaTNkajVYRTNQd1wiLFxuICBcInBob25lSWRcIjogXCIwNGE3YTEyNy05ZjBiLTQxNDgtOGU3Mi00YWMxMTEwYmVjZDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICA3MixcbiAgICAgIDQ0LFxuICAgICAgNDMsXG4gICAgICAxNTIsXG4gICAgICAxMDcsXG4gICAgICAyMzQsXG4gICAgICA4MixcbiAgICAgIDMzLFxuICAgICAgMjcsXG4gICAgICAxNzgsXG4gICAgICAyMixcbiAgICAgIDE5MCxcbiAgICAgIDY3LFxuICAgICAgNjksXG4gICAgICAyNDUsXG4gICAgICAyMjgsXG4gICAgICAyNDksXG4gICAgICAyMTIsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMjIsXG4gICAgICA0NyxcbiAgICAgIDE5NyxcbiAgICAgIDIwNyxcbiAgICAgIDI0MyxcbiAgICAgIDEwLFxuICAgICAgMjgsXG4gICAgICA5MCxcbiAgICAgIDgzLFxuICAgICAgNDgsXG4gICAgICAxMCxcbiAgICAgIDIzMSxcbiAgICAgIDM3LFxuICAgICAgNzcsXG4gICAgICAxMjUsXG4gICAgICA1NyxcbiAgICAgIDksXG4gICAgICAxMzksXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREs4NkZGWThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzY4NzYzNTc6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2OTE2NjM2MzQ0NzQ2ODo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOU05tdFFDRU55RmtMY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm45Mittd3REeVlwMUZFUnNVSnRGRUx3bDM3L1FEZTRNODhlaUp5UkwzaWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRkJUeXlXVWdaQ3FndWJBWGRSNlVMOUh6dU9KbmNTbG1xNUJKeEc2VVh2RHZkVElQR0RSRkhiTnRwdWJqQnFIWlo1eUp0N3JKc2M4UmlsRFRhRzJpQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSE5zei9jMXc5UkJyV05TSDhhc3paSVBCQjdySDMwSlpxQUZJOTE5UGx1bWVNS0Y5cmNsb2krT09YMkFCR2xMMkNwcmlreC84UlV2R3RVNndjOE1QRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNjg3NjM1Nzo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYyMTg5NzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFaTRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVpNC5qc29uIjogIntcImtleURhdGFcIjpcInhTaVVVd3lkbTZxaXdWeFdTUFBlY010N2lCSU13V2l5NGRwTGFmQTBiVWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzEzNDU5NDExLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹 | 🅲🅴🅽🆃",
  packname: process.env.PACK_NAME || "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹 | 🅲🅴🅽🆃",
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
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
