// important variables

msg_silent_area = 'Bridge to silent area'
msg_forest_lodge = 'Forest lodge'
msg_music_room = 'Music room'
msg_throne_room = 'The red table room'
msg_storage = 'Storage'
msg_castle_garden = 'The orchard'
msg_picknick = 'The forest workspace'
msg_coworking = 'Co-working and chill-out areas'
msg_cliff = 'The cliffs'
//msg_orientation = 'Castle red table room: west\nCastle music room: south\nOrchard: north-west\nForest lodge: north-east\nmeeting area: north east\nforest workspace: east\nsilent area:center'
msg_orientation = 'North-west: orchard\nNorth-east: forest lodge, meeting area\nEast: forest workspace\nSouth-east: cliffs\nSouth:Music room castle\nWest: castle red table\nCenter: silent area'




var quotes_goethe= [
	'Die beste Bildung findet ein gescheiter Mensch auf Reisen.\n\nJohann Wolfgang von Goethe',
	'Es hört doch nur jeder, was er versteht.\n\nJohann Wolfgang von Goethe',
	'Mit dem Wissen wächst der Zweifel.\nJohann Wolfgang von Goethe',
	'Auch aus Steinen, die einem in den Weg gelegt werden, kann man Schönes bauen.\n\nJohann Wolfgang von Goethe',
	'Man reist nicht um anzukommen, sondern um zu reisen.\n\nJohann Wolfgang von Goethe',
	'Wer nicht neugierig ist, erfährt nichts.\n\nJohann Wolfgang von Goethe',
	'Jede Lösung eines Problems ist ein neues Problem.\n\nJohann Wolfgang von Goethe',
	'Das Gleiche lässt uns in Ruhe, aber der Widerspruch ist es, der uns produktiv macht.\n\nJohann Wolfgang von Goethe',	
	]


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



function display_random_goethe_quote(target_zone, target_rectangle){
	var popUpExplanation = undefined;

	WA.onEnterZone(target_zone, () => {
		var quote_index = Math.floor(Math.random() * (quotes_goethe.length));
		var popup_text = quotes_goethe[quote_index]
		
		popUpExplanation = WA.openPopup(target_rectangle, popup_text, [
		])
	});

	WA.onLeaveZone(target_zone, () => {
		if (popUpExplanation !== undefined) popUpExplanation.close();
	})
}


// pop-up-generation
generate_popup('silent_zone_pop_bottom', 'tutoExplanation', msg_silent_area)
generate_popup('silent_zone_pop_left', 'rect_silent_left', msg_silent_area)
generate_popup('silent_zone_pop_right', 'rect_silent_right', msg_silent_area)

generate_popup('pop_forest_house_left', 'pop_forest_lodge_left', msg_forest_lodge)
generate_popup('pop_forest_house_right', 'pop_forest_lodge_right', msg_forest_lodge)

generate_popup('pop_music_room', 'rect_music_room', msg_music_room)

generate_popup('pop_throne_room', 'rect_throne_room', msg_throne_room)
generate_popup('pop_throne_room_2', 'rect_throne_room_2', msg_throne_room)

generate_popup('pop_storage', 'rect_storage', msg_storage)

generate_popup('pop_castle_garden_right', 'rect_castle_garden_right', msg_castle_garden)
generate_popup('pop_castle_garden_left', 'rect_castle_garden_left', msg_castle_garden)

generate_popup('zone_picknick_top', 'rect_picknick_top', msg_picknick)
generate_popup('zone_picknick_bottom', 'rect_picknick_bottom', msg_picknick)

generate_popup('pop_cliff_0', 'rect_cliff_0', msg_cliff)
generate_popup('pop_cliff_1', 'rect_cliff_1', msg_cliff)

generate_popup('pop_cowork', 'rect_meeting', msg_coworking)

generate_popup('pop_orientation_0', 'rect_orientation_0', msg_orientation)
generate_popup('pop_orientation_1', 'rect_orientation_1', msg_orientation)
generate_popup('pop_orientation_2', 'rect_orientation_2', msg_orientation)
generate_popup('pop_orientation_3', 'rect_orientation_3', msg_orientation)
generate_popup('pop_orientation_4', 'rect_orientation_4', msg_orientation)
generate_popup('pop_orientation_5', 'rect_orientation_5', msg_orientation)




generate_popup('zone_goethe_2', 'rect_goethe_2', "The tiny sign says: Goethe has (never) been here.")

display_random_goethe_quote('zone_goethe', 'rect_goethe_quotes')




