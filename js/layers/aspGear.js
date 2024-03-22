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
        mult = new Decimal(player['trans'].points.add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    update(diff) {
        gain = player['for'].points
        player[this.layer].points = player[this.layer].points.add(gain.times(diff).div(5))
    },
    prestigeButtonText() {
        return "reset for +" +`<b>${player[this.layer].points}</b>` + " gears turning<br><br> next at " + format(getNextAt(this.layer)) + " materials"
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
            if (player[this.layer].points.gte(1))
                return 'your ' + format(player[this.layer].points) + ' gears turning are generating ' + player[this.layer].points / 2 + ' materials per second.'
        }]

    ],
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "g: construct a gear", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})