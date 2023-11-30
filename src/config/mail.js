const mailConfig = {
  host: 'octooiltradingllc.com',
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: 'ali@octooiltradingllc.com',
    pass: 'admin03001212'
  }
}

module.exports = mailConfig
// Username:	ali@octooiltradingllc.com
// Password:	admin03001212
// Incoming Server:	octooiltradingllc.com
// IMAP Port: 993 POP3 Port: 995
// Outgoing Server:	octooiltradingllc.com
// SMTP Port: 465