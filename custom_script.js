const app = Vue.createApp({
	data() {
		return {
		    selected: "",
		};
	},
    methods: {
        onChange(value){
            console.log(value);
        }
    }
});
vm = app.mount('#app');