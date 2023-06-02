const { TicketList } = require("./ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
    this.ticketList = new TicketList();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      socket.on("solicitar-ticket", (data, callback) => {
        const nuevoTicket = this.ticketList.crearTicket();
        console.log(
          "🚀 ~ file: sockets.js:18 ~ Sockets ~ socket.on ~ nuevoTicket:",
          nuevoTicket
        );
        callback(nuevoTicket);
      });
    });
  }
}

module.exports = Sockets;
