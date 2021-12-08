var targetObjectTutoExplanation ='tutoExplanation';
var popUpExplanation = undefined;


WA.onEnterZone('silent_zone_pop_bottom', () => {
	//WA.chat.sendChatMessage("This bridge leads to the silent area!", 'Map guide');
	
	popUpExplanation = WA.openPopup(targetObjectTutoExplanation, 'This bridge leads to the silent area', [
		{
			label: "Close",
			className: "popUpElement",
			callback: (popup) => {
				popup.close();
			}
		}
	])
});

WA.onLeaveZone('silent_zone_pop_bottom', () => {
    if (popUpExplanation !== undefined) popUpExplanation.close();
})




var quotes_goethe= [
	'Die beste Bildung findet ein gescheiter Mensch auf Reisen.',
	'Es hört doch nur jeder, was er versteht.',
	'Mit dem Wissen wächst der Zweifel.',
	'Auch aus Steinen, die einem in den Weg gelegt werden, kann man Schönes bauen.',
	'Man reist nicht um anzukommen, sondern um zu reisen.',
	'Wer nicht neugierig ist, erfährt nichts.',
	'Jede Lösung eines Problems ist ein neues Problem.',
	'Das Gleiche lässt uns in Ruhe, aber der Widerspruch ist es, der uns produktiv macht.',	
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


/*WA.room.onEnterZone('silent_zone_pop_bottom', () => {
    WA.chat.sendChatMessage("This bridge leads to the silent area!", 'Map guide');
	
	
    WA.ui.openPopup('myPopup1', "Hello world!", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
})*/

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
