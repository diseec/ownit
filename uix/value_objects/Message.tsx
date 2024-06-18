export default class Message {
  content: string;
  timestamp: string;
  senderId: number;
  receiverId: number;
  status: "sending" | "sent" | "read";

  constructor(
    content: string,
    timestamp: string,
    senderId: number,
    receiverId: number,
    status?: "sending" | "sent" | "read"
  ) {
    this.content = content;
    this.timestamp = timestamp;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.status = status ?? "read";
  }

  get isMine() {
    return this.senderId === 2;
  }

  get displayTime() {
    return new Date(this.timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }
}
