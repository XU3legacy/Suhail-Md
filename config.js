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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_01_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICA5NixcbiAgICAgICAgOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICA5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyLFxuICAgICAgICA5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg1LFxuICAgICAgICA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicVB0V21BbE5JMExEc2hHZEtNTC8zZlNKMHhiREhVdWVaSUNIZDdHUzRybz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiemFDUFlRQUZUZy1jeXZYZHJOQ2dZZ1wiLFxuICBcInBob25lSWRcIjogXCI1OWJhMzE2OC02NzJkLTQ0MzQtOGU0NS1hOGJjOTYzYTQxNmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAyMzksXG4gICAgICAxMjksXG4gICAgICAyMTksXG4gICAgICAxNTcsXG4gICAgICAxMzYsXG4gICAgICA2OCxcbiAgICAgIDE5MSxcbiAgICAgIDg4LFxuICAgICAgNzYsXG4gICAgICAxMixcbiAgICAgIDE3NyxcbiAgICAgIDEwNixcbiAgICAgIDEwMCxcbiAgICAgIDEyNSxcbiAgICAgIDE4MCxcbiAgICAgIDI0MCxcbiAgICAgIDEwLFxuICAgICAgMzksXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMjI0LFxuICAgICAgOSxcbiAgICAgIDE4NSxcbiAgICAgIDIwNyxcbiAgICAgIDg2LFxuICAgICAgMjQzLFxuICAgICAgMTM5LFxuICAgICAgMjE2LFxuICAgICAgMTA1LFxuICAgICAgMTcyLFxuICAgICAgMTUxLFxuICAgICAgMTY3LFxuICAgICAgMTQyLFxuICAgICAgMTgyLFxuICAgICAgMjM5LFxuICAgICAgMTk5LFxuICAgICAgMjMzLFxuICAgICAgOTcsXG4gICAgICAyMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQjVFRTRDRkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1NTI3Mzc4MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi44K044K444On44O744K144OI44OrXCIsXG4gICAgXCJsaWRcIjogXCIxMjU0NzM2OTQ3MTYxMjY6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYWN6dUlKRUtqdHVyVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZCVWozSjJlV2preU9sZVY5QStmSCtGTis1aGFuSE5Xa2VlU1BYRzVtbU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT1ZZY1RpcXp0akZkM08xc3BpVkJESmZ0aDhxMGs3UTFpSGRaRHU3UHVzZjhDVkh3OEVya2ZBLzEwelRpaTlPb0xudXA3OGJ0Y3l4QzFZOGk4ZkZhZ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWnozT00zTEQ5YlNzSS96bjB3Z3FTZ09lQTZ1N25FUHJIcTBGY1hnZjdJekcweGUwUG9CQjUyL1ZKcUxDVTlFQ0dRcGxETHRJazFYTmZybGVqWU5wQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjU1MjczNzgyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3MjYwNjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBbkpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFuSi5qc29uIjogIntcImtleURhdGFcIjpcIjYxUjBBMlJvZUxIUVNHUFA4RnhjYVByTC9CbCtMZ2RXV3JzQ0VZbWJMYUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjYyMjcyMTY1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMTA4NDM0NDA3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
