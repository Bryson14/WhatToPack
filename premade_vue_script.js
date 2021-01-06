class PremadeList {
    constructor(value, label, inner_data) {
        // inner data is the actual list. It will be a dictionary with the sub-headings as the keys and the checkable
        // items in a list of strings
        // i.e.  inner_data = {"toiletries": ['toothbrush', 'razor'], 'clothes': ['shirts', 'pants']}
        // to not have a subheading, just put '' as the key.
        this.value = value;
        this.label = label;
        this.data = inner_data;
    }
}

const premade_lists = [
    new PremadeList("beach-vacation", "Beach Vacation", {
        "clothes": ['hat', 'sunglasses', 'swimsuit'],
        "beach fun": ['frisbee', 'goggles', 'sunscreen']}),
    new PremadeList('weekend-trip', 'Weekend Trip', {
        "Food": ['peach-eos', 'energy drinks'],
        "Games": ['uno', 'other stuff']}),
    new PremadeList('ski-day', 'A Day Skiing/ Snowboarding', {
        'Main Stuff': ['snowboard', 'boots', 'goggles', 'money for food', 'packed lunches', 'gloves']}),
    new PremadeList('honeymoon', 'HoneyMoon', {
        'Clothes':['Underwear','shirts', 'shorts', 'swimsuits', 'pants', 'sunglasses', 'watch', 'skirts', 'dresses', 'shoes', 'socks'],
        'Activities': ['lingerie', 'edible body glitter', 'sex cards', 'lube', 'sex toys'],
        'Misc':['laptop', 'phone', 'charger', 'medications', 'toothpaste', 'toothbrush']})
]

// adding done or not done information to these bullet points

for (list of premade_lists) {
    for (heading in list.data) {
        let new_dict = {};
        for (item of list.data[heading])
            new_dict[item] = false;
        list.data[heading] = new_dict;
    }
}

const app = Vue.createApp({
	data() {
		return {
		    selected: "",
			premade_lists: premade_lists,
		};
	},
    methods: {
        onChange(value){
            console.log(value);
        }
    }
});
vm = app.mount('#app');