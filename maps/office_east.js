/*let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.room.onEnterZone('silent_zone_pop_bottom', () => {
    WA.ui.openPopup("myPopup1", 'Hello world!', [])});

// Close the popup when we leave the zone.
WA.room.onLeaveZone('silent_zone_pop_bottom', () => {
    helloWorldPopup.close();
});*/



var quotes_goethe= [
	'test1',
	'test2'
	]

function display_random_goethe_quote(){
	var quote_index = Math.floor(Math.random() * (quotes_goethe.length));
	WA.chat.sendChatMessage(quotes_goethe[quote_index], 'Goethe');
}


WA.room.onEnterZone('zone_goethe', () => {
    WA.chat.sendChatMessage(display_random_goethe_quote(), 'Map guide');
})


WA.room.onEnterZone('silent_zone_pop_bottom', () => {
    WA.chat.sendChatMessage("This bridge leads to the silent area!", 'Map guide');
})

WA.room.onEnterZone('pop_forest_house', () => {
    WA.chat.sendChatMessage("This is the forest lodge!", 'Map guide');
})

WA.room.onEnterZone('pop_picnic_area', () => {
    WA.chat.sendChatMessage("This is the forest picnic area!", 'Map guide');
})

WA.room.onEnterZone('pop_cowork', () => {
    WA.chat.sendChatMessage("Here coworking / chill-out spaces are located!", 'Map guide');
})

WA.room.onEnterZone('pop_office_west', () => {
    WA.chat.sendChatMessage("This passage leads to the western offices!", 'Map guide');
})

WA.room.onEnterZone('pop_spawn', () => {
    WA.chat.sendChatMessage("This passage leads to the center area!", 'Map guide');
})
