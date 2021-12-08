//let helloWorldPopup;
/*
// Open the popup when we enter a given zone
helloWorldPopup = WA.room.onEnterZone('silent_zone_pop_bottom', () => {
    WA.ui.openPopup("myPopup1", 'Hello world!', [])});

// Close the popup when we leave the zone.
WA.room.onLeaveZone('silent_zone_pop_bottom', () => {
    helloWorldPopup.close();
});*/


// Open the popup when we enter a given zone
/*helloWorldPopup = WA.room.onEnterLayer("silent_zone_pop_bottom").subscribe(() => {
    WA.ui.openPopup("myPopup1", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("silent_zone_pop_bottom").subscribe(() => {
    helloWorldPopup.close();
})*/




var isFirstTimeTuto = false;
var textFirstPopup = 'Hey ! This is how to start a discussion with someone ! You can be 4 max in a bubble.';
var textSecondPopup = 'You can also use the chat to communicate ! ';
var targetObjectTutoBubble ='Tutobubble';
var targetObjectTutoChat ='myPopup1';
var targetObjectTutoExplanation ='myPopup1';
var popUpExplanation = undefined;
function launchTuto (){
    WA.openPopup(targetObjectTutoBubble, textFirstPopup, [
        {
            label: "Next",
            className: "popUpElement",
            callback: (popup) => {
                popup.close();

                WA.openPopup(targetObjectTutoChat, textSecondPopup, [
                    {
                        label: "Open Chat",
                        className: "popUpElement",
                        callback: (popup1) => {
                            WA.sendChatMessage("Hey you can talk here too!", 'WA Guide');
                            popup1.close();
                            WA.openPopup("TutoFinal","You are good to go! Go through the gate to meet the dev team and discover the features !",[
                                {
                                    label: "Got it!",
                                    className : "success",callback:(popup2 => {
                                        popup2.close();
                                    })
                                }
                            ])
                        }
                    }

                ])
            }
        }
    ]);

}


WA.onEnterZone('silent_zone_pop_bottom', () => {
	WA.chat.sendChatMessage("This bridge leads to the silent area!", 'Map guide');
    WA.displayBubble();
    if (!isFirstTimeTuto) {
        isFirstTimeTuto = true;
        launchTuto();
    }
    else {
        popUpExplanation = WA.openPopup(targetObjectTutoExplanation, 'Do you want to review the explanation?', [
            {
                label: "No",
                className: "error",
                callback: (popup) => {
                    popup.close();
                }
            },
            {
                label: "Yes",
                className: "success",
                callback: (popup) => {
                    popup.close();
                    launchTuto();
                }
            }
        ])
    }
});

WA.onLeaveZone('popupZone', () => {
    if (popUpExplanation !== undefined) popUpExplanation.close();
    WA.removeBubble();
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
