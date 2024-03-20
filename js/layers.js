addLayer("dev", {
    name: "dev", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "x", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
	points: new Decimal(0),
	keyInput: "",
    }},
    color: "#FFFFFF",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "dev power", // Name of prestige currency
    baseResource: "materials", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    clickables: {
        11: {
            display: "+1 gear",
            canClick() { return keyInput == process.env.DEV_KEY },
            onClick() { 
                player['g'].points = player['g'].points.add(1) 
            }
        },
        12: {
            display: "+1 processor",
            canClick() { return keyInput == process.env.DEV_KEY },
            onClick() { 
                player['pro'].points = player['pro'].points.add(1) 
            }
        },
        13: {
            display: "+1 transformer",
            canClick() { return keyInput == process.env.DEV_KEY },
            onClick() { 
                player['trans'].points = player['trans'].points.add(1) 
            }
        },
        14: {
            display: "+1 constructor",
            canClick() { return keyInput == process.env.DEV_KEY },
            onClick() { 
                player['con'].points = player['con'].points.add(1) 
            }
        }
    },
    tabFormat: [
        "heading",
        "main-display",
        "resource-display",
	["display-text", "Dev key"],
	["text-input", "keyInput"],
        "clickables",
    ],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 9999, // what tha helll
    hotkeys: [
        {key: "i", description: "i: increment", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("achievements", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "ACH", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#F0F0F)",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "i", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return 0}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    achievements: {
        11: {
            name: "<h2>the start</h2><br><br><img src='resources/achievements/the start.png' style='max-width=25%;max-height:25%'></img>",
            tooltip: "get to 1 materials.",
            done() {
                return player.points.gte(1)
            },
            style: {
                "width": "120%",
                "max-height": "60%"
            }
        }
    },
    tabFormat: [
        "heading",
        "achievements"
    ],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    doReset() { return }, // Increment Is Eternal.
    row: "side", // what tha helll
    hotkeys: [
        {key: "i", description: "i: increment", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

addLayer("i", {
    name: "incrementor", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<img src='resources/layers/increment.png' style='width:calc(80% - 2px);height:calc(80% - 2px);margin:10%'></img>", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#EDEDED",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "incremental power", // Name of prestige currency
    baseResource: "materials", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    clickables: {
        11: {
            display: "increment",
            canClick() { return true },
            onClick() { 
                gain = new Decimal(1)
                gain = gain.add(player['pro'].points)
                player.points = player.points.add(gain) 
            }
        }
    },
    componentStyles: {
        "clickable": {
            'min-width': '150px',
            'min-height': '80px',
            'font-size': '16px'        
        }
    },
    tabFormat: [
        "heading",
        "main-display",
        "clickables",
        "resource-display"
    ],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 9999, // what tha helll
    hotkeys: [
        {key: "i", description: "i: increment", onPress(){
            gain = new Decimal(1)
            gain = gain.add(player['pro'].points)
            player.points = player.points.add(gain) 
        }},
    ],
    layerShown(){return true},
})

addLayer("g", {
    name: "gear", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<img src='resources/layers/gear.png' style='width:calc(80% - 2px);height:calc(80% - 2px);margin:10%'></img>",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#3C3C3C",
    requires: new Decimal(50), // Can be a function that takes requirement increases into account
    resource: "gears turning", // Name of prestige currency
    baseResource: "materials", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    onPrestige(gain) {
        player[this.layer].points = player[this.layer].points.add(player['trans'].points)
    },
    tabFormat: [
        "heading",
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        ["display-text", function() {
            if (player[this.layer].points.gte(0))
                return 'your ' + format(player[this.layer].points) + ' gears turning are generating ' + player[this.layer].points / 2 + ' materials per second.'
        }]

    ],
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "g: construct a gear", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer("pro", {
    name: "processor", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<img src='resources/layers/processor.png' style='width:calc(80% - 2px);height:calc(80% - 2px);margin:10%'></img>",
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#407832",
    requires: new Decimal(50), // Can be a function that takes requirement increases into account
    resource: "processor units", // Name of prestige currency
    baseResource: "materials", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    tabFormat: [
        "heading",
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        ["display-text", function() {
            if (player[this.layer].points.gte(0))
                return 'your ' + format(player[this.layer].points) + ' processor units are adding onto your increment amount (1 to 1 without upgrades).'
        }]

    ],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    update(diff) {
        gain = player['con'].points
        player[this.layer].points = player[this.layer].points.add(gain.times(diff).div(5))
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "p: construct a processor", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer("trans", {
    name: "transformer", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<img src='resources/layers/transformer.png' style='width:calc(52.5% - 2px);height:calc(80% - 2px);margin:10%'></img>",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    branches: ['g'],
    color: "#5C5C25",
    requires: new Decimal(75), // Can be a function that takes requirement increases into account
    resource: "transformer units", // Name of prestige currency
    baseResource: "gears turning", // Name of resource prestige is based on
    baseAmount() {return player['g'].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    tabFormat: [
        "heading",
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        ["display-text", function() {
            if (player[this.layer].points.gte(0))
                return 'your ' + format(player[this.layer].points) + ' transformer units are adding onto your gear prestige gain (1 to 1 without upgrades).'
        }]

    ],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "t: construct a transformer", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer("con", {
    name: "constructor", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<img src='resources/layers/constructor.png' style='width:calc(60% - 2px);height:calc(60% - 2px);margin:10%;padding-top:10%;'></img>",
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    branches: ['pro'],
    color: "#2562A8",
    requires: new Decimal(75), // Can be a function that takes requirement increases into account
    resource: "constructor towers", // Name of prestige currency
    baseResource: "processor units", // Name of resource prestige is based on
    baseAmount() {return player['pro'].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    tabFormat: [
        "heading",
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        ["display-text", function() {
            if (player[this.layer].points.gte(0))
                return 'your ' + format(player[this.layer].points) + ' constructor towers are building processor units every 5 seconds (1 to 1 without upgrades).'
        }]

    ],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "c: construct a constructor", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
