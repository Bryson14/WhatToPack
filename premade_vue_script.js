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
        'Clothes': ['Thermal Underwear', 'Long Sleeve TShirt', 'Sweatpants', 'Mid-layer Jacket', 'Gloves', 'Beanie', 'Neck Covering'],
        'Gear': ['Snowboard', 'Skis', 'Poles', 'Boots', 'Helmet', 'Beanie', 'Goggles', 'Neck Covering'],
        'Food': ['Oranges', 'Banana', 'Sandwich', '~$15 for Chili Cheese Fries ;)'],
        'Misc': ['Adjust Bindings', 'Wax board/ skis if necessary before the day', 'Mask']}),
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
        clicked(active) {
            console.log(active);
            return !active;
        }
    }
});
const vm = app.mount('#app');