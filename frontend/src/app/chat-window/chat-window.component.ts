import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  @Input() user: string = "";
  messages: { user: string; text: string }[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage) {
      this.messages.push({ user: this.user, text: this.newMessage });
      this.newMessage = '';
    }
  }
}
