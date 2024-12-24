import { makeAutoObservable } from "mobx";

export interface Dialog {
  id: number;
  name: string;
}

export interface Message {
  id: number;
  message: string;
}

class DialogsStore {
  dialogsPage = {
    dialogs: [
      { id: 1, name: "Lexa" },
      { id: 2, name: "Andrew" },
      { id: 3, name: "Katya" },
      { id: 4, name: "Angelina" },
      { id: 5, name: "Vika" },
      { id: 6, name: "Valera" },
    ] as Dialog[],
    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Hey" },
      { id: 5, message: "Sup?" },
    ] as Message[],
  };

  constructor() {
    makeAutoObservable(this);
  }

  addMessage(newMessage: string) {
    this.dialogsPage.messages.push({
      id: this.dialogsPage.messages.length + 1,
      message: newMessage,
    });
  }
}

const dialogsStore = new DialogsStore();
export { dialogsStore, DialogsStore };