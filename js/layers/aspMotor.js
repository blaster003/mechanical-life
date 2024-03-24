addLayer("motor", {
    name: "motor", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<img src='resources/layers/motor.png' style='width:calc(80% - 2px);height:calc(80% - 2px);margin:10%'></img>",
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        effect() {
            return player['motor'].points.div(4).add(1)
        },
    }},
    branches: ['forge', 'trans'],
    color: "#3051E4",
    requires: new Decimal(4), // Can be a function that takes requirement increases into account
    resource: "motors running", // Name of prestige currency
    baseResource: "transformer units", // Name of resource prestige is based on
    baseAmount() {return player['trans'].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    tabFormat: [
        "heading",
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        ["display-text", function() {
            if (player[this.layer].points.gte(1))
                return 'your ' + format(player[this.layer].points) + ' motors running are boosting your gear point generation by ' + format(player[this.layer].effect()) + ' times.'
        }]

    ],
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "m: construct a motor", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    deactivated: false,
    layerShown(){
        if (hasMilestone('tracker', 0) || player[this.layer].unlocked) {
            player[this.layer].unlocked = true
            return true
        }
        return false
    }
})