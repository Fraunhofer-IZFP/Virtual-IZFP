// important variables
triggerZoneChuckNorris = 'popup_chuck_norris'
targetRectangleChuckNorris = 'PopupChuckNorris'

chuck_norris_jokes_german = [
	'Chuck Norris isst keinen Honig, er kaut Bienen!',
	'Wie viele Liegestütze schafft Chuck Norris? Alle!'
	]
chuck_norris_jokes_english = [
	'Chuck Norris\' tears can cure cancer. Too bad he never cries!'
	]

msg_dining_room_english = 'Jitsi dining room'
msg_market_farm_english = 'North: farm\nEast: market'
msg_map_east_english = 'To the eastern offices'
msg_quiet_area_english = 'Silent area'
msg_lib_english = 'Library'
msg_throne_english = 'Audience room'


msg_dining_room_german = 'Jitsi-Esszimmer'
msg_market_farm_german = 'Norden: Bauernhof\nOsten: Markt'
msg_map_east_german = 'Zu den östlichen Büros'
msg_quiet_area_german = 'Stille Ecke'
msg_lib_german = 'Bibliothek'
msg_throne_german = 'Thronsaal'


var isEnglish = false

// helper scripts

function generate_popup(target_zone, target_rectangle, popup_text){
	var popUpExplanation = undefined;

	WA.onEnterZone(target_zone, () => {
		//WA.chat.sendChatMessage("This bridge leads to the silent area!", 'Map guide');
		
		popUpExplanation = WA.openPopup(target_rectangle, popup_text, [
			/*{
				label: "Close",
				className: "popUpElement",
				callback: (popup) => {
					popup.close();
				}
			}*/
		])
	});

	WA.onLeaveZone(target_zone, () => {
		if (popUpExplanation !== undefined) popUpExplanation.close();
	})
}

function showPopupEnglishGerman(target_zone, target_rectangle, popup_content_english, popup_content_german){
	var popUpInstance = undefined;
	WA.onEnterZone(target_zone, () => {
		var index = Math.floor(Math.random() * Math.min(popup_content_english.length, popup_content_german.length));
		// get language
		if(isEnglish)
		{
			popUpInstance = WA.openPopup(target_rectangle, popup_content_english[index], 
			[{
				label: "Deutsch",
				className: "primary",
				callback: (popup) => {
					// Close the popup when the "Close" button is pressed.
					popup.close();
					isEnglish = false;
				}
			}]);
		}
		else 
		{
			popUpInstance = WA.openPopup(target_rectangle, popup_content_german[index], 
			[{
				label: "English",
				className: "primary",
				callback: (popup) => {
					// Close the popup when the "Close" button is pressed.
					popup.close();
					isEnglish = true;
				}
			}]);
		}
	});
	WA.onLeaveZone(target_zone, () => {
		if (popUpInstance !== undefined) popUpInstance.close();
	})
}

// multi language popups
showPopupEnglishGerman(triggerZoneChuckNorris, targetRectangleChuckNorris, chuck_norris_jokes_english, chuck_norris_jokes_german)
showPopupEnglishGerman('zone_dining_room', 'rect_dining_room', msg_dining_room_english, msg_dining_room_german)
showPopupEnglishGerman('zone_market_and_farm', 'rect_market_and_farm', msg_market_farm_english, msg_market_farm_german)
showPopupEnglishGerman('zone_map_east_2', 'rect_map_east_2', msg_map_east_english, msg_map_east_german)
showPopupEnglishGerman('zone_map_east', 'rect_map_east', msg_map_east_english, msg_map_east_german)
showPopupEnglishGerman('zone_quiet_area', 'rect_quiet_area', msg_quiet_area_english, msg_quiet_area_german)
showPopupEnglishGerman('zone_lib', 'rect_lib', msg_lib_english, msg_lib_german)
showPopupEnglishGerman('zone_throne', 'rect_throne', msg_throne_english, msg_throne_german)

// pop-up-generation
// generate_popup('zone_dining_room', 'rect_dining_room', msg_dining_room)

// generate_popup('zone_market_and_farm', 'rect_market_and_farm', msg_market_farm)

// generate_popup('zone_map_east_2', 'rect_map_east_2', msg_map_east)
// generate_popup('zone_map_east', 'rect_map_east', msg_map_east)

// generate_popup('zone_quiet_area', 'rect_quiet_area', msg_quiet_area)

// generate_popup('zone_lib', 'rect_lib', msg_lib)

// generate_popup('zone_throne', 'rect_throne', msg_throne)
