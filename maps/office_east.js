/*let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.room.onEnterZone('silent_zone_pop_bottom', () => {
    WA.ui.openPopup("myPopup1", 'Hello world!', [])});

// Close the popup when we leave the zone.
WA.room.onLeaveZone('silent_zone_pop_bottom', () => {
    helloWorldPopup.close();
});*/

WA.chat.sendChatMessage('Hello world', 'Mr Robot1');
WA.chat.sendChatMessage('Hello world', 'Mr Robot2');



var quotes_goethe= [
	'Die beste Bildung findet ein gescheiter Mensch auf Reisen.\n\nJohann Wolfgang von Goethe',
	'Es hört doch nur jeder, was er versteht.\n\nJohann Wolfgang von Goethe',
	'Mit dem Wissen wächst der Zweifel.\n\nJohann Wolfgang von Goethe',
	'Auch aus Steinen, die einem in den Weg gelegt werden, kann man Schönes bauen.\n\nJohann Wolfgang von Goethe',
	'Man reist nicht um anzukommen, sondern um zu reisen.\n\nJohann Wolfgang von Goethe',
	'Wer nicht neugierig ist, erfährt nichts.\n\nJohann Wolfgang von Goethe',
	'Jede Lösung eines Problems ist ein neues Problem.\n\nJohann Wolfgang von Goethe',
	'Das Gleiche lässt uns in Ruhe, aber der Widerspruch ist es, der uns produktiv macht.\n\nJohann Wolfgang von Goethe',	
	]

function display_random_goethe_quote(){
	var quote_index = Math.floor(Math.random() * (quotes_goethe.length));
	WA.chat.sendChatMessage(quotes_goethe[quote_index], "Johann Wolfgang von Goethe");
}


WA.room.onEnterZone('zone_goethe', () => {
    display_random_goethe_quote();
})

WA.room.onEnterZone('zone_goethe_2', () => {
    WA.chat.sendChatMessage("The tiny sign says: Goethe has (never) been here.", 'Map guide');
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
