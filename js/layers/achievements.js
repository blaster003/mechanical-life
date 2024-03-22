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
    resource: "achievements", // Name of prestige currency
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
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1);
            },
            style: {
                "width": "120%",
                "max-height": "60%"
            }
        }
    },
    tooltip() {
        return player[this.layer].points + " achievements"
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