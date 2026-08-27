import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface.ts';
import type { YesNoResponse } from '@/interfaces/yes-no-response.interface.ts';
import {useSleep} from "@/composables/useSleep.ts";

const yesNoWtfUrl = 'https://yes-no-wtf.vercel.app/api';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getReply = async () => {
    const response = await fetch(yesNoWtfUrl);
    const data = (await response.json()) as YesNoResponse;
    return data;
  };

  const onMessage = async (message: string) => {
    try {
      if (message.length === 0) return;

      messages.value.push({
        id: new Date().getTime(),
        itsMine: true,
        message: message,
      });

      if (!message.endsWith('?')) return;

      const { answer, image } = await getReply();

      await useSleep(1.5);

      messages.value.push({
        id: new Date().getTime() + 1,
        itsMine: false,
        message: answer,
        image: image,
      });
    }
    catch (e) {
      console.error(e);
    }

  };

  return {
    // Properties
    messages,

    // Methods
    onMessage,
  };
};
