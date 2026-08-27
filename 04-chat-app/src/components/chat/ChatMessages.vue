<template>
  <div ref="refChatSection" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <!-- :itsMine="message.itsMine" -->
      <!-- :message="message.message" -->
      <!-- :image="message.image" -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from '@/components/chat/ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface.ts';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();

const refChatSection = ref<HTMLDivElement | null>(null);

watch(
  () => messages,
  () => {
    refChatSection.value?.scrollTo({
      top: refChatSection.value.scrollHeight,
      behavior: 'smooth',
    });
  },
  { flush: 'post' }
);
</script>
