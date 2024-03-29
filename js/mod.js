let modInfo = {
	name: "mechanical life",
	id: "mechLife",
	author: "blaster003",
	pointsName: "materials",
	modFiles: [
		"layers/help.js",
		"layers/tracker.js", "layers/aspDev.js", "layers/aspInc.js", 
		"layers/aspGear.js", "layers/aspPro.js", 
		"layers/aspForge.js", "layers/aspTrans.js", "layers/aspCon.js", 
		"layers/aspMotor.js",
		"tree.js",
	],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "genesis",
}

let changelog = `<h1>changelog:</h1><br>
	<h3>v0.0</h3><br>
		- creation`

let winText = `congratulations! you have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0) // gear
	gain = gain.add(player["g"].points / 2).mul(player['motor'].effect())
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}