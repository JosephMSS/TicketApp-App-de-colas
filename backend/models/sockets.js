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
      socket.on("solicitar-ticket", (_, callback) => {
        const nuevoTicket = this.ticketList.crearTicket();
        console.log(
          "🚀 ~ file: sockets.js:18 ~ Sockets ~ socket.on ~ nuevoTicket:",
          nuevoTicket
        );
        callback(nuevoTicket);
      });
      socket.on("siguiente-ticket-trabajar", (usuario, callback) => {
        const ticket = this.ticketList.asignarTicket(usuario);
        console.log("🚀 ~ file: sockets.js:24 ~ Sockets ~ socket.on ~ ticket:", ticket)
        callback(ticket);
      });
    });
  }
}

module.exports = Sockets;
