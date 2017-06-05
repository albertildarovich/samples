/**
 * Created by Renata on 04.06.15.
 */
var testCases = {
	"TC-1" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>On March&nbsp;22 2015&nbsp;</h1><p><b>at 3 PM</b></p><p><i>go to my friends</i> <br></p></div>",
		"expectations" : [
			{ "event_type" : "N", "event_startDate" : "2015-03-22" ,   "event_startTime" : "15:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1> nbsp;</h1><p><b></b></p><p><i>go to my friends</i> <br></p></div>' }
		],
		"environment" : { "time" : "14:05", "date" : "2015-03-15" , "workTime" : { "Mo" : "09:00-23:00", "Tu" : "09:00-23:00", "We" : "09:00-23:00", "Th" : "09:00-23:00", "Fr" : "09:00-23:00", "Sa" : "-", "Su" : "-" } }
	},

	"TC-2" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><ol><li id=\"c_ke96\"><b>Buy</b> a parrot.&nbsp;</li><li id=\"c_ke96\"><b>Teach </b>the parrot to say <i>Help I have been turned in to a parrot</i></li></ol><ul><li id=\"c_uyec\">on Thursday 10-00</li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-06-04", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><ol><li id="c_ke96"><b>Buy</b> a parrot.&nbsp;</li><li id="c_ke96"><b>Teach </b>the parrot to say <i>Help I have been turned in to a parrot</i></li></ol><ul><li id="c_uyec"></li></ul></div>' },
			{  "event_type" : "N", "event_startDate": "2015-06-04", "event_startTime" : "22:00", "event_duration" : "30", "event_result" : "Buy a parrot. Teach the parrot to say Help I have been turned in to a parrot" }
		],
		"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-3" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>An informal To Do list.&nbsp;</h1><ol><li id=\"c_edlx\"><b>Lists </b>help you <i>organize your work load, stay on track</i>, and <i>complete all tasks</i>.&nbsp;</li><li id=\"c_edlx\"><b>Lists </b>can also help you <i style=\"line-height: 21.25px;\">make the best use of your time</i>.&nbsp;</li><ol><ul><li id=\"c_6frk\">When you are feeling creative do one of the <b>creative tasks</b>, when feeling brain dead do one of the <b>simpler tasks</b>.</li></ul><p style=\"text-align: right;\"><i><b>Sept. 7th, 2015</b>, a quarter to 3 PM</i></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-09-07", "event_startTime" : "14:45", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1>An informal To Do list.&nbsp;</h1><ol><li id="c_edlx"><b>Lists </b>help you <i>organize your work load, stay on track</i>, and <i>complete all tasks</i>.&nbsp;</li><li id="c_edlx"><b>Lists </b>can also help you <i style="line-height: 21.25px;">make the best use of your time</i>.&nbsp;</li><ol><ul><li id="c_6frk">When you are feeling creative do one of the <b>creative tasks</b>, when feeling brain dead do one of the <b>simpler tasks</b>.</li></ul><p style="text-align: right;"><i><b></b>,</i></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-09-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-4" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><ul><li id=\"c_ypey\"><i>The marriage ceremony</i> has been scheduled for the<b> 9th of November 2015</b>.&nbsp;</li><li id=\"c_ypey\"><i>The venue is the Sky Hall </i>in Hoffman’s and all programs will kick off by <span style=\"color:red\"><b>9.30AM</b></span>.&nbsp;</li></ul><p style=\"text-align: center;\">It will be deeply appreciated if you can grace the occasion with your presence.</p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-11-09", "event_startTime" : "09:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><ul><li id="c_ypey"><i>The marriage ceremony</i> has been scheduled for the<b></b>.&nbsp;</li><li id="c_ypey"><i>The venue is the Sky Hall </i>in Hoffman’s and all programs will kick off by <span style="color:red"><b></b></span>.&nbsp;</li></ul><p style="text-align: center;">It will be deeply appreciated if you can grace the occasion with your presence.</p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-11-04" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-5" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>The graduating class of 1988 invites you to our 30 year class reunion!&nbsp;</h1><p><br></p><p style=\"text-align: center;\"><b><i>The 21st June, 2018</i></b> at <i>five-thirty</i> for cocktails, followed by dinner at <i>six-thirty o`clock</i>&nbsp;</p><ul><li id=\"c_pisu\">Little Valley Golf Club Little Valley, Pennsylvania&nbsp;</li><li id=\"c_pisu\">Philadelphia College of Fine Arts<br></li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2018-06-21", "event_startTime" : "17:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1>The graduating class of 1988 invites you to our 30 year class reunion!&nbsp;</h1><p><br></p><p style="text-align: center;"><b><i></i></b> <i></i> for cocktails, followed by dinner at <i>six-thirty o`clock</i>&nbsp;</p><ul><li id="c_pisu">Little Valley Golf Club Little Valley, Pennsylvania&nbsp;</li><li id="c_pisu">Philadelphia College of Fine Arts<br></li></ul></div>' },
			{  "event_type" : "N", "event_startDate": "2018-06-21", "event_startTime" : "05:30", "event_duration" : "30", "event_result" : "The graduating class of 1988 invites you to our 30 year class reunion! for cocktails, followed by dinner at six-thirty o'clock Little Valley Golf Club Little Valley, Pennsylvania Philadelphia College of Fine Arts" },
			{  "event_type" : "N", "event_startDate": "2018-06-21", "event_startTime" : "18:30", "event_duration" : "30", "event_result" : "The graduating class of 1988 invites you to our 30 year class reunion! five-thirty for cocktails, followed by dinner Little Valley Golf Club Little Valley, Pennsylvania Philadelphia College of Fine Arts" },
			{  "event_type" : "N", "event_startDate": "2018-06-21", "event_startTime" : "06:30", "event_duration" : "30", "event_result" : "The graduating class of 1988 invites you to our 30 year class reunion! five-thirty for cocktails, followed by dinner Little Valley Golf Club Little Valley, Pennsylvania Philadelphia College of Fine Arts" }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-6" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p style=\"text-align: right;\"><b><i>the 23rd of February, 2015</i></b> from <i>9.00am – 11.00am</i>&nbsp;</p><ul><li id=\"c_gcmj\"><span style=\"color:red\"><b>Pediatric Symposium</b></span>:&nbsp;</li></ul><p style=\"text-align: center;\">Blood Disorders and the Liver Clinical Research Workshop</p><p></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-02-23", "event_startTime" : "09:00", "event_duration" : "120", "event_result" : '<div id="at_content" contenteditable="true"><p style="text-align: right;"><b><i></i></b> <i></i>&nbsp;</p><ul><li id="c_gcmj"><span style="color:red"><b>Pediatric Symposium</b></span>:&nbsp;</li></ul><p style="text-align: center;">Blood Disorders and the Liver Clinical Research Workshop</p><p></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-7" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p></p><h1><span style=\"color:blue\"><b>The totality</b></span> of <i>3RD April 2015</i> lunar eclipse&nbsp;</h1><p style=\"text-align: justify;\">will start at <b><i>11.30 PM until 1 AM</i></b>, making it the<i> shortest total</i> <i>lunar eclipse</i> of the <b>21st century</b></p><p></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-04-03", "event_startTime" : "23:30", "event_duration" : "90", "event_result" : '<div id="at_content" contenteditable="true"><p></p><h1><span style="color:blue"><b>The totality</b></span> of <i></i> lunar eclipse&nbsp;</h1><p style="text-align: justify;">will start at <b><i></i></b>, making it the<i> shortest total</i> <i>lunar eclipse</i> of the <b>21st century</b></p><p></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-8" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p></p><h1>The 3D Technologies Seminar&nbsp;</h1><p style=\"text-align: left;\">held at the <b>Moscow Crocus Congress Centre</b>e on<i> the 13TH of June</i> will feature lectures by&nbsp;</p><ul><li id=\"c_x4qs\">several key programmers&nbsp;</li><li id=\"c_x4qs\">and&nbsp;designers in the field of 3D modeling,&nbsp;</li></ul><p style=\"text-align: justify;\"><i>with topics including</i>&nbsp;</p><ul class=\"checkbox\"><li id=\"c_tj5f\">trilinear filtering,&nbsp;</li><li id=\"c_mzne\">anti-aliasing&nbsp;</li><li id=\"c_dncq\">and mipmapping.</li></ul><p></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-06-13", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p></p><h1>The 3D Technologies Seminar&nbsp;</h1><p style="text-align: left;">held at the <b>Moscow Crocus Congress Centre</b>e on<i></i> will feature lectures by&nbsp;</p><ul><li id="c_x4qs">several key programmers&nbsp;</li><li id="c_x4qs">and&nbsp;designers in the field of 3D modeling,&nbsp;</li></ul><p style="text-align: justify;"><i>with topics including</i>&nbsp;</p><ul class="checkbox"><li id="c_tj5f">trilinear filtering,&nbsp;</li><li id="c_mzne">anti-aliasing&nbsp;</li><li id="c_dncq">and mipmapping.</li></ul><p></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-06-08" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-9" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p></p><p style=\"text-align: justify;\"><b>Mr. P. I. Ivanov</b>, Master of the m/v Union, <b>thanks </b>the President and Council of the <span style=\"color:red\">Anglo-Russian Friendship Society</span> for their invitation to a Reception&nbsp;</p><ul><li id=\"c_pga3\">on <i>the 17th of October, 2015,</i>&nbsp;</li></ul><p style=\"text-align: justify;\">to mark <i><b>the 20th Anniversary</b></i> of the Society\'s Foundation and is pleased to accept.<br></p><p></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-10-17", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p></p><p style="text-align: justify;"><b>Mr. P. I. Ivanov</b>, Master of the m/v Union, <b>thanks </b>the President and Council of the <span style="color:red">Anglo-Russian Friendship Society</span> for their invitation to a Reception&nbsp;</p><ul><li id="c_pga3">on <i>,</i>&nbsp;</li></ul><p style="text-align: justify;">to mark <i><b>the 20th Anniversary</b></i> of the Society\'s Foundation and is pleased to accept.<br></p><p></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-09-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-10" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p></p><ul class=\"checkbox\"><li id=\"c_bsg5\">Mullis,&nbsp;</li><li id=\"c_0b15\">Fulton&nbsp;</li><li id=\"c_bvak\">and Teller Industries,&nbsp;</li></ul><p style=\"text-align: justify;\">Incorporated Requests the pleasure of your company For an evening of <span style=\"color:red\">dinner and dancing</span> at <b><i>the 10th Annual Awards Gala</i></b>&nbsp;</p><p style=\"text-align: justify;\"><br></p><p style=\"text-align: right;\">On <i>Saturday the 10TH of October, 2015</i> <i>From 7:00 PM until midnight</i> <b>Mayweather Banquet Hall</b> Address City, State&nbsp;</p><ul><li id=\"c_6alp\">RSVP before <i>October 1st</i> to <b>555-432-8756</b> Black tie optional</li></ul><p></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-10-10", "event_startTime" : "19:00", "event_duration" : "300", "event_result" : "<div id=\"at_content\" contenteditable=\"true\"><p></p><ul class=\"checkbox\"><li id=\"c_bsg5\">Mullis,&nbsp;</li><li id=\"c_0b15\">Fulton&nbsp;</li><li id=\"c_bvak\">and Teller Industries,&nbsp;</li></ul><p style=\"text-align: justify;\">Incorporated Requests the pleasure of your company For an evening of <span style=\"color:red\">dinner and dancing</span> at <b><i>the 10th Annual Awards Gala</i></b>&nbsp;</p><p style=\"text-align: justify;\"><br></p><p style=\"text-align: right;\">On <i></i> <i></i> <b>Mayweather Banquet Hall</b> Address City, State&nbsp;</p><ul><li id=\"c_6alp\">RSVP before <i>October 1st</i> to <b>555-432-8756</b> Black tie optional</li></ul><p></p></div>" },
			{  "event_type" : "N", "event_startDate": "2015-10-01", "event_startTime" : "19:00", "event_duration" : "300", "event_result" : "Mullis, Fulton and Teller Industries, Incorporated Requests the pleasure of your company For an evening of dinner and dancing at the 10th Annual Awards Gala On Saturday the 10TH of October, 2015 Mayweather Banquet Hall Address City, State RSVP to 555-432-8756 Black tie optional" }
		],
		"environment" : { "time" : "10:30", "date" : "2015-09-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-11" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><ul><li id=\"c_b8jr\">The Officers&nbsp;</li><li id=\"c_b8jr\">and Directors&nbsp;</li></ul><p>Of <b><i>The Rescue Source Cordially</i></b> invite you to attend&nbsp;</p><ol><li id=\"c_3for\">an Open House&nbsp;</li><li id=\"c_3for\">And Dedication Ceremony&nbsp;</li></ol><p style=\"text-align: right;\">for the new <span style=\"color:blue\"><b><i>Family Intervention Center</i></b></span> Friday, <i>November the 6TH, 2015</i> 4:00 p.m. in the new addition of <b>the East Wing</b> Address City, State</p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-11-06", "event_startTime" : "16:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><ul><li id="c_b8jr">The Officers&nbsp;</li><li id="c_b8jr">and Directors&nbsp;</li></ul><p>Of <b><i>The Rescue Source Cordially</i></b> invite you to attend&nbsp;</p><ol><li id="c_3for">an Open House&nbsp;</li><li id="c_3for">And Dedication Ceremony&nbsp;</li></ol><p style="text-align: right;">for the new <span style="color:blue"><b><i>Family Intervention Center</i></b></span></i> in the new addition of <b>the East Wing</b> Address City, State</p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-10-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-12" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>The law firm of&nbsp;</h1><ul class=\"checkbox\"><li id=\"c_rk9d\">Mullis,&nbsp;</li><li id=\"c_fji1\">Fulton&nbsp;</li><li id=\"c_4p83\">and Teller&nbsp;</li></ul><p style=\"text-align: left;\">cordially invite you to an <span style=\"color:red\"><b>Estate Planning Seminar&nbsp;</b></span></p><ul><li id=\"c_e5gg\">On Wednesday, <i><b>the 12th of August 2015</b></i>, <i>from 10:00 a.m. to 4:00 p.m.</i>&nbsp;</li><li id=\"c_kn7f\">Lunch Served&nbsp;</li><li id=\"c_kn7f\">Question and Answer session <i>from 12:30 to 1:00</i>&nbsp;</li><li id=\"c_il9t\"><b>at 12 Concourse Center Plaza</b> City, State&nbsp;</li></ul><p style=\"text-align: right;\"><i>Open to the Public</i><br></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-08-12", "event_startTime" : "10:00", "event_duration" : "360", "event_result" : '<div id="at_content" contenteditable="true"><h1>The law firm of&nbsp;</h1><ul class="checkbox"><li id="c_rk9d">Mullis,&nbsp;</li><li id="c_fji1">Fulton&nbsp;</li><li id="c_4p83">and Teller&nbsp;</li></ul><p style="text-align: left;">cordially invite you to an <span style="color:red"><b>Estate Planning Seminar&nbsp;</b></span></p><ul><li id="c_e5gg"></b></i>, <i></i>&nbsp;</li><li id="c_kn7f">Lunch Served&nbsp;</li><li id="c_kn7f">Question and Answer session <i>from 12:30 to 1:00</i>&nbsp;</li><li id="c_il9t"><b>at 12 Concourse Center Plaza</b> City, State&nbsp;</li></ul><p style="text-align: right;"><i>Open to the Public</i><br></p></div>' },
			{  "event_type" : "N", "event_startDate": "2015-08-12", "event_startTime" : "12:30", "event_duration" : "30", "event_result" : "The law firm of Mullis, Fulton and Teller cordially invite you to an Estate Planning Seminar On Wednesday, the 12th of August 2015, 10:00 a.m. to 4:00 p.m. Lunch Served Question and Answer session at 12 Concourse Center Plaza City, State Open to the Public" }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-13" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><ol><li id=\"c_wo0x\">Catherine Marie Brown&nbsp;</li><li id=\"c_wo0x\">and Joseph Robert Green&nbsp;</li></ol><p style=\"text-align: justify;\">invite you to share in their joy as they <span style=\"color:red\">exchange marriage vows</span> alongside <b><i>Napa Valley vineyards</i></b>&nbsp;</p><ul><li id=\"c_0hht\">on Saturday, <i>the fifteenth of August 2009</i>&nbsp;</li><li id=\"c_0hht\">at <i>three-thirty</i> in the afternoon&nbsp;</li><li id=\"c_0hht\"><b>The Harvest Inn</b> One Main Street Saint Helena, California<br></li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2009-08-15", "event_startTime" : "15:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><ol><li id="c_wo0x">Catherine Marie Brown&nbsp;</li><li id="c_wo0x">and Joseph Robert Green&nbsp;</li></ol><p style="text-align: justify;">invite you to share in their joy as they <span style="color:red">exchange marriage vows</span> alongside <b><i>Napa Valley vineyards</i></b>&nbsp;</p><ul><li id="c_0hht"></i>&nbsp;</li><li id="c_0hht"> <i>&nbsp;</li><li id="c_0hht"><b>The Harvest Inn</b> One Main Street Saint Helena, California<br></li></ul></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2009-08-01" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-14" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>You are a part of our lives&nbsp;</h1><p style=\"text-align: justify;\">please be a part of our <span style=\"color:green\">celebration of life</span> and our commitment Together with their parents&nbsp;</p><ol><li id=\"c_ijn2\">Frances A Hinckley&nbsp;</li><li id=\"c_ijn2\">and David Henri Bren&nbsp;</li></ol><p style=\"text-align: justify;\">request the pleasure of your company at their marriage&nbsp;</p><ul><li id=\"c_ga09\">Wednesday, the <i><b>twenty third</b></i> of <b>September&nbsp;</b></li><li id=\"c_ga09\"><i>at half past five&nbsp;</i></li><li id=\"c_ga09\"><b>Martha Clara Vineyards Dinner</b>&nbsp;reception to follow</li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-09-23", "event_startTime" : "17:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1>You are a part of our lives&nbsp;</h1><p style="text-align: justify;">please be a part of our <span style="color:green">celebration of life</span> and our commitment Together with their parents&nbsp;</p><ol><li id="c_ijn2">Frances A Hinckley&nbsp;</li><li id="c_ijn2">and David Henri Bren&nbsp;</li></ol><p style="text-align: justify;">request the pleasure of your company at their marriage&nbsp;</p><ul><li id="c_ga09">&nbsp;</b></li><li id="c_ga09"><i> nbsp;</i></li><li id="c_ga09"><b>Martha Clara Vineyards Dinner</b>&nbsp;reception to follow</li></ul></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-08-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-15" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><ul class=\"checkbox\"><li id=\"c_bbnt\">David York&nbsp;</li><li id=\"c_drf0\">&amp; Darnelle Devereaux&nbsp;</li></ul><span style=\"color:red\"><p>request the pleasure of your company at their wedding&nbsp;</span></p><ul><li id=\"c_1pck\">Sunday, the <b>third of May&nbsp;</b></li><li id=\"c_1pck\">at <b>three o'clock </b>&nbsp;</li><li id=\"c_1pck\">in their home <i><b>534 North 33th Street </b></i>&nbsp;Seattle, <b>Washington&nbsp;</b></li></ul><p style=\"text-align: right;\"><i>Reception immediately following</i></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-05-03", "event_startTime" : "03:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><ul class="checkbox"><li id="c_bbnt">David York&nbsp;</li><li id="c_drf0">&amp; Darnelle Devereaux&nbsp;</li></ul><span style="color:red"><p>request the pleasure of your company at their wedding&nbsp;</span></p><ul><li id="c_1pck">&nbsp;</b></li><li id="c_1pck"> <b> </b>&nbsp;</li><li id="c_1pck">in their home <i><b>534 North 33th Street </b></i>&nbsp;Seattle, <b>Washington&nbsp;</b></li></ul><p style="text-align: right;"><i>Reception immediately following</i></p></div>' },
			{  "event_type" : "N", "event_startDate": "2015-05-03", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "David York & Darnelle Devereaux request the pleasure of your company at their wedding  in their home 534 North 33th Street  Seattle, Washington Reception immediately following" }
		],
		"environment" : { "time" : "10:30", "date" : "2015-05-01" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-16" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><ol><li id=\"c_hn1b\">Love fills a moment,&nbsp;</li><li id=\"c_hn1b\">a moment fills a lifetime,&nbsp;</li><li id=\"c_hn1b\">a lifetime begins eternity,&nbsp;</li></ol><p style=\"text-align: center;\">our eternity begins here,&nbsp;at the <b>wedding </b>of&nbsp;</p><p><br></p><h1>Amanda Hannah Rayburn&nbsp;&amp; Brian Alan Duncan&nbsp;</h1><p><br></p><p style=\"text-align: center;\">Please complete our happiness by celebrating our <span style=\"color:red\">wedding weekend&nbsp;</span></p><ul><li id=\"c_snif\">May <b>22th</b>, <b>23th</b> and <b>24th</b> 2015&nbsp;</li><li id=\"c_snif\">Beau Lodge Bow, Alabama&nbsp;</li><li id=\"c_snif\">Ceremony&nbsp;<i>at 4pm Sunday </i><b>the 24th May</b></li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-05-24", "event_startTime" : "16:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><ol><li id="c_hn1b">Love fills a moment,&nbsp;</li><li id="c_hn1b">a moment fills a lifetime,&nbsp;</li><li id="c_hn1b">a lifetime begins eternity,&nbsp;</li></ol><p style="text-align: center;">our eternity begins here,&nbsp;at the <b>wedding </b>of&nbsp;</p><p><br></p><h1>Amanda Hannah Rayburn&nbsp;&amp; Brian Alan Duncan&nbsp;</h1><p><br></p><p style="text-align: center;">Please complete our happiness by celebrating our <span style="color:red">wedding weekend&nbsp;</span></p><ul><li id="c_snif">May <b>22th</b>, <b>23th</b> and <b>24th</b> 2015&nbsp;</li><li id="c_snif">Beau Lodge Bow, Alabama&nbsp;</li><li id="c_snif">Ceremony&nbsp;<i></b></li></ul></div>' },
			{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Love fills a moment, a moment fills a lifetime, a lifetime begins eternity, our eternity begins here, at the wedding of Amanda Hannah Rayburn & Brian Alan Duncan Please complete our happiness by celebrating our wedding weekend, 23th and 24th 2015 Beau Lodge Bow, Alabama Ceremony at 4pm Sunday the 24th May" }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-17" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>Mr. &amp; Mrs. Florentino Tanedo&nbsp;</h1><p style=\"text-align: justify;\">request the honor of your presence at the marriage of&nbsp;</p><ol><li id=\"c_ycrg\">their daughter&nbsp;<b><i>Perla Chavez Taned</i></b>o&nbsp;to&nbsp;</li><li id=\"c_ycrg\"><i><b>Jeffrey Michael Andrews</b></i> son of Mr. &amp; Mrs. Joseph Andrews&nbsp;</li></ol><ul><li id=\"c_util\">Saturday, the <i>eighteenth of July 2015&nbsp;</i></li><li id=\"c_util\">at <i>eleven o'clock</i> in the morning&nbsp;</li><li id=\"c_util\"><b>St. Judes</b> Redmond, Washington</li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-07-18", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1>Mr. &amp; Mrs. Florentino Tanedo&nbsp;</h1><p style="text-align: justify;">request the honor of your presence at the marriage of&nbsp;</p><ol><li id="c_ycrg">their daughter&nbsp;<b><i>Perla Chavez Taned</i></b>o&nbsp;to&nbsp;</li><li id="c_ycrg"><i><b>Jeffrey Michael Andrews</b></i> son of Mr. &amp; Mrs. Joseph Andrews&nbsp;</li></ol><ul><li id="c_util">&nbsp;</i></li><li id="c_util"> <i>&nbsp;</li><li id="c_util"><b>St. Judes</b> Redmond, Washington</li></ul></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-18" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p style=\"text-align: left;\">Because you have shared in our lives with your <b><i>Friendship</i></b> and <b><i>Love</i></b>,&nbsp;</p><p style=\"text-align: left;\"><br></p><h1>We&nbsp;Heather Elizabeth Kennedy and Alvaro Garcia Maritato&nbsp;</h1><p><br></p><p style=\"text-align: center;\">ask you to join us for an <span style=\"color:red\"><i>intimate ceremony</i></span> to celebrate our Love&nbsp;</p><ul><li id=\"c_6h85\">on <i>Sun</i>,&nbsp;</li><li id=\"c_6h85\"><i>the twelfth </i>of April 2015&nbsp;</li><li id=\"c_6h85\">at <i>five o'clock</i> in the afternoon&nbsp;</li><li id=\"c_6h85\">Miami Beach <i>Botanical Garden</i> 2000&nbsp;</li><li id=\"c_6h85\"><i>Convention Center Drive</i> Miami Beach, Florida</li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-04-12", "event_startTime" : "17:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p style="text-align: left;">Because you have shared in our lives with your <b><i>Friendship</i></b> and <b><i>Love</i></b>,&nbsp;</p><p style="text-align: left;"><br></p><h1>We&nbsp;Heather Elizabeth Kennedy and Alvaro Garcia Maritato&nbsp;</h1><p><br></p><p style="text-align: center;">ask you to join us for an <span style="color:red"><i>intimate ceremony</i></span> to celebrate our Love&nbsp;</p><ul><li id="c_6h85">on <i>&nbsp;</li><li id="c_6h85"> <i>&nbsp;</li><li id="c_6h85">Miami Beach <i>Botanical Garden</i> 2000&nbsp;</li><li id="c_6h85"><i>Convention Center Drive</i> Miami Beach, Florida</li></ul></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-19" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>Kerry Jacoby &amp; Gordon Roger Scott&nbsp;</h1><p style=\"text-align: left;\">request the pleasure of your company at our <b><i>wedding </i></b>in <span style=\"color:red\">celebration of life</span> and our commitment&nbsp;</p><ul><li id=\"c_jbbx\">Sunday,&nbsp;</li><li id=\"c_jbbx\"><i>the thirtieth of August</i>&nbsp;</li><li id=\"c_jbbx\"><i>at two o'clock</i> in the evening&nbsp;</li><li id=\"c_jbbx\">Seattle <i><b>Asian Art Museum</b></i>&nbsp;</li><li id=\"c_jbbx\">Seattle, Washington&nbsp;</li></ul><p style=\"text-align: right;\"><i>dinner reception to follow</i></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-08-30", "event_startTime" : "14:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1>Kerry Jacoby &amp; Gordon Roger Scott&nbsp;</h1><p style="text-align: left;">request the pleasure of your company at our <b><i>wedding </i></b>in <span style="color:red">celebration of life</span> and our commitment&nbsp;</p><ul><li id="c_jbbx"></i>&nbsp;</li><li id="c_jbbx"><i> nbsp;</li><li id="c_jbbx">Seattle <i><b>Asian Art Museum</b></i>&nbsp;</li><li id="c_jbbx">Seattle, Washington&nbsp;</li></ul><p style="text-align: right;"><i>dinner reception to follow</i></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-07-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-20" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>Mr. and Mrs. Walter&nbsp;and Andrea Morris and Mr. Robert Allen&nbsp;</h1><p><br></p><p style=\"text-align: center;\">request the honor of your presence at <span style=\"color:blue\">the marriage</span> of their <i><b>daughter</b>&nbsp;</i></p><ul class=\"checkbox\"><li id=\"c_0oc8\">Hanah Leigh to Arron Neville Wilkins son of&nbsp;</li><li id=\"c_fsjf\">Mr. and Mrs. Carl&nbsp;</li><li id=\"c_3vn2\">and Valerie McDaniel and Mr. James Wilkins&nbsp;</li></ul><ul><li id=\"c_z30q\">Thursday,&nbsp;</li><li id=\"c_z30q\"><i>the twentieth of August&nbsp;</i></li><li id=\"c_z30q\">at four o'clock&nbsp;</li><li id=\"c_z30q\"><b>Lakeside Christian Church</b> Redding, California&nbsp;</li></ul><p style=\"text-align: right;\"><i>Reception to follow Fern Hill Masonic Lodge</i></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-08-20", "event_startTime" : "16:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1>Mr. and Mrs. Walter&nbsp;and Andrea Morris and Mr. Robert Allen&nbsp;</h1><p><br></p><p style="text-align: center;">request the honor of your presence at <span style="color:blue">the marriage</span> of their <i><b>daughter</b>&nbsp;</i></p><ul class="checkbox"><li id="c_0oc8">Hanah Leigh to Arron Neville Wilkins son of&nbsp;</li><li id="c_fsjf">Mr. and Mrs. Carl&nbsp;</li><li id="c_3vn2">and Valerie McDaniel and Mr. James Wilkins&nbsp;</li></ul><ul><li id="c_z30q">&nbsp;</i></li><li id="c_z30q"> nbsp;</li><li id="c_z30q"><b>Lakeside Christian Church</b> Redding, California&nbsp;</li></ul><p style="text-align: right;"><i>Reception to follow Fern Hill Masonic Lodge</i></p></div>' },
			{  "event_type" : "N", "event_startDate": "2015-08-20", "event_startTime" : "04:00", "event_duration" : "30", "event_result" : "Mr. and Mrs. Walter and Andrea Morris and Mr. Robert Allen request the honor of your presence at the marriage of their daughter Hanah Leigh to Arron Neville Wilkins son of Mr. and Mrs. Carl and Valerie McDaniel and Mr. James Wilkins Lakeside Christian Church Redding, California Reception to follow Fern Hill Masonic Lodge" }
		],
		"environment" : { "time" : "10:30", "date" : "2015-07-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-21" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>Mr. and Mrs. David George Richardson&nbsp;</h1><p style=\"text-align: justify;\">request the pleasure of your company at the <span style=\"color:pink\">marriage</span> of&nbsp;</p><ol><li id=\"c_p7in\">their&nbsp;<i>daughter <b>Jane Louise</b></i>&nbsp;</li><li id=\"c_p7in\">to <b><i>Mr. Andrew Richard Randolph</i></b> <i>son </i>of <b>Mr. and Mrs. Richard Randolph</b>&nbsp;</li></ol><ul><li id=\"c_fe7z\">on Friday,&nbsp;</li><li id=\"c_fe7z\">the twenty-sixth of June&nbsp;</li><li id=\"c_fe7z\">at half past six o'clock&nbsp;</li><li id=\"c_fe7z\"><b>Westlake Country Club</b> Miami, Florida</li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-06-26", "event_startTime" : "18:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1>Mr. and Mrs. David George Richardson&nbsp;</h1><p style="text-align: justify;">request the pleasure of your company at the <span style="color:pink">marriage</span> of&nbsp;</p><ol><li id="c_p7in">their&nbsp;<i>daughter <b>Jane Louise</b></i>&nbsp;</li><li id="c_p7in">to <b><i>Mr. Andrew Richard Randolph</i></b> <i>son </i>of <b>Mr. and Mrs. Richard Randolph</b>&nbsp;</li></ol><ul><li id="c_fe7z"> nbsp;</li><li id="c_fe7z"> nbsp;</li><li id="c_fe7z"><b>Westlake Country Club</b> Miami, Florida</li></ul></div>' },
			{  "event_type" : "N", "event_startDate": "2015-06-26", "event_startTime" : "06:30", "event_duration" : "30", "event_result" : "Mr. and Mrs. David George Richardson request the pleasure of your company at the marriage of their daughter Jane Louise to Mr. Andrew Richard Randolph son of Mr. and Mrs. Richard Randolph Westlake Country Club Miami, Florida" }
		],
		"environment" : { "time" : "10:30", "date" : "2015-05-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-22" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p style=\"text-align: justify;\">Together with their parents&nbsp;</p><h1>Tracy Marie Smith and Nathaniel James Hofeldt&nbsp;</h1><p style=\"text-align: left;\">request the honour of your presence at their <span style=\"color:purple\"><b><i>marriage</i></b></span></p><ul><li id=\"c_bfn2\"><b>Sunday</b>,</li><li id=\"c_bfn2\">the twenty-first of June&nbsp;</li><li id=\"c_bfn2\"><i>at three thirty o'clock</i> in the evening&nbsp;</li><li id=\"c_bfn2\"><b>Terril United Methodist Church</b>&nbsp;</li><li id=\"c_bfn2\"><i>2954 Hector Avenue</i> Terril, Virginia</li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-06-21", "event_startTime" : "15:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p style="text-align: justify;">Together with their parents&nbsp;</p><h1>Tracy Marie Smith and Nathaniel James Hofeldt&nbsp;</h1><p style="text-align: left;">request the honour of your presence at their <span style="color:purple"><b><i>marriage</i></b></span></p><ul><li id="c_bfn2"><b>&nbsp;</li><li id="c_bfn2"><i> nbsp;</li><li id="c_bfn2"><b>Terril United Methodist Church</b>&nbsp;</li><li id="c_bfn2"><i>2954 Hector Avenue</i> Terril, Virginia</li></ul></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-06-06" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-23" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>Mr. and Mrs. Neil Pospisil&nbsp;</h1><p><br></p><p style=\"text-align: left;\">invite you to share in the joy of <span style=\"color:darkred\">the marriage</span> uniting their <b>daughter</b>&nbsp;</p><p style=\"text-align: left;\"><br></p><p style=\"text-align: center;\"><b><i>Amie Jo to Mr. Ryan Joseph Keenan Tu,&nbsp;</i></b></p><ol><li id=\"c_nmu2\"><i>the second of July 2013</i>&nbsp;</li><li id=\"c_nmu2\">at four thirty p.m.&nbsp;</li><li id=\"c_nmu2\"><i>United Methodist Church</i> Graham, Washington<br></li></ol><p style=\"text-align: justify;\"><br></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2013-07-02", "event_startTime" : "16:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1>Mr. and Mrs. Neil Pospisil&nbsp;</h1><p><br></p><p style="text-align: left;">invite you to share in the joy of <span style="color:darkred">the marriage</span> uniting their <b>daughter</b>&nbsp;</p><p style="text-align: left;"><br></p><p style="text-align: center;"><b><i>Amie Jo to Mr. Ryan Joseph Keenan</i>&nbsp;</li><li id="c_nmu2"> nbsp;</li><li id="c_nmu2"><i>United Methodist Church</i> Graham, Washington<br></li></ol><p style="text-align: justify;"><br></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-24" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><ol><li id=\"c_8sgt\">Mr. and Mrs. Ron McDonald&nbsp;</li><li id=\"c_8sgt\">and Drs. Jeff and Diane Tredwell</li></ol><p>invite you to share in the joy of the <b>marriage </b>uniting their children&nbsp;</p><ul><li id=\"c_qvm4\"><b><i>Brooke Leigh&nbsp;</i></b></li><li id=\"c_qvm4\">and <b><i>Matthew Wade</i></b>&nbsp;</li></ul><ol><li id=\"c_how1\">Wed, the first of July 2015&nbsp;</li><li id=\"c_how1\"><i>half past five</i> in the evening&nbsp;</li><li id=\"c_how1\"><i>Rose Well House</i> Bloomington, Indiana&nbsp;</li></ol><p><b>Reception immediately</b> following ceremony <i>Indiana University Auditorium</i></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-07-01", "event_startTime" : "17:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><ol><li id="c_8sgt">Mr. and Mrs. Ron McDonald&nbsp;</li><li id="c_8sgt">and Drs. Jeff and Diane Tredwell</li></ol><p>invite you to share in the joy of the <b>marriage </b>uniting their children&nbsp;</p><ul><li id="c_qvm4"><b><i>Brooke Leigh&nbsp;</i></b></li><li id="c_qvm4">and <b><i>Matthew Wade</i></b>&nbsp;</li></ul><ol><li id="c_how1">&nbsp;</li><li id="c_how1"><i>&nbsp;</li><li id="c_how1"><i>Rose Well House</i> Bloomington, Indiana&nbsp;</li></ol><p><b>Reception immediately</b> following ceremony <i>Indiana University Auditorium</i></p></div>' },
			{  "event_type" : "N", "event_startDate": "2015-07-01", "event_startTime" : "17:30", "event_duration" : "30", "event_result" : "Mr. and Mrs. Ron McDonald and Drs. Jeff and Diane Tredwell invite you to share in the joy of the marriage uniting their children Brooke Leigh and Matthew Wade, the first of July two thousand thirteen Rose Well House Bloomington, Indiana Reception immediately following ceremony Indiana University Auditorium" }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-25" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>Please join us for&nbsp;</h1><p style=\"text-align: center;\">our annual <b><i>Swanson Family Picnic&nbsp;</i></b></p><ul class=\"checkbox\"><li id=\"c_ppau\">Saturday,&nbsp;</li><li id=\"c_wx98\">the 7th of July, 2018&nbsp;</li><li id=\"c_9sdi\">11:00 a.m. –&nbsp;<i>Sunset Clarkson Park</i>,&nbsp;</li><li id=\"c_aag6\">Pavilion 7 Adirondacks&nbsp;</li></ul><p><span style=\"color:red\">Map enclosed.&nbsp;</span></p><p style=\"text-align: justify;\">Please <b>bring a dish</b> to pass</p><p style=\"text-align: right;\"><em>Hope to see you there</em><br></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2018-07-07", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1>Please join us for&nbsp;</h1><p style="text-align: center;">our annual <b><i>Swanson Family Picnic&nbsp;</i></b></p><ul class="checkbox"><li id="c_ppau">&nbsp;</li><li id="c_9sdi"> –&nbsp;<i>Sunset Clarkson Park</i>,&nbsp;</li><li id="c_aag6">Pavilion 7 Adirondacks&nbsp;</li></ul><p><span style="color:red">Map enclosed.&nbsp;</span></p><p style="text-align: justify;">Please <b>bring a dish</b> to pass</p><p style="text-align: right;"><em>Hope to see you there</em><br></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-26" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1><span style=\"color:green\">Join us for our 10th Annual Family Reunion clam bake!</span>&nbsp;</h1><ul><li id=\"c_w93m\">Saturday,&nbsp;</li><li id=\"c_w93m\">September 12th&nbsp;</li><li id=\"c_w93m\"><i>12:00 p.m. to 8:00 p.m.</i>&nbsp;</li><li id=\"c_w93m\"><b>800 Marine Boulevard</b> Baltimore, Maryland&nbsp;</li></ul><p style=\"text-align: center;\"><b><i>reply card enclosed</i></b><br></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-09-12", "event_startTime" : "12:00", "event_duration" : "480", "event_result" : '<div id="at_content" contenteditable="true"><h1><span style="color:green">Join us for our 10th Annual Family Reunion clam bake!</span>&nbsp;</h1><ul><li id="c_w93m">&nbsp;</li><li id="c_w93m"><i></i>&nbsp;</li><li id="c_w93m"><b>800 Marine Boulevard</b> Baltimore, Maryland&nbsp;</li></ul><p style="text-align: center;"><b><i>reply card enclosed</i></b><br></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-27" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p style=\"text-align: justify;\"><b><i>Please join us for&nbsp;</i></b></p><h1>our 5th Annual Family Reunion&nbsp;</h1><ul><li id=\"c_njyz\">the 31st of July, 2018&nbsp;</li><li id=\"c_njyz\">10:00 a.m.&nbsp;</li></ul><ol><li id=\"c_85k6\">Evangola Beach&nbsp;</li><li id=\"c_85k6\"><b>Pavillion </b>5 Evangola,&nbsp;</li></ol><p style=\"text-align: right;\"><span style=\"color:green\"><i>New York&nbsp;</i></span></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2018-07-31", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p style="text-align: justify;"><b><i>Please join us for&nbsp;</i></b></p><h1>our 5th Annual Family Reunion&nbsp;</h1><ul><li id="c_njyz">&nbsp;</li><li id="c_njyz">&nbsp;</li></ul><ol><li id="c_85k6">Evangola Beach&nbsp;</li><li id="c_85k6"><b>Pavillion </b>5 Evangola,&nbsp;</li></ol><p style="text-align: right;"><span style="color:green"><i>New York&nbsp;</i></span></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-28" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p style=\"text-align: justify;\"><i>You’re invited to attend</i>&nbsp;</p><h1>the 14th annual Hemsley Family Cookout&nbsp;</h1><ul><li id=\"c_01uf\">Saturday,&nbsp;</li><li id=\"c_01uf\">June the 16TH, 2018&nbsp;</li><li id=\"c_01uf\">at 5:00 p.m.&nbsp;</li></ul><p style=\"text-align: left;\"><span style=\"color:green\"><b>1675 Davis Street</b></span> Ducanville, Texas&nbsp;<br></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2018-06-16", "event_startTime" : "17:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p style="text-align: justify;"><i>You’re invited to attend</i>&nbsp;</p><h1>the 14th annual Hemsley Family Cookout&nbsp;</h1><ul><li id="c_01uf">&nbsp;</li><li id="c_01uf"> nbsp;</li></ul><p style="text-align: left;"><span style="color:green"><b>1675 Davis Street</b></span> Ducanville, Texas&nbsp;<br></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-29" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p style=\"text-align: left;\">Organize the clan and pack your bags…&nbsp;for&nbsp;</p><h1>the Hilburn Family Reunion!&nbsp;</h1><ol><li id=\"c_nby9\">Wed,&nbsp;</li><li id=\"c_nby9\">the 19TH August&nbsp;</li></ol><p style=\"text-align: justify;\"><i>Fun and festivities</i> begin <b><i>at 10:00 a.m.</i></b>&nbsp;</p><ul><li id=\"c_9xn4\">Rain or shine&nbsp;</li><li id=\"c_nf4m\"><b>Greenberg State Park</b> Chicago, Illinois&nbsp;</li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-08-19", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p style="text-align: left;">Organize the clan and pack your bags…&nbsp;for&nbsp;</p><h1>the Hilburn Family Reunion!&nbsp;</h1><ol><li id="c_nby9">&nbsp;</li></ol><p style="text-align: justify;"><i>Fun and festivities</i> begin <b><i></i></b>&nbsp;</p><ul><li id="c_9xn4">Rain or shine&nbsp;</li><li id="c_nf4m"><b>Greenberg State Park</b> Chicago, Illinois&nbsp;</li></ul></div>' },
			{  "event_type" : "N", "event_startDate": "2015-08-19", "event_startTime" : "22:00", "event_duration" : "30", "event_result" : "Organize the clan and pack your bags… for the Hilburn Family Reunion! Fun and festivities begin Rain or shine Greenberg State Park Chicago, Illinois " }
		],
		"environment" : { "time" : "10:30", "date" : "2015-07-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-30" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><ol><li id=\"c_98xe\">The boat’s in the <i>water&nbsp;</i></li><li id=\"c_98xe\">the sun’s rising <i>high</i>…</li></ol><p>let’s get <span style=\"color:red\">together</span> before <b>summer sails</b> by!&nbsp;</p><p>Join us for a <b><i>Summer Cruise</i></b> on&nbsp;</p><ul><li id=\"c_svgw\">Friday,&nbsp;</li><li id=\"c_svgw\">10th July&nbsp;</li><li id=\"c_svgw\">at 1:00 p.m.</li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-07-10", "event_startTime" : "13:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><ol><li id="c_98xe">The boat’s in the <i>water&nbsp;</i></li><li id="c_98xe">the sun’s rising <i>high</i>…</li></ol><p>let’s get <span style="color:red">together</span> before <b>summer sails</b> by!&nbsp;</p><p>Join us for a <b><i>Summer Cruise</i></b> on&nbsp;</p><ul><li id="c_svgw">&nbsp;</li><li id="c_svgw"></li></ul></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-06-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-31" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p style=\"text-align: justify;\">Now is the time for a <span style=\"color:blue\"><b>few good fellows</b></span> to join our ranks aboard&nbsp;</p><h1>The HMS Whimsey&nbsp;</h1><p style=\"text-align: center;\"><i>for a sporting good time!</i>&nbsp;</p><ul class=\"checkbox\"><li id=\"c_zoms\">September the 1st&nbsp;</li><li id=\"c_11je\">at noon&nbsp;</li><li id=\"c_fxvt\">Berth #16 – Dock E&nbsp;</li><li id=\"c_vfty\">Island Marina Caption&nbsp;</li></ul><p style=\"text-align: right;\"><i>Hook &amp; His Merry Crew</i></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-09-01", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p style="text-align: justify;">Now is the time for a <span style="color:blue"><b>few good fellows</b></span> to join our ranks aboard&nbsp;</p><h1>The HMS Whimsey&nbsp;</h1><p style="text-align: center;"><i>for a sporting good time!</i>&nbsp;</p><ul class="checkbox"><li id="c_zoms">&nbsp;</li><li id="c_11je"> nbsp;</li><li id="c_fxvt">Berth </li><li id="c_vfty">Island Marina Caption&nbsp;</li></ul><p style="text-align: right;"><i>Hook &amp; His Merry Crew</i></p></div>' }
		],
		"environment" : { "time" : "15:30", "date" : "2015-08-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-32" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p><span style=\"color:red\"><b><i>The captain and his first mate</i></b></span> welcome you aboard&nbsp;</p><h1>the Serenity II&nbsp;</h1><ol><li id=\"c_a9dc\">for cruising the inland waters,&nbsp;</li><li id=\"c_a9dc\">swimming off Point Clear,&nbsp;</li><li id=\"c_a9dc\">and sunset supper.</li></ol><p><i><b>Embarking from</b></i>&nbsp;</p><ul><li id=\"c_r2jb\">Winnetka Yacht Club&nbsp;</li><li id=\"c_r2jb\">Dock “C” Slip No. 27&nbsp;</li><li id=\"c_r2jb\">Wednesday, July 1ST&nbsp;</li><li id=\"c_r2jb\">at 2 P.M.&nbsp;</li></ul><p style=\"text-align: justify;\"><b>Captain Jack and Cathy Wallaby</b>&nbsp;</p><p style=\"text-align: right;\">The favor of a reply is requested <i>by June 22nd</i></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-07-01", "event_startTime" : "14:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p><span style="color:red"><b><i>The captain and his first mate</i></b></span> welcome you aboard&nbsp;</p><h1>the Serenity II&nbsp;</h1><ol><li id="c_a9dc">for cruising the inland waters,&nbsp;</li><li id="c_a9dc">swimming off Point Clear,&nbsp;</li><li id="c_a9dc">and sunset supper.</li></ol><p><i><b>Embarking from</b></i>&nbsp;</p><ul><li id="c_r2jb">Winnetka Yacht Club&nbsp;</li><li id="c_r2jb">Dock “C” Slip No. 27&nbsp;</li><li id="c_r2jb">&nbsp;</li><li id="c_r2jb"> nbsp;</li></ul><p style="text-align: justify;"><b>Captain Jack and Cathy Wallaby</b>&nbsp;</p><p style="text-align: right;">The favor of a reply is requested <i>by June 22nd</i></p></div>' },
			{  "event_type" : "N", "event_startDate": "2015-06-22", "event_startTime" : "14:00", "event_duration" : "30", "event_result" : "The captain and his first mate welcome you aboard the Serenity II for cruising the inland waters, swimming off Point Clear, and sunset supper.Embarking from Winnetka Yacht Club Dock “C” Slip No. 27 Wednesday, July 1ST at 2 P.M. Captain Jack and Cathy Wallaby The favor of a reply is requested" }
		],
		"environment" : { "time" : "10:30", "date" : "2015-05-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-33" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p style=\"text-align: center;\"><span style=\"color:green\"><b><i>Please join us for&nbsp;dinner&nbsp;and dancing&nbsp;</i></b></span></p><p style=\"text-align: justify;\">as we sail around the bay aboard the <b>Mithrandir </b>in celebration of the graduation of</p><h1>&nbsp;James William Mitchell&nbsp;</h1><p style=\"text-align: left;\">from&nbsp;</p><ul><li id=\"c_sk1v\">Duke University&nbsp;</li><li id=\"c_sk1v\">Sat,&nbsp;</li><li id=\"c_sk1v\">the thirty of May 2015&nbsp;</li><li id=\"c_sk1v\">from <i>five </i>until <i>ten</i> o’clock&nbsp;</li><li id=\"c_sk1v\"><i>Longboat Marina</i> 18 Bay Boulevard, Longboat Key<br></li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-05-30", "event_startTime" : "05:00", "event_duration" : "300", "event_result" : '<div id="at_content" contenteditable="true"><p style="text-align: center;"><span style="color:green"><b><i>Please join us for&nbsp;dinner&nbsp;and dancing&nbsp;</i></b></span></p><p style="text-align: justify;">as we sail around the bay aboard the <b>Mithrandir </b>in celebration of the graduation of</p><h1>&nbsp;James William Mitchell&nbsp;</h1><p style="text-align: left;">from&nbsp;</p><ul><li id="c_sk1v">Duke University&nbsp;</li><li id="c_sk1v">&nbsp;</li><li id="c_sk1v"> <i> </i> <i>&nbsp;</li><li id="c_sk1v"><i>Longboat Marina</i> 18 Bay Boulevard, Longboat Key<br></li></ul></div>' },
			{  "event_type" : "N", "event_startDate": "2015-05-30", "event_startTime" : "17:00", "event_duration" : "300", "event_result" : "Please join us for dinner and dancing as we sail around the bay aboard the Mithrandir in celebration of the graduation of James William Mitchell from Duke University Longboat Marina 18 Bay Boulevard, Longboat Key" }
		],
		"environment" : { "time" : "10:30", "date" : "2018-04-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-34" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p style=\"text-align: justify;\">Join us in celebrating the <span style=\"color:red\"><b><i>birthday </i></b></span>of&nbsp;</p><h1>Jim Avery&nbsp;</h1><p style=\"text-align: left;\">aboard the <i>Joseph Conrad</i>&nbsp;</p><ul class=\"checkbox\"><li id=\"c_dvmj\">Wednesday,&nbsp;</li><li id=\"c_0tzc\">the tenth of June&nbsp;</li><li id=\"c_6jpb\">boarding at two-thirty p.m.&nbsp;</li></ul><ol><li id=\"c_6kfl\">at the Windy Port Marina&nbsp;</li><li id=\"c_6kfl\">749 Shoreline Drive, Portland&nbsp;<br></li></ol></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-06-10", "event_startTime" : "14:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p style="text-align: justify;">Join us in celebrating the <span style="color:red"><b><i>birthday </i></b></span>of&nbsp;</p><h1>Jim Avery&nbsp;</h1><p style="text-align: left;">aboard the <i>Joseph Conrad</i>&nbsp;</p><ul class="checkbox"><li id="c_dvmj">&nbsp;</li><li id="c_6jpb">boarding nbsp;</li></ul><ol><li id="c_6kfl">at the Windy Port Marina&nbsp;</li><li id="c_6kfl">749 Shoreline Drive, Portland&nbsp;<br></li></ol></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-35" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p style=\"text-align: justify;\">We’re so sad we have to say&nbsp;</p><h1>Stacey and Troy are moving away!&nbsp;</h1><p><span style=\"color:green\"><b>Send-off Supper</b></span>&nbsp;</p><ul><li id=\"c_3jk4\">Sunday,&nbsp;</li><li id=\"c_3jk4\">the 23RD August&nbsp;</li><li id=\"c_3jk4\">6:30 PM.&nbsp;</li></ul><p><b><i>Laura and Mike Robinson</i></b> 389 Kensington Way Give&nbsp;</p><p style=\"text-align: right;\"><i>with love by their neighbors and friends&nbsp;</i></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-08-23", "event_startTime" : "18:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p style="text-align: justify;">We’re so sad we have to say&nbsp;</p><h1>Stacey and Troy are moving away!&nbsp;</h1><p><span style="color:green"><b>Send-off Supper</b></span>&nbsp;</p><ul><li id="c_3jk4">&nbsp;</li><li id="c_3jk4">.&nbsp;</li></ul><p><b><i>Laura and Mike Robinson</i></b> 389 Kensington Way Give&nbsp;</p><p style="text-align: right;"><i>with love by their neighbors and friends&nbsp;</i></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-36" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>Lights, camera, action!&nbsp;</h1><p style=\"text-align: justify;\"><span style=\"color:green\"><b>Join us</b></span> at the movies to celebrate&nbsp;</p><p style=\"text-align: center;\"><b><i>Sam’s 10th Birthday!&nbsp;</i></b></p><ul><li id=\"c_jqfo\">Friday,&nbsp;</li><li id=\"c_jqfo\">May 22ND&nbsp;</li></ul><ol><li id=\"c_kgdf\">4:30 p.m. - 6:30 p.m.&nbsp;</li><li id=\"c_kgdf\"><i>Rave Motion Pictures</i>&nbsp;</li></ol></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "16:30", "event_duration" : "120", "event_result" : '<div id="at_content" contenteditable="true"><h1>Lights, camera, action!&nbsp;</h1><p style="text-align: justify;"><span style="color:green"><b>Join us</b></span> at the movies to celebrate&nbsp;</p><p style="text-align: center;"><b><i>Sam’s 10th Birthday!&nbsp;</i></b></p><ul><li id="c_jqfo">&nbsp;</li></ul><ol><li id="c_kgdf"> nbsp;</li><li id="c_kgdf"><i>Rave Motion Pictures</i>&nbsp;</li></ol></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-37" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p>You are invited to attend a <span style=\"color:red\">special production</span> of&nbsp;</p><h1>“Hollywood Nights”&nbsp;</h1><p>to honor <b><i>the premier independent filmmakers</i></b> of our times&nbsp;</p><ol><li id=\"c_da5n\">on January 5th 2018&nbsp;</li><li id=\"c_da5n\">one-thirty o’clock in the evening&nbsp;</li><li id=\"c_da5n\">Walk among the stars <i>Parent Production&nbsp;Studio</i>&nbsp;</li><li id=\"c_da5n\">2001 Lexington Avenue&nbsp;</li></ol><p style=\"text-align: center;\"><b>Seating is limited&nbsp;</b></p><p style=\"text-align: right;\">Please&nbsp;reply by <i>15TH January</i></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2018-01-05", "event_startTime" : "13:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p>You are invited to attend a <span style="color:red">special production</span> of&nbsp;</p><h1>“Hollywood Nights”&nbsp;</h1><p>to honor <b><i>the premier independent filmmakers</i></b> of our times&nbsp;</p><ol><li id="c_da5n"> nbsp;</li><li id="c_da5n">&nbsp;</li><li id="c_da5n">Walk among the stars <i>Parent Production&nbsp;Studio</i>&nbsp;</li><li id="c_da5n">2001 Lexington Avenue&nbsp;</li></ol><p style="text-align: center;"><b>Seating is limited&nbsp;</b></p><p style="text-align: right;">Please&nbsp;reply by <i>15TH January</i></p></div>' },
			{  "event_type" : "N", "event_startDate": "2015-01-15", "event_startTime" : "13:30", "event_duration" : "30", "event_result" : "You are invited to attend a special production of “Hollywood Nights” to honor the premier independent filmmakers of our times on January 5th 2018 Walk among the stars Parent Production Studio 2001 Lexington Avenue Seating is limited Please reply" }
		],
		"environment" : { "time" : "00:30", "date" : "2017-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-38" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1>Kara and Curtis MacKenzie&nbsp;</h1><p>invite you to an evening of&nbsp;</p><p><span style=\"color:red\"><b><i>Classics and Conversation</i></b></span>&nbsp;</p><ol><li id=\"c_6o4r\"><i>Wednesday</i>,&nbsp;</li><li id=\"c_6o4r\">the 5th August&nbsp;</li><li id=\"c_6o4r\"><i>at 7:30 p.m.</i>&nbsp;</li></ol><p style=\"text-align: right;\"><b>248 Croquet Circle Bloomfield&nbsp;</b></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-08-05", "event_startTime" : "19:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1>Kara and Curtis MacKenzie&nbsp;</h1><p>invite you to an evening of&nbsp;</p><p><span style="color:red"><b><i>Classics and Conversation</i></b></span>&nbsp;</p><ol><li id="c_6o4r"><i>&nbsp;</li><li id="c_6o4r"><i></i>&nbsp;</li></ol><p style="text-align: right;"><b>248 Croquet Circle Bloomfield&nbsp;</b></p></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-07-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-39" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><h1><span style=\"color:blue\">A 13th Birthday Celebration&nbsp;</span></h1><p style=\"text-align: justify;\"><b><i>Starring:</i></b> <i>Jordin Thompson&nbsp;</i></p><p><i><br></i></p><ul><li id=\"c_k57j\">Saturday,&nbsp;</li><li id=\"c_k57j\">Jun. 6th&nbsp;</li><li id=\"c_k57j\">at 5 &nbsp;</li></ul><p><b>Added features:</b></p><ul class=\"checkbox\"><li id=\"c_3qe9\">Movie,&nbsp;</li><li id=\"c_ubbk\">popcorn,&nbsp;</li><li id=\"c_aww6\">pizza&nbsp;</li><li id=\"c_ykx2\">and coke&nbsp;</li></ul><p>Meet at the <b><i>Quaker Crossing Theater Complex</i></b>.&nbsp;</p><p style=\"text-align: right;\">Pickup time <i>at 7 p.m.</i><br></p></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "05:00", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><h1><span style="color:blue">A 13th Birthday Celebration&nbsp;</span></h1><p style="text-align: justify;"><b><i>Starring:</i></b> <i>Jordin Thompson&nbsp;</i></p><p><i><br></i></p><ul><li id="c_k57j">&nbsp;</li><li id="c_k57j"> &nbsp;</li></ul><p><b>Added features:</b></p><ul class="checkbox"><li id="c_3qe9">Movie,&nbsp;</li><li id="c_ubbk">popcorn,&nbsp;</li><li id="c_aww6">pizza&nbsp;</li><li id="c_ykx2">and coke&nbsp;</li></ul><p>Meet at the <b><i>Quaker Crossing Theater Complex</i></b>.&nbsp;</p><p style="text-align: right;">Pickup time <i>at 7 p.m.</i><br></p></div>' },
			{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "19:00", "event_duration" : "30", "event_result" : "A 13th Birthday Celebration Starring: Jordin Thompson at 5  Added features:Movie, popcorn, pizza and coke Meet at the Quaker Crossing Theater Complex. Pickup time " },
			{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "17:00", "event_duration" : "30", "event_result" : "A 13th Birthday Celebration Starring: Jordin Thompson  Added features:Movie, popcorn, pizza and coke Meet at the Quaker Crossing Theater Complex. Pickup time at 7 p.m. " }

		],
		"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	},

	"TC-40" : {
		"origin" : "<div id=\"at_content\" contenteditable=\"true\"><p style=\"text-align: center;\"><span style=\"color:green\"><b><i>All the world’s a stage and we’re gonna shine!&nbsp;</i></b></span></p><h1>“Collaborative Arts”&nbsp;</h1><p style=\"text-align: justify;\">A <b>gala</b> evening at the theatre proudly presented by&nbsp;</p><p><i>the Vally Forge Community College Foundation&nbsp;</i></p><ul><li id=\"c_xoki\">Tuesday,&nbsp;</li><li id=\"c_xoki\">23rd of June&nbsp;</li><li id=\"c_xoki\">6:30 p.m.&nbsp;</li><li id=\"c_xoki\">Renaissance Theatre&nbsp;</li></ul></div>",
		"expectations" : [
			{  "event_type" : "N", "event_startDate": "2015-06-23", "event_startTime" : "18:30", "event_duration" : "30", "event_result" : '<div id="at_content" contenteditable="true"><p style="text-align: center;"><span style="color:green"><b><i>All the world’s a stage and we’re gonna shine!&nbsp;</i></b></span></p><h1>“Collaborative Arts”&nbsp;</h1><p style="text-align: justify;">A <b>gala</b> evening at the theatre proudly presented by&nbsp;</p><p><i>the Vally Forge Community College Foundation&nbsp;</i></p><ul><li id="c_xoki">&nbsp;</li><li id="c_xoki">&nbsp;</li><li id="c_xoki">Renaissance Theatre&nbsp;</li></ul></div>' }
		],
		"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
	}
};
