const app = Vue.createApp({
	data() {
		return {
		    selected: "",
		    entered_type: "heading",
		    entered_input: "",
		    last_added_col_id: "",
		};
	},
    methods: {
        onChange(value){
            console.log(value);
        },
        // get the info from the user, adds a new heading  or line
        handleInput(value) {
            console.log(`Added ${this.entered_input} as a ${this.entered_type} `);
            let list_div = document.getElementById("packing_list");
            if (this.entered_type === "listItem") {
                if (this.last_added_col_id === "") {
                    this.entered_type = 'heading';
                    this.entered_input = "";
                    alert("Please enter a heading first!");
                } else {
                    let parent_div = document.getElementById(this.last_added_col_id);
                    let q = parent_div.querySelector('ol');

                    if (q === null) {
                        let list = document.createElement('ol');
                        let item = document.createElement('li');
                        item.innerHTML = this.entered_input;
                        list.append(item);
                        parent_div.append(list);

                    } else {
                        let item = document.createElement('li');
                        item.innerHTML = this.entered_input;
                        q.append(item);
                    }
                                    // reset input
                this.entered_type = 'listItem';
                this.entered_input = "";
                }

            } else if (this.entered_type === "heading") {
                let col_div = document.createElement("div");
                col_div.classList.add('container');
                col_div.classList.add('col-sm-2');
                col_div.id = `heading_${this.entered_input}_${Math.floor((Math.random() * 1000) + 1)}`
                this.last_added_col_id = col_div.id;
                col_div.innerHTML = `<h3><b>  ${this.entered_input} </b></h3>`;
                list_div.append(col_div);

                // reset input
                this.entered_type = 'listItem';
                this.entered_input = "";
            } else {
                console.log("Unknown type in input")
                this.entered_input = "";
            }
    }
    },
});
vm = app.mount('#app');