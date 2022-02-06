const isDebug = false;
var browser = browser || chrome;  // Chrome compatibility
// const debug = isDebug ? console.log.bind(window.console) : () => {};

const MENU_IDS = {
    next:  "next",
    prev:  "previous",
    first: "first",
    last:  "last"
};

function openTab(info, tab) {
    var index = tab.index;
	const menuItemId = info.menuItemId;
	const url = info.linkUrl;
	
	console.log("OTWR: Clicked");
	
	if(menuItemId === MENU_IDS.next) {
		index += 1;
	} else if(menuItemId === MENU_IDS.prev) {
		// index -= 1;
	} else if(menuItemId === MENU_IDS.first) {
		index = 0;
	} else if(menuItemId === MENU_IDS.last) {
		index = null;
	}		
	
	browser.tabs.create({url: url, index: index});
	

}

browser.contextMenus.create({contexts: ["link"], id: MENU_IDS.next,   title: "Next"});
browser.contextMenus.create({contexts: ["link"], id: MENU_IDS.prev,   title: "Previous"});
browser.contextMenus.create({contexts: ["link"], id: MENU_IDS.first,  title: "As First"});
browser.contextMenus.create({contexts: ["link"], id: MENU_IDS.last,   title: "As Last"});
browser.contextMenus.onClicked.addListener(openTab);