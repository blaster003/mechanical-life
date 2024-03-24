addLayer("help", {
    name: "help",
    symbol: "HELP",
    startData() {
        return {
            unlocked: true,
            isHidden: false,
    }},
    row: 0,
    position: 1,
    tooltip: "click me for help!",
    layerShown() {
        return !player['help'].isHidden
    },
    clickables: {
        11: {
            display: "hide this layer, i know what to do",
            canClick() { return true },
            onClick() { 
                player['help'].isHidden = true
            }
        },
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
        ["infobox", 'help'],
        "clickables"
    ],
    infoboxes: {
        help: {
            title: 'what to do',
            body: 'welcome to mechanical life. if you are stuck, start by looking to the right side of your left tab. the top layer tracks your achievements and milestones, and the other layer is what you need to click on to get started. have fun!'
        }
    }
})