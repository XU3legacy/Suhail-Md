const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237655273782";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_37_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2LFxuICAgICAgICA2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOCxcbiAgICAgICAgNixcbiAgICAgICAgMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyNixcbiAgICAgICAgMjU0LFxuICAgICAgICA4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg4LFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDMxLFxuICAgICAgICAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1b1JwV2R2N1lpZFJ5eHprSHFPRkkxS1FOdUxrOEpQOHF3bU9mdUtBRTFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY1NTI3Mzc4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E4M0UyMEE1NTMzODZCN0Y3MDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMTUzMDYzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3NjU1MjczNzgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUIwRkQ0MEZCM0E4NzEyNEE5NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMxNTMwNjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicm5PRW16dmxUaTY4Wkp0eXBoWFlMUVwiLFxuICBcInBob25lSWRcIjogXCI0MTA0MzYwNC1jOTc1LTQxMzEtYTkxNy02MTA2MWZmNTFkYjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAxNCxcbiAgICAgIDEzMixcbiAgICAgIDIwNCxcbiAgICAgIDE3OCxcbiAgICAgIDMsXG4gICAgICAyNDQsXG4gICAgICAxMjcsXG4gICAgICAxOTUsXG4gICAgICAxNDUsXG4gICAgICA5OSxcbiAgICAgIDk3LFxuICAgICAgMTc3LFxuICAgICAgMTUxLFxuICAgICAgMTYwLFxuICAgICAgMTY1LFxuICAgICAgMjM5LFxuICAgICAgMTM3LFxuICAgICAgNixcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICA2LFxuICAgICAgMTY3LFxuICAgICAgMjI0LFxuICAgICAgNTMsXG4gICAgICAyMyxcbiAgICAgIDEzOCxcbiAgICAgIDE4NCxcbiAgICAgIDIyMSxcbiAgICAgIDg3LFxuICAgICAgMTM3LFxuICAgICAgMjM0LFxuICAgICAgOTQsXG4gICAgICAxMCxcbiAgICAgIDIwMyxcbiAgICAgIDEwMCxcbiAgICAgIDY5LFxuICAgICAgMjQ1LFxuICAgICAgMjAzLFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhERUtTU0RBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NTUyNzM3ODI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuODquODp+ODvOODoeODs+ODu+OCueOCr+ODilwiLFxuICAgIFwibGlkXCI6IFwiMTI1NDczNjk0NzE2MTI2OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHVQdHFrSkVKLzExTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWY1VIYVdkRUYwNFYzeWJ0c0dKbHB3ODlTWktNYndFblJTbEI4RWZBblJFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImEyWHRweW42U1UwdTFsS2FiTVorSXdmbWtWbGI4eVVRbnpsVmlkUnEzOGtQeE41TjQySEN0dUdiSERTR1k2dU5hWXQ3ZTgwWTI0Rk8xdGpCL2p6b0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVsKy9UOXZJeWFwQlJpek5FcjRWMVlwRXFlRVRXdXhRYjdDWTM5aE5SejBEcFFVUWZYcEFKa3pBNDZFbzc4ckE1MG5nSkd2TDVtN1pyMGZGQ0NOS0RnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1NTI3Mzc4Mjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzE1MzA1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU44MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjgwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ0wvOTM3Y3RjQXhIc2hFaEIyM291UmR5MGl0NWtyM0VtN2lucmYxTkFxWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTAyNzg5MTE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMxNTMwNjA0MjZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝚩𝐋𝚫𝐂𝐊 𝐋𝚵𝐆𝚫𝐂𝐘",
  packname: process.env.PACK_NAME || "𝚩𝐋𝚫𝐂𝐊 𝐋𝚵𝐆𝚫𝐂𝐘",
  botname : process.env.BOT_NAME  || "𝚩𝐋𝚫𝐂𝐊 𝐋𝚵𝐆𝚫𝐂𝐘",
  ownername:process.env.OWNER_NAME|| "𝚩𝐋𝚫𝐂𝐊 𝐋𝚵𝐆𝚫𝐂𝐘",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
