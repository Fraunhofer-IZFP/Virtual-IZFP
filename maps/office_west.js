// important variables

msg_dining_room = 'Jitsi dining room'
msg_market_farm = 'North: farm\nEast: market'
msg_map_east = 'To the eastern offices'
msg_quiet_area = 'Silent area'
msg_lib = 'Library'
msg_throne = 'Audience room'


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


// pop-up-generation
generate_popup('zone_dining_room', 'rect_dining_room', msg_dining_room)

generate_popup('zone_market_and_farm', 'rect_market_and_farm', msg_market_farm)

generate_popup('zone_map_east_2', 'rect_map_east_2', msg_map_east)
generate_popup('zone_map_east', 'rect_map_east', msg_map_east)

generate_popup('zone_quiet_area', 'rect_quiet_area', msg_quiet_area)

generate_popup('zone_lib', 'rect_lib', msg_lib)

generate_popup('zone_throne', 'rect_throne', msg_throne)
