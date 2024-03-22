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
    row: 'side', // what tha helll
    hotkeys: [
        {key: "i", description: "i: increment", onPress(){
            gain = new Decimal(1)
            gain = gain.add(player['pro'].points)
            player.points = player.points.add(gain) 
        }},
    ],
    layerShown(){return true},
})