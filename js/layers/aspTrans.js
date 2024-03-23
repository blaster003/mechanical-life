addLayer("trans", {
    name: "transformer", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<img src='resources/layers/transformer.png' style='width:calc(52.5% - 2px);height:calc(80% - 2px);margin:10%'></img>",
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
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
            if (player[this.layer].points.gte(1))
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
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "t: construct a transformer", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})