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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_51_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU1LFxuICAgICAgICA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDU4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICA3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDYwLFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJteTFMaFFKYkFNUk0zNjNXaEhNb1ZPMUFPQXFsRnRkc21KblhPVFRtOXd3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY1NTI3Mzc4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0ExRDA3MTIyMzIwMzRDNEQ5RUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMTU3NTAwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNiSGQ2UzloU0txSTdmTVh3ZUZIV0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2FjZjY1NTAtOTI0ZC00Njg1LTkwYzItYThmODFlZmI3ODI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgOTAsXG4gICAgICAxNjksXG4gICAgICA1MCxcbiAgICAgIDEzNixcbiAgICAgIDEwMSxcbiAgICAgIDI0OCxcbiAgICAgIDEwMSxcbiAgICAgIDE2NixcbiAgICAgIDExLFxuICAgICAgMjMwLFxuICAgICAgMTk3LFxuICAgICAgNjksXG4gICAgICAxMzksXG4gICAgICAxNDcsXG4gICAgICA0MSxcbiAgICAgIDE3OCxcbiAgICAgIDEzNixcbiAgICAgIDIzMixcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICAxNTksXG4gICAgICAxMzgsXG4gICAgICA4OCxcbiAgICAgIDc1LFxuICAgICAgMzksXG4gICAgICAxMDEsXG4gICAgICAxODksXG4gICAgICAzNCxcbiAgICAgIDIxLFxuICAgICAgMjM4LFxuICAgICAgOTUsXG4gICAgICAxMjAsXG4gICAgICAxNDgsXG4gICAgICAzMyxcbiAgICAgIDM2LFxuICAgICAgMzUsXG4gICAgICAzMyxcbiAgICAgIDE4NSxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTR0FYUVhWNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjU1MjczNzgyOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLjg6rjg6fjg7zjg6Hjg7Pjg7vjgrnjgq/jg4pcIixcbiAgICBcImxpZFwiOiBcIjEyNTQ3MzY5NDcxNjEyNjo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpTWs4d05FUEdYMWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNnBpV1V3TVRmam1ZL1ExVktZaHNCRTU2R3lpQzRwRmp5U0dxVGJJM3EzMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5bERkZGRjZ2FOVWRiY240T21LblZNeUZISUxVZGRUMys1WUJJam5KbjVxN2N0SEh6U3J0aWgybHdFdXU4QW14eTRIYWIvV2YyQnpKZDB0clB6a1Vndz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6VERHcXM0Ti9aMkMyMFc0VG9FS21GRGVUQXZQbXJSWmZaOHV3M0Z5V0lCZlFqOGZZSnIwa2NRZmRWVHR6MU51YVdRUFpacnR1VVE0cER5YzJjSGhpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTUyNzM3ODI6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxNTc0OTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQSFpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBIWi5qc29uIjogIntcImtleURhdGFcIjpcIk0zaDkrSHRBUUEyRVZWS054Yko0NDdKRWYxWlFnZWpQa3ZuMUFoNlo3Mmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzY0OTM1NzM2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIzMTU3NDk0MjU5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

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
  LANG: ( process.env.THEME ||  "GOJO SATORU"  ).toUpperCase(),



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
