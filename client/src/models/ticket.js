export const EmptyTicket = {
  id: undefined,
  number: undefined,
  escritorio: undefined,
  agente: undefined,
};
export class Ticket {
  constructor(ticket = EmptyTicket) {
    this.id = ticket.id;
    this.number = ticket.number;
    this.escritorio = ticket.escritorio;
    this.agente = ticket.agente;
  }
}
