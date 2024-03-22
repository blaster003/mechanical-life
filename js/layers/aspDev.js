addLayer("dev", {
    name: "dev", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "x", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
	    points: new Decimal(0),
	    keyInput: "Enter key",
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
            canClick() { return player[this.layer].keyInput == 'second times the charm' },
            onClick() { 
                player['g'].points = player['g'].points.add(1) 
            }
        },
        12: {
            display: "+1 processor",
            canClick() { return player[this.layer].keyInput == 'second times the charm' },
            onClick() { 
                player['pro'].points = player['pro'].points.add(1) 
            }
        },
        13: {
            display: "+1 transformer",
            canClick() { return player[this.layer].keyInput == 'second times the charm' },
            onClick() { 
                player['trans'].points = player['trans'].points.add(1) 
            }
        },
        14: {
            display: "+1 constructor",
            canClick() { return player[this.layer].keyInput == 'second times the charm' },
            onClick() { 
                player['con'].points = player['con'].points.add(1) 
            }
        }
    },
    tabFormat: [
        "heading",
        "main-display",
        "resource-display",
	    ["password-input", 'keyInput'],
        "clickables",
    ],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 'side', // what tha helll
    hotkeys: [
        {key: "i", description: "i: increment", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    prestigeNotify() { return false },
})