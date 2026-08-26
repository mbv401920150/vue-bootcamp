const { createApp, ref } = Vue;

const vueApp = createApp({
    setup: () => 
    {
        const message = ref('Hello world');
        const date = ref(new Date());
        
        const changeMessage = () =>
        {
            message.value = 'Hello world again';
            date.value = new Date();
        }
        
        return {
            message,
            date,

            changeMessage
        }
    }
})

vueApp.mount('#myVueApp');