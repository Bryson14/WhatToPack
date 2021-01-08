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
        'Misc':['laptop', 'phone', 'charger', 'medications', 'toothpaste', 'toothbrush']}),
    new PremadeList('race', 'Race/ Triathlon (multi-day)', {
        'Clothes':['Trail Running Shoes', 'Shoes Insoles', 'Team Shirts', 'Running Shirt', 'Running Shorts or Compression Shorts x3', 'Running Specific Socks x4', 'Sports Bra/ Underwear x4', 'Post-race Shirt', 'Long Sleeve Technical Layer', 'Sweatpants', 'Costumes/ Accessories', 'Light Jacket', 'Raincoat', 'Warm Hoodie or Jacket', 'CEP Compression Socks or Sleeves', 'Running Hat', 'Flip Flops', 'Running Headband', 'Gloves/ Hat', 'Waterproof Shoes/ Boots', 'Running Belt'],
        'Other Must Haves': ['Trash and Revycling Liners', 'First Aid Kit', 'Cash', 'ICE Contacts for each runner'],
        'Night Gear': ['Headlamp', 'Hand Flashlight'],
        'Accessories': ['Smartphone', 'Portable Charger', 'Camera (If not using phone)', 'Cowbell/ Noise Maker', 'Sunglasses', 'Headphones', 'GPS Running Watch', 'Massage Roller/ Gun', 'Hydration Belt', 'KT Tape'],
        'Food': ['Water', 'Peanut Butter and Jelly', 'Bread/ Bagels', 'Rice Cakes', 'Fruit', 'Trail Mix', 'Coffee', 'Electrolyte Drink', 'Snack Bars', 'Energy Bars/ Gel', 'Protein Powder'],
        'Camping Gear': ['Two 4-person tents', 'Rain fly', 'Camping table', 'Sleeping Bag', 'Sleeping Pad', 'Cooler', 'Camping Stove', 'Tent Decorations', 'Reusable Water Bottle', 'Insulated Coffee Bottle', 'Yoga Mat', 'Ice'],
        'Toiletries': ['Deodorant', 'Sunscreen', 'Bobby Pins/ Hair Ties', 'Comb', 'Anti-Chafe Powder or Cream', 'Toothbrush', 'Ibuprophen', 'Toilet Paper', 'Cramp Prevention'],
        })
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