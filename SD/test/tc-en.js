"use strict";
/**
 * @author Kadyrov Albert <fluffy1snow@gmail.com>
 * @module TestCases_EN
 */

var testCases = {
		"TC-0" : {
			"origin" : "On March 22 2015 at 3 PM go to my friends",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-22" ,   "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "go to my friends"}
			],
			"environment" : { "time" : "14:05", "date" : "2015-03-15" , "workTime" : { "Mo" : "09:00-23:00", "Tu" : "09:00-23:00", "We" : "09:00-23:00", "Th" : "09:00-23:00", "Fr" : "09:00-23:00", "Sa" : "-", "Su" : "-" } }
		},

		"TC-1" : {
			"origin" : "On March, 22 at 3 PM go to Gorky Park",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-22" ,   "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "go to Gorky Park"}
			],
			"environment" : { "time" : "14:05", "date" : "2015-03-15" , "workTime" : { "Mo" : "09:00-23:00", "Tu" : "09:00-23:00", "We" : "09:00-23:00", "Th" : "09:00-23:00", "Fr" : "09:00-23:00", "Sa" : "-", "Su" : "-" } }
		},

		"TC-2" : {
			"origin" : "On 23 of March at 12:00N do homework",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-23" ,   "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "do homework"}
			],
			"environment" : { "time" : "10:05", "date" : "2015-03-22" , "workTime" : { "Mo" : "09:00-16:00", "Tu" : "09:00-16:00", "We" : "09:00-16:00", "Th" : "09:00-16:00", "Fr" : "09:00-16:00", "Sa" : "-", "Su" : "-" } }
		},

		"TC-3" : {
			"origin" : "on the 23 rd of March at 4 AM go to the forest",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-23" ,   "event_startTime" : "04:00", "event_duration" : "30", "event_result" : "go to the forest"}
			],
			"environment" : { "time" : "10:05", "date" : "2015-03-22" , "workTime" : { "Mo" : "09:00-16:00", "Tu" : "09:00-16:00", "We" : "09:00-16:00", "Th" : "09:00-16:00", "Fr" : "09:00-16:00", "Sa" : "-", "Su" : "-" } }
		},

		"TC-4" : {
			"origin" : "on the 23RD of March at 4AM go to the forest",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-23" ,   "event_startTime" : "04:00", "event_duration" : "30", "event_result" : "go to the forest"}
			],
			"environment" : { "time" : "10:05", "date" : "2015-03-22" , "workTime" : { "Mo" : "09:00-16:00", "Tu" : "09:00-16:00", "We" : "09:00-16:00", "Th" : "09:00-16:00", "Fr" : "09:00-16:00", "Sa" : "-", "Su" : "-" } }
		},

		"TC-5" : {
			"origin" : "On the 22nd of March at 5 PM go to my friends",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-22" ,   "event_startTime" : "17:00", "event_duration" : "30", "event_result" : "go to my friends"}
			],
			"environment" : { "time" : "15:00", "date" : "2015-02-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-6" : {
			"origin" : "On 21st of March at 5:40 PM I have a journal club",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-21" ,   "event_startTime" : "17:40", "event_duration" : "30", "event_result" : "I have a journal club"}
			],
			"environment" : { "time" : "14:40", "date" : "2015-03-19" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-7" : {
			"origin" : "23rd of March at 4PM go to the forest",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-23" ,   "event_startTime" : "16:00", "event_duration" : "30", "event_result" : "go to the forest"}
			],
			"environment" : { "time" : "14:40", "date" : "2015-03-22" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-8" : {
			"origin" : "21ST of March at 5:40 PM journal club. Remind me fifteen minutes before",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-21" ,   "event_startTime" : "17:40", "event_duration" : "30", "event_alarms" : "-15", "event_result" : "journal club."}
			],
			"environment" : { "time" : "16:20", "date" : "2015-03-20" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-9" : {
			"origin" : "22 nd of April listen to HammerFall at twelve noon",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-04-22" ,   "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "listen to HammerFall"}
			],
			"environment" : { "time" : "05:50", "date" : "2015-04-21" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-10" : {
			"origin" : "23RD of March at 1 PM have dinner",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-23" ,   "event_startTime" : "13:00", "event_duration" : "30", "event_result" : "have dinner"}
			],
			"environment" : { "time" : "16:20", "date" : "2015-03-20" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-11" : {
			"origin" : "on the 22ND of April listen to HammerFall",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-04-22" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "listen to HammerFall"}
			],
			"environment" : { "time" : "06:20", "date" : "2015-04-20" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-12" : {
			"origin" : "the 23rd of March at 12:00M go to the forest",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-23" ,   "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "go to the forest"}
			],
			"environment" : { "time" : "12:30", "date" : "2015-03-14" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-13" : {
			"origin" : "24th of March at 1 PM go to the doctor",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-24" ,   "event_startTime" : "13:00", "event_duration" : "30", "event_result" : "go to the doctor"}
			],
			"environment" : { "time" : "12:50", "date" : "2015-02-20" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-14" : {
			"origin" : "the 22nd March go for a walk",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-22" ,   "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "go for a walk"}
			],
			"environment" : { "time" : "15:50", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-15" : {
			"origin" : "the 3rd March at 1 PM have dinner",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-03-03" ,   "event_startTime" : "13:00", "event_duration" : "30", "event_result" : "have dinner"}
			],
			"environment" : { "time" : "15:30", "date" : "2015-02-21" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-16" : {
			"origin" : "on the 21st of May session begins",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-05-21" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "session begins"}
			],
			"environment" : { "time" : "05:50", "date" : "2015-04-22" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-17" : {
			"origin" : "On the 2nd of June take exam",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-02" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "take exam"}
			],
			"environment" : { "time" : "15:50", "date" : "2015-06-01" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-18" : {
			"origin" : "On the 4th of July Independence day",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-07-04" ,   "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "Independence day"}
			],
			"environment" : { "time" : "18:40", "date" : "2015-07-01" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-19" : {
			"origin" : "On the 3rd of June take exam",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-03" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "take exam"}
			],
			"environment" : { "time" : "18:40", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-20" : {
			"origin" : "the 21ST of May session begins",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-05-21" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "session begins"}
			],
			"environment" : { "time" : "08:40", "date" : "2015-05-20" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-21" : {
			"origin" : "2nd of June take exam",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-02" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "take exam"}
			],
			"environment" : { "time" : "07:40", "date" : "2015-05-28" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-22" : {
			"origin" : "3rd of June take exam",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-03" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "take exam"}
			],
			"environment" : { "time" : "23:40", "date" : "2015-05-29" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-23" : {
			"origin" : "4th of July Independence day",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-07-04" ,   "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "Independence day"}
			],
			"environment" : { "time" : "23:40", "date" : "2015-05-29" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-24" : {
			"origin" : "1ST of June go for a walk",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-01" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "go for a walk"}
			],
			"environment" : { "time" : "22:20", "date" : "2015-05-29" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-25" : {
			"origin" : "the 2ND of June prepare for exam",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-02" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "prepare for exam"}
			],
			"environment" : { "time" : "22:31", "date" : "2015-05-20" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-26" : {
			"origin" : "3 RD of June eat cookies",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-03" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "eat cookies"}
			],
			"environment" : { "time" : "12:31", "date" : "2015-05-25" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-27" : {
			"origin" : "4TH of June catch frogs",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-04" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "catch frogs"}
			],
			"environment" : { "time" : "16:31", "date" : "2015-05-28" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-28" : {
			"origin" : "on the 4TH of June catch frogs",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-04" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "catch frogs"}
			],
			"environment" : { "time" : "16:41", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-29" : {
			"origin" : "on the 1st of June go for a walk",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-01" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "go for a walk"}
			],
			"environment" : { "time" : "12:31", "date" : "2015-05-29" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-30" : {
			"origin" : "on the 2ND June prepare for exam",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-02" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "prepare for exam"}
			],
			"environment" : { "time" : "14:31", "date" : "2015-05-23" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-31" : {
			"origin" : "on the 3RD June eat cookies",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-03" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "eat cookies"}
			],
			"environment" : { "time" : "16:51", "date" : "2015-05-28" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-32" : {
			"origin" : "1st of June go for a walk",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-01" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "go for a walk"}
			],
			"environment" : { "time" : "03:51", "date" : "2015-05-28" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-33" : {
			"origin" : "2ND of June prepare for exam",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-02" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "prepare for exam"}
			],
			"environment" : { "time" : "10:11", "date" : "2015-06-01" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-34" : {
			"origin" : "3RD of June eat cookies",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-03" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "eat cookies"}
			],
			"environment" : { "time" : "13:10", "date" : "2015-05-20" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-35" : {
			"origin" : "4TH June catch frogs",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2016-06-04" ,   "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "catch frogs"}
			],
			"environment" : { "time" : "14:30", "date" : "2015-06-04" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-36" : {
			"origin" : "on the 1ST of June go for a walk",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-01" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "go for a walk"}
			],
			"environment" : { "time" : "17:30", "date" : "2015-05-27" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-37" : {
			"origin" : "on 2nd June prepare for exam",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-02" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "prepare for exam"}
			],
			"environment" : { "time" : "16:30", "date" : "2015-05-23" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-38" : {
			"origin" : "on 3RD June eat cookies",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-03" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "eat cookies"}
			],
			"environment" : { "time" : "16:10", "date" : "2015-05-29" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-39" : {
			"origin" : "on the 4TH June catch frogs",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-04" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "catch frogs"}
			],
			"environment" : { "time" : "16:10", "date" : "2015-05-29" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-40" : {
			"origin" : "on the 21st May session begins",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-05-21" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "session begins"}
			],
			"environment" : { "time" : "11:20", "date" : "2015-05-20" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-41" : {
			"origin" : "On 2ND June take exam",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-02" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "take exam"}
			],
			"environment" : { "time" : "11:20", "date" : "2015-05-20" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-42" : {
			"origin" : "On July 4TH Independence day",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-07-04" ,   "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "Independence day"}
			],
			"environment" : { "time" : "11:20", "date" : "2015-05-20" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-43" : {
			"origin" : "on 3rd June take exam",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-03" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "take exam"}
			],
			"environment" : { "time" : "11:20", "date" : "2015-05-22" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-44" : {
			"origin" : "on 4 of June catch frogs",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-04" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "catch frogs"}
			],
			"environment" : { "time" : "11:20", "date" : "2015-05-19" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-45" : {
			"origin" : "on 1ST June go for a walk",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-01" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "go for a walk"}
			],
			"environment" : { "time" : "11:20", "date" : "2015-05-23" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-46" : {
			"origin" : "on 2 June prepare for exam",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-02" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "prepare for exam"}
			],
			"environment" : { "time" : "13:25", "date" : "2015-05-27" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-47" : {
			"origin" : "on June 3RD eat cookies",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-03" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "eat cookies"}
			],
			"environment" : { "time" : "15:25", "date" : "2015-05-28" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-48" : {
			"origin" : "on 1st June go for a walk",
			"expectations" : [
				{ "event_type" : "N", "event_startDate" : "2015-06-01" ,   "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "go for a walk"}
			],
			"environment" : { "time" : "19:49", "date" : "2015-05-28" , "workTime" : { "Mo" : "09:00-18:00", "Tu" : "09:00-18:00", "We" : "09:00-18:00", "Th" : "09:00-18:00", "Fr" : "09:00-18:00", "Sa" : "12:00-20:00", "Su" : "12:00-20:00" } }
		},

		"TC-49" : {
			"origin" : "on June 2ND prepare for exam",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "prepare for exam" }
			],
			"environment" : { "time" : "15:34", "date" : "2015-06-01" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-50" : {
			"origin" : "eat cookies on June, 3",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "eat cookies" }
			],
			"environment" : { "time" : "18:34", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-51" : {
			"origin" : "on 4th June catch frogs",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-04", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "catch frogs" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-06-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-52" : {
			"origin" : "Discuss the terms of the contract on May 21 at 10 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-53" : {
			"origin" : "get sales force login from Mike on May 21, 2015 at 10 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "get sales force login from Mike" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-54" : {
			"origin" : "on May 21 2015 at 10 AM, create bell curve chart",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "create bell curve chart" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-55" : {
			"origin" : "design error states on 2015.05.21 at 10.30 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:30", "event_duration" : "30", "event_result" : "design error states" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-06-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-56" : {
			"origin" : "Discuss the terms of the contract  on 2015-05-21 at 10 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-57" : {
			"origin" : "Discuss the terms of the contract  on 2015/05/10 at 10 30 AM", // time is rare
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-10", "event_startTime" : "10:30", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-58" : {
			"origin" : "discuss the terms of the contract  on 05.10.2015 at 11 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-10", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-59" : {
			"origin" : "discuss the terms of the contract  on 05/10/2015 at 10 o`clock",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-10", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " },
				{  "event_type" : "N", "event_startDate": "2015-05-10", "event_startTime" : "22:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-60" : {
			"origin" : "discuss the terms of the contract  on 5/08/2015 at 10:00 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-08", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-61" : {
			"origin" : "discuss the terms of the contract  on 21st May at 10:00 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-62" : {
			"origin" : "Discuss the terms of the contract  on 21st May, 2015 at 10:00 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-63" : {
			"origin" : "on 21st May, 2015 at 10:00 AM discuss the terms of the contract",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-64" : {
			"origin" : "on 21st May 2015 at 10:00 AM discuss the terms of the contract from 05/01/15",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 05/01/15" },
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "on 21st May 2015 discuss the terms of the contract" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-03-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-65" : {
			"origin" : "on 21 May, 2015 at 10:00 AM discuss the terms of the contract from 01/02/2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 01/02/2015" },
				{  "event_type" : "N", "event_startDate": "2015-01-02", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "on 21 May, 2015 discuss the terms of the contract" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-03-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-66" : {
			"origin" : "on Oct. 3rd at 10:00 AM discuss the terms of the contract from 9/10/15",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-03", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 9/10/15" },
				{  "event_type" : "N", "event_startDate": "2015-10-09", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "on Oct. 3rd discuss the terms of the contract" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-05-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-67" : {
			"origin" : "May 21st at 10:00 AM discuss the terms of the contract from 05/01/2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "May 21st discuss the terms of the contract" },
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 05/01/2015" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-03-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-68" : {
			"origin" : "May 21ST at 10:00 AM discuss the terms of the contract from 5/1/15",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 5/1/15" },
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "May 21ST discuss the terms of the contract" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-03-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-69" : {
			"origin" : "May the 21st at 10:00 AM discuss the terms of the contract from 05-01-2015", // 2nd date is rare
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "May the 21st discuss the terms of the contract" },
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 05-01-2015" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-03-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-70" : {
			"origin" : "21ST May at 10:00 AM discuss the terms of the contract from 05-01-15", // 2nd date is rare
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 05-01-15" },
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "21ST May discuss the terms of the contract" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-03-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-71" : {
			"origin" : "May 21st, 2015 at 10:00 AM discuss the terms of the contract from 5-1-15", // 2nd date is rare
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 5-1-15" },
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "May 21st 2015 discuss the terms of the contract" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-03-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-72" : {
			"origin" : "May the 21st, 2015 at 10:00 AM discuss the terms of the contract from 9-10-15", // rare
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 9-10-15" },
				{  "event_type" : "N", "event_startDate": "2015-09-10", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "May the 21st, 2015 discuss the terms of the contract" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-03-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-73" : {
			"origin" : "on May the 21ST, 2015, at 10:00 AM discuss the terms of the contract from 9-10-2015", // rare
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 9-10-2015" },
				{  "event_type" : "N", "event_startDate": "2015-09-10", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "on May the 21ST, 2015, discuss the terms of the contract" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-03-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-74" : {
			"origin" : "on May the 22ND, 2015 discuss the terms of the contract from 5/1/2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 5/1/2015" },
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "on May the 22ND, 2015 discuss the terms of the contract" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-03-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-75" : {
			"origin" : "discuss the terms of the contract from 5.1.2015 on Apr. 1ST",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract on Apr. 1ST" },
				{  "event_type" : "N", "event_startDate": "2015-04-01", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 5.1.2015" }
			],
			"environment" : { "time" : "06:24", "date" : "2015-03-03" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-76" : {
			"origin" : "Discuss the terms of the contract from 05.02.15 after 2 hours",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-21", "event_startTime" : "12:30", "event_duration" : "30", "event_result" : "Discuss the terms of the contract from 05.02.15" },
				{  "event_type" : "N", "event_startDate": "2015-05-02", "event_startTime" : "12:30", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-77" : {
			"origin" : "discuss the terms of the contract from 5.2.15 seven o`clock in the evening",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-02", "event_startTime" : "19:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract" },
				{  "event_type" : "N", "event_startDate": "2015-03-21", "event_startTime" : "19:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 5.2.15" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-78" : {
			"origin" : "discuss the terms of the contract from 5-2-2015 eight o`clock in the morning tomorrow",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-02", "event_startTime" : "08:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract tomorrow" },
				{  "event_type" : "N", "event_startDate": "2015-04-22", "event_startTime" : "08:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 5-2-2015" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-04-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-79" : {
			"origin" : "discuss the terms of the contract from 4/22/15 at four-thirty o`clock in the evening",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-22", "event_startTime" : "16:30", "event_duration" : "30", "event_result" : "discuss the terms of the contract" },
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "16:30", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 4/22/15" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-80" : {
			"origin" : "discuss the terms of the contract from 5.23.2015 at nine o`clock in the morning tomorrow",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-23", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract tomorrow" },
				{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract from 5.23.2015" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-81" : {
			"origin" : "Discuss the terms of the contract  tomorrow",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-82" : {
			"origin" : "discuss the terms of the contract   after two days",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-24", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract  " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-83" : {
			"origin" : "play football after one week",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-28", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "play football" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-84" : {
			"origin" : "Discuss the terms of the contract   after one month",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-21", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract  " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-85" : {
			"origin" : "Discuss the terms of the contract   after two month",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-21", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract  " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-86" : {
			"origin" : "discuss the terms of the contract   after two weeks",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-04", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract  " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-87" : {
			"origin" : "Discuss the terms of the contract   May 20TH 10 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-20", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract  " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-04-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-88" : {
			"origin" : "Discuss the terms of the contract   May the 21st 3 PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract  " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-19" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-89" : {
			"origin" : "Discuss the terms of the contract  on 21 May 3 PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-19" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-90" : {
			"origin" : "discuss the terms of the contract   on the 21ST May 3 PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract  " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-20" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-91" : {
			"origin" : "Discuss the terms of the contract  on the 1ST May 3 PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-04-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-92" : {
			"origin" : "22ND May 3 PM Discuss the terms of the contract",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-93" : {
			"origin" : "22nd May at 3 PM Discuss the terms of the contract",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-94" : {
			"origin" : "on Jun 21 at 3 PM Discuss the terms of the contract",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-21", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-95" : {
			"origin" : "Apr. 21 at 3 PM Discuss the terms of the contract",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-21", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-96" : {
			"origin" : "Apr. 21st at 3PM Discuss the terms of the contract",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-21", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-97" : {
			"origin" : "Apr. 21ST at 3 pm Discuss the terms of the contract",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-21", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-98" : {
			"origin" : "Apr 21ST at 3pm Discuss the terms of the contract",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2016-04-21", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-99" : {
			"origin" : "Apr. 22ND at 11AM Discuss the terms of the contract",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-22", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-100" : {
			"origin" : "Apr. 22nd 11AM discuss the terms of the contract",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-22", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-101" : {
			"origin" : "Apr. 23rd at 11am discuss the terms of the contract",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-23", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-102" : {
			"origin" : "Discuss the terms of the contract  Apr. 23RD at 11 am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-23", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-103" : {
			"origin" : "Discuss the terms of the contract  Apr 23RD 11AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-23", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-104" : {
			"origin" : "Discuss the terms of the contract  Apr 23rd 11:00",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-23", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " },
				{  "event_type" : "N", "event_startDate": "2015-04-23", "event_startTime" : "23:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-105" : {
			"origin" : "discuss the terms of the contract May 21ST, 2015 at 11AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-04-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-106" : {
			"origin" : "Discuss the terms of the contract May 21ST 2015 at 11",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" },
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "23:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-20" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-107" : {
			"origin" : "Discuss the terms of the contract the 21st of May, 2015, at 11AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-20" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-108" : {
			"origin" : "Discuss the terms of the contract the 21ST of May, 2015 at 3",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" },
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "03:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-20" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-109" : {
			"origin" : "Discuss the terms of the contract  May 21st, 2015 at 3",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " },
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "03:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-20" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-110" : {
			"origin" : "discuss the terms of the contract  May the 22nd, 2015 at 3",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " },
				{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "03:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-111" : {
			"origin" : "discuss the terms of the contract  on May the 23rd, 2015 at 3",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-23", "event_startTime" : "03:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " },
				{  "event_type" : "N", "event_startDate": "2015-05-23", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-112" : {
			"origin" : "Discuss the terms of the contract May the 21ST  at midnight",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-113" : {
			"origin" : "Discuss the terms of the contract the 21 June midnight",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-21", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-114" : {
			"origin" : "Discuss the terms of the contract 22nd of June 11:00",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-22", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" },
				{  "event_type" : "N", "event_startDate": "2015-06-22", "event_startTime" : "23:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-115" : {
			"origin" : "discuss the terms of the contract 21 June, noon",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-21", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-116" : {
			"origin" : "Discuss the terms of the contract the 22ND July midnight",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-22", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-117" : {
			"origin" : "go to the beach on Monday",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-08", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "go to the beach" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-118" : {
			"origin" : "go to a club on Tuesday",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-09", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "go to a club" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-119" : {
			"origin" : "go see mama on Wednesday",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "go see mama" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-120" : {
			"origin" : "Buy a parrot. Teach the parrot to say Help I have been turned in to a parrot on Thursday 10-00",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-04", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "Buy a parrot. Teach the parrot to say Help I have been turned in to a parrot" },
				{  "event_type" : "N", "event_startDate": "2015-06-04", "event_startTime" : "22:00", "event_duration" : "30", "event_result" : "Buy a parrot. Teach the parrot to say Help I have been turned in to a parrot" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-121" : {
			"origin" : "Wear shirt that says Life  on Friday at 12",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-05", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "Wear shirt that says Life " },
				{  "event_type" : "N", "event_startDate": "2015-06-05", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Wear shirt that says Life " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-122" : {
			"origin" : "Hire two private investigators. Get them to follow each other. on Saturday",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Hire two private investigators. Get them to follow each other." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-123" : {
			"origin" : "Make vanilla pudding on Sunday",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-07", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Make vanilla pudding" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-124" : {
			"origin" : "Write down  planning time and schedule it next Friday",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-05", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Write down  planning time and schedule it" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-125" : {
			"origin" : "Set goals for week next Sunday",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-07", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Set goals for week" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-126" : {
			"origin" : "Clean bathroom next Saturday",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Clean bathroom" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-127" : {
			"origin" : "Personal development  Mon",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-08", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Personal development " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-128" : {
			"origin" : "Send slides for Steve for review on Tues",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-09", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Send slides for Steve for review" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-129" : {
			"origin" : "Export data into the Excel file on Wed",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Export data into the Excel file" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-130" : {
			"origin" : "Defrag local drive on Thu 12:00n", // time is rare
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-04", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "Defrag local drive" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-131" : {
			"origin" : "Pay internet bills online on Fri at 12:00m", // time is rare
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-05", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Pay internet bills online" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-132" : {
			"origin" : "Buy coffee and energy drinks on Sat",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Buy coffee and energy drinks" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-133" : {
			"origin" : "Try speed dating next Fri",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-05", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Try speed dating" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-134" : {
			"origin" : "Checkout dating websites next Sat at 12:20",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "12:20", "event_duration" : "30", "event_result" : "Checkout dating websites" },
				{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "00:20", "event_duration" : "30", "event_result" : "Checkout dating websites" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-135" : {
			"origin" : "Have lunch with Trent on Mon",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-08", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Have lunch with Trent" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-136" : {
			"origin" : "Complete proposal on Tues",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-09", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Complete proposal" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-137" : {
			"origin" : "Talk to manager on Wed",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Talk to manager" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-138" : {
			"origin" : "Ask Phil about his program on Thu 10:00",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-04", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "Ask Phil about his program" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-139" : {
			"origin" : "Find a heart rate monitor on Fri at 12 o clock", // time is rare
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-05", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "Find a heart rate monitor" },
				{  "event_type" : "N", "event_startDate": "2015-06-05", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Find a heart rate monitor" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-140" : {
			"origin" : "Find a healthy cookbook on Sun",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-07", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Find a healthy cookbook" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-141" : {
			"origin" : "Join the gym next Sun",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-07", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Join the gym" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-142" : {
			"origin" : "Sort the curtains for the living room on Mon, 08 Jun 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-08", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Sort the curtains for the living room" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-143" : {
			"origin" : "Buy a dress for holiday on Tues, 09-Jun-15",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-09", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Buy a dress for holiday" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-144" : {
			"origin" : "Stop subscription to magazine on Wed, 3 Jun 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Stop subscription to magazine" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-145" : {
			"origin" : "Book car in for a service on Sat, 6-Jun-2015 10:00",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "Book car in for a service" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-146" : {
			"origin" : "Pay dinner money to school on Fri, 5 Jun at 12",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-05", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "Pay dinner money to school" },
				{  "event_type" : "N", "event_startDate": "2015-06-05", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Pay dinner money to school" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-147" : {
			"origin" : "Pay balance on Summer holiday on Sat, 06 Jun 15",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Pay balance on Summer holiday" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-148" : {
			"origin" : "Buy birthday present for sister on Sun, June 7",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-07", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Buy birthday present for sister" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-149" : {
			"origin" : "Learn French next Fri 05-Jun-2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-05", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Learn French" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-150" : {
			"origin" : "check out when nephews will come to stay overnight next Sun, 7 Jun 15",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-07", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "check out when nephews will come to stay overnight" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-151" : {
			"origin" : "discuss the terms of the contract on Sat, July the 11th, 12:20",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-11", "event_startTime" : "12:20", "event_duration" : "30", "event_result" : "discuss the terms of the contract" },
				{  "event_type" : "N", "event_startDate": "2015-07-11", "event_startTime" : "00:20", "event_duration" : "30", "event_result" : "discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-152" : {
			"origin" : "Reschedule dental appointment on Jan 8 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-01-08", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Reschedule dental appointment" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-01-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-153" : {
			"origin" : "Pay dinner money to school on Feb 3rd",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-03", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Pay dinner money to school" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-154" : {
			"origin" : "Paint outside of playhouse Mar. 3, 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-03", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Paint outside of playhouse" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-155" : {
			"origin" : "Read book I got for Christmas Apr 4 10:00",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-04", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "Read book I got for Christmas" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-04-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-156" : {
			"origin" : "Design layout for the garden Jul. 7 at 12",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-07", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "Design layout for the garden" },
				{  "event_type" : "N", "event_startDate": "2015-07-07", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Design layout for the garden" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-157" : {
			"origin" : "Discuss the terms of the contract Aug 16, 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-16", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-158" : {
			"origin" : "Buy cake ingredients for Saturday September the 7th",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-09-07", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Buy cake ingredients for Saturday" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-159" : {
			"origin" : "Organize office space Oct 10th, 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-10", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Organize office space" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-160" : {
			"origin" : "Send cards to people with birthdays this week Nov 11th",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-11-11", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Send cards to people with birthdays this week" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-11-05" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-161" : {
			"origin" : "Cancel milk for Friday, Dec. 11th at 12:20",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-12-11", "event_startTime" : "12:20", "event_duration" : "30", "event_result" : "Cancel milk" },
				{  "event_type" : "N", "event_startDate": "2015-12-11", "event_startTime" : "00:20", "event_duration" : "30", "event_result" : "Cancel milk" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-162" : {
			"origin" : "send animation to Stan Jan 7th, remind me at 12:00",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-01-07", "event_startTime" : "12:00", "event_duration" : "30", "event_alarms" : "0", "event_result" : "send animation to Stan" },
				{  "event_type" : "N", "event_startDate": "2015-01-07", "event_startTime" : "00:00", "event_duration" : "30", "event_alarms" : "0", "event_result" : "send animation to Stan" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-01-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-163" : {
			"origin" : "order printer ink Feb 9TH at noon",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-09", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "order printer ink" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-164" : {
			"origin" : "get laundry on Mar 3th, 2015 2pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-03", "event_startTime" : "14:00", "event_duration" : "30", "event_result" : "get laundry" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-165" : {
			"origin" : "Wash car in 1pm Apr. 4TH",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-04", "event_startTime" : "13:00", "event_duration" : "30", "event_result" : "Wash car" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-04-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-166" : {
			"origin" : "Pay bills July 7th at 12am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-07", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Pay bills" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-167" : {
			"origin" : "Discuss the terms of the contract at 16:44 on Aug. 16, 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-16", "event_startTime" : "16:44", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-168" : {
			"origin" : "Discuss the terms of the contract September the 7TH at midnight",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-09-07", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-169" : {
			"origin" : "Fix problem with blog after tomorrow",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-04", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Fix problem with blog" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-170" : {
			"origin" : "take an oil painting class two days after",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-04", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "take an oil painting class" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-171" : {
			"origin" : "visit uncle  after 5 days at 12:20",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-08", "event_startTime" : "12:20", "event_duration" : "30", "event_result" : "visit uncle " },
				{  "event_type" : "N", "event_startDate": "2015-06-08", "event_startTime" : "00:20", "event_duration" : "30", "event_result" : "visit uncle " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-172" : {
			"origin" : "complete lab report, January the 10TH five minutes past six",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-01-10", "event_startTime" : "06:05", "event_duration" : "30", "event_result" : "complete lab report" },
				{  "event_type" : "N", "event_startDate": "2015-01-10", "event_startTime" : "18:05", "event_duration" : "30", "event_result" : "complete lab report" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-01-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-173" : {
			"origin" : "Call Joe to congratulate him on his engagement on Feb. 9, 2015 ten minutes past 3",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-09", "event_startTime" : "15:10", "event_duration" : "30", "event_result" : "Call Joe to congratulate him on his engagement" },
				{  "event_type" : "N", "event_startDate": "2015-02-09", "event_startTime" : "03:10", "event_duration" : "30", "event_result" : "Call Joe to congratulate him on his engagement" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-01-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-174" : {
			"origin" : "read a chapter from Think and Grow Rich on March 3 2015 a quarter past two",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-03", "event_startTime" : "14:15", "event_duration" : "30", "event_result" : "read a chapter from Think and Grow Rich" },
				{  "event_type" : "N", "event_startDate": "2015-03-03", "event_startTime" : "02:15", "event_duration" : "30", "event_result" : "read a chapter from Think and Grow Rich" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-01-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-175" : {
			"origin" : "hold a conference call with my team twenty minutes past 10 14TH Apr",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-14", "event_startTime" : "10:20", "event_duration" : "30", "event_result" : "hold a conference call with my team" },
				{  "event_type" : "N", "event_startDate": "2015-04-14", "event_startTime" : "22:20", "event_duration" : "30", "event_result" : "hold a conference call with my team" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-01-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-176" : {
			"origin" : "cook dinner at twenty-five minutes past 11 on July 1st",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-01", "event_startTime" : "11:25", "event_duration" : "30", "event_result" : "cook dinner" },
				{  "event_type" : "N", "event_startDate": "2015-07-01", "event_startTime" : "23:35", "event_duration" : "30", "event_result" : "cook dinner" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-177" : {
			"origin" : "present a potential new deal to private lender half past 12",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "12:30", "event_duration" : "30", "event_result" : "present a potential new deal to private lender" },
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "00:30", "event_duration" : "30", "event_result" : "present a potential new deal to private lender" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-178" : {
			"origin" : "respond to all questions in emails, the 1st of September a quarter past 3",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2016-09-01", "event_startTime" : "15:15", "event_duration" : "30", "event_result" : "respond to all questions in emails" },
				{  "event_type" : "N", "event_startDate": "2016-09-01", "event_startTime" : "03:15", "event_duration" : "30", "event_result" : "respond to all questions in emails" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-09-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-179" : {
			"origin" : "buy toothpaste ten minutes past four in the evening",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "16:10", "event_duration" : "30", "event_result" : "buy toothpaste" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-180" : {
			"origin" : "visit potential property with my life coaching student five minutes past two p.m.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "14:05", "event_duration" : "30", "event_result" : "visit potential property with my life coaching student" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-181" : {
			"origin" : "donate to a special cause in my hometown twenty five minutes past five pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "17:25", "event_duration" : "30", "event_result" : "donate to a special cause in my hometown" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-182" : {
			"origin" : "Discuss plans with my manager Jan 1st five minutes to six",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-01-01", "event_startTime" : "17:55", "event_duration" : "30", "event_result" : "Discuss plans with my manager" },
				{  "event_type" : "N", "event_startDate": "2015-01-01", "event_startTime" : "05:55", "event_duration" : "30", "event_result" : "Discuss plans with my manager" }
			],
			"environment" : { "time" : "10:30", "date" : "2014-12-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-183" : {
			"origin" : "call my attorney back on Feb. 19TH, 2015 ten minutes to 3",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-19", "event_startTime" : "14:50", "event_duration" : "30", "event_result" : "call my attorney back" },
				{  "event_type" : "N", "event_startDate": "2015-02-19", "event_startTime" : "02:50", "event_duration" : "30", "event_result" : "call my attorney back" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-01-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-184" : {
			"origin" : "help my daughter with her homework on March 3, 2015 a quarter to two P.M.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-03", "event_startTime" : "13:45", "event_duration" : "30", "event_result" : "help my daughter with her homework" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-01-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-185" : {
			"origin" : "wish my wife a happy birthday twenty minutes to 10, April the 1st",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-01", "event_startTime" : "09:40", "event_duration" : "30", "event_result" : "wish my wife a happy birthday" },
				{  "event_type" : "N", "event_startDate": "2015-04-01", "event_startTime" : "21:40", "event_duration" : "30", "event_result" : "wish my wife a happy birthday" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-01-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-186" : {
			"origin" : "science experiment at twenty-five minutes to 11 on 17TH of July",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-17", "event_startTime" : "10:35", "event_duration" : "30", "event_result" : "science experiment" },
				{  "event_type" : "N", "event_startDate": "2015-07-17", "event_startTime" : "22:35", "event_duration" : "30", "event_result" : "science experiment" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-187" : {
			"origin" : "Check U of Whatever's website (whatever.edu) for fall Italian class offerings. 12 o'clock",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "Check U of Whatever's website (whatever.edu) for fall Italian class offerings." },
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Check U of Whatever's website (whatever.edu) for fall Italian class offerings." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-188" : {
			"origin" : "An informal To Do list. Lists help you organize your work load, stay on track, and complete all tasks. Lists can also help you make the best use of your time. When you are feeling creative do one of the creative tasks, when feeling brain dead do one of the simpler tasks. Sept. 7th, 2015, a quarter to 3 PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-09-07", "event_startTime" : "14:45", "event_duration" : "30", "event_result" : "An informal To Do list. Lists help you organize your work load, stay on track, and complete all tasks. Lists can also help you make the best use of your time. When you are feeling creative do one of the creative tasks, when feeling brain dead do one of the simpler tasks." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-09-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-189" : {
			"origin" : "Draft a list of five website upgrades at ten minutes to four",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "15:50", "event_duration" : "30", "event_result" : "Draft a list of five website upgrades" },
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "03:50", "event_duration" : "30", "event_result" : "Draft a list of five website upgrades" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-190" : {
			"origin" : "Measure the table dimensions. Call San Diego Glass at 555-6789 with dimensions at five minutes to two AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-05", "event_startTime" : "01:55", "event_duration" : "30", "event_result" : "Measure the table dimensions. Call San Diego Glass at 555-6789 with dimensions" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-04" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-191" : {
			"origin" : "Email Jayne and ask what dentist she goes to at twenty-five minutes to five",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-07", "event_startTime" : "16:35", "event_duration" : "30", "event_result" : "Email Jayne and ask what dentist she goes to" },
				{  "event_type" : "N", "event_startDate": "2015-06-07", "event_startTime" : "04:35", "event_duration" : "30", "event_result" : "Email Jayne and ask what dentist she goes to" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-07" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-192" : {
			"origin" : "I am very excited to invite you all to my wedding ceremony on June 8th, 2015 which will take place at Kingston Church at 11 AM. I am marrying my long-term boyfriend Egbert Eliot from L.A.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-08", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "I am very excited to invite you all to my wedding ceremony which will take place at Kingston Church. I am marrying my long-term boyfriend Egbert Eliot from L.A." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-04-04" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-193" : {
			"origin" : "The marriage ceremony has been scheduled for the 9th of November 2015. The venue is the Sky Hall in Hoffman’s and all programs will kick off by 9.30AM. It will be deeply appreciated if you can grace the occasion with your presence.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-11-09", "event_startTime" : "09:30", "event_duration" : "30", "event_result" : "The marriage ceremony has been scheduled. The venue is the Sky Hall in Hoffman’s and all programs will kick off. It will be deeply appreciated if you can grace the occasion with your presence." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-11-04" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-194" : {
			"origin" : "I am writing you this letter to officially invite you all to the wedding of our daughter Elaine. The wedding to her long term boyfriend Ralph, who all of you already know, will take place at the Methodist church in Madison on 16th October 2015 at 11 am.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-16", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "I am writing you this letter to officially invite you all to the wedding of our daughter Elaine. The wedding to her long term boyfriend Ralph, who all of you already know, will take place at the Methodist church in Madison." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-10-04" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-195" : {
			"origin" : "I am turning twenty three this coming Friday. I have arranged a small party on Sunday at the Black and White restaurant that is close to your place at 5:00 PM. I hope for your presence on the occasion.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-10", "event_startTime" : "17:00", "event_duration" : "30", "event_result" : "I am turning twenty three this. I have arranged a small party on Sunday at the Black and White restaurant that is close to your place. I hope for your presence on the occasion." },
				{  "event_type" : "N", "event_startDate": "2015-07-12", "event_startTime" : "17:00", "event_duration" : "30", "event_result" : "I am turning twenty three this Friday. I have arranged a small party at the Black and White restaurant that is close to your place. I hope for your presence on the occasion." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-07-08" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-196" : {
			"origin" : "I will be turning a year older on the 30th of November. Concerning the birthday party, it will be held at our house. All programs will be starting by 9:00 AM, and the dress code is blue and red although any formal costume too will be okay.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-11-30", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "I will be turning a year older. Concerning the birthday party, it will be held at our house. All programs will be starting, and the dress code is blue and red although any formal costume too will be okay." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-11-08" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-197" : {
			"origin" : "I would like to invite you to join me for a dinner party which I have arranged on my birthday on June the 7th, 2015 at Hotel Green Vale, Los Angeles. All our college friends are invited. Since we all are working and are busy during office hours, I have scheduled it in the evening, at around 7 PM. I have enclosed a birthday party invitation for venue details.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-07", "event_startTime" : "19:00", "event_duration" : "30", "event_result" : "I would like to invite you to join me for a dinner party which I have arranged on my birthday at Hotel Green Vale, Los Angeles. All our college friends are invited. Since we all are working and are busy during office hours, I have scheduled it in the evening. I have enclosed a birthday party invitation for venue details." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-11-08" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-198" : {
			"origin" : "The 3D Technologies Seminar held at the Moscow Crocus Congress Centre on the 13TH of June will feature lectures by several key programmers and designers in the field of 3D modeling, with topics including trilinear filtering, anti-aliasing and mipmapping.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-13", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "The 3D Technologies Seminar held at the Moscow Crocus Congress Centre will feature lectures by several key programmers and designers in the field of 3D modeling, with topics including trilinear filtering, anti-aliasing and mipmapping." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-08" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-199" : {
			"origin" : "It is our great pleasure to inform you that our new product line is ready for your inspection. We believe that you will be delighted with a surprise when you see some of our latest innovations in the conception and design, and we invite you to visit April the 1st, 2015 our showroom (56, Tolstogo Street, Moscow, Russia), where for your convenience, we will organize a demonstration.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-01", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "It is our great pleasure to inform you that our new product line is ready for your inspection. We believe that you will be delighted with a surprise when you see some of our latest innovations in the conception and design, and we invite you to visit our showroom (56, Tolstogo Street, Moscow, Russia), where for your convenience, we will organize a demonstration." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-200" : {
			"origin" : "Mr. P. I. Ivanov, Master of the m/v Union, thanks the President and Council of the Anglo-Russian Friendship Society for their invitation to a Reception on the 17th of October, 2015, to mark the 20th Anniversary of the Society's Foundation and is pleased to accept.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-17", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Mr. P. I. Ivanov, Master of the m/v Union, thanks the President and Council of the Anglo-Russian Friendship Society for their invitation to a Reception, to mark the 20th Anniversary of the Society's Foundation and is pleased to accept." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-09-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

//        "TC-201" : {
//            "origin" : "The World Conference is scheduled to take place from March 16th – 18th, 2015 in ... (the venue, the city and the country) under the auspices of ... Foundation.",
//            "expectations" : [
//                {  "event_type" : "N", "event_startDate": "2015-03-16", "event_startTime" : "09:00", "event_duration" : "2880", "event_result" : "The World Conference is scheduled to take place in ... (the venue, the city and the country) under the auspices of ... Foundation." }
//            ],
//            "environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
//        },

		"TC-202" : {
			"origin" : "Mullis, Fulton and Teller Industries, Incorporated Requests the pleasure of your company For an evening of dinner and dancing at the 10th Annual Awards Gala On Saturday the 10TH of October, 2015 From 7:00 PM until midnight Mayweather Banquet Hall Address City, State RSVP before October 1st to 555-432-8756 Black tie optional",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-10", "event_startTime" : "19:00", "event_duration" : "300", "event_result" : "Mullis, Fulton and Teller Industries, Incorporated Requests the pleasure of your company For an evening of dinner and dancing at the 10th Annual Awards Gala Mayweather Banquet Hall Address City, State RSVP before October 1st to 555-432-8756 Black tie optional" },
				{  "event_type" : "N", "event_startDate": "2015-10-01", "event_startTime" : "19:00", "event_duration" : "300", "event_result" : "Mullis, Fulton and Teller Industries, Incorporated Requests the pleasure of your company For an evening of dinner and dancing at the 10th Annual Awards Gala On Saturday the 10TH of October, 2015 Mayweather Banquet Hall Address City, State RSVP to 555-432-8756 Black tie optional" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-09-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-203" : {
			"origin" : "Mullis, Fulton and Teller is proud to announce their 40th anniversary. You are cordially invited to attend a celebration on Saturday, October the 10th, 2015 Huntington Beach Showroom Address City, State Cocktails from 5:30 PM to 7:00 PM  Dinner served at 7:30 PM  Cocktail attire Please RSVP number of attendees to 555-9687",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-10", "event_startTime" : "17:30", "event_duration" : "90", "event_result" : "Mullis, Fulton and Teller is proud to announce their 40th anniversary. You are cordially invited to attend a celebration Huntington Beach Showroom Address City, State Cocktails  Dinner served at 7:30 PM  Cocktail attire Please RSVP number of attendees to 555-9687" },
				{  "event_type" : "N", "event_startDate": "2015-10-10", "event_startTime" : "19:30", "event_duration" : "30", "event_result" : "Mullis, Fulton and Teller is proud to announce their 40th anniversary. You are cordially invited to attend a celebration Huntington Beach Showroom Address City, State Cocktails 5:30 PM to 7:00 PM  Cocktail attire Please RSVP number of attendees to 555-9687" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-204" : {
			"origin" : "The Officers and Directors Of The Rescue Source Cordially invite you to attend an Open House And Dedication Ceremony for the new Family Intervention Center Friday, November the 6TH, 2015 4:00 p.m. in the new addition of the East Wing Address City, State",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-11-06", "event_startTime" : "16:00", "event_duration" : "30", "event_result" : "The Officers and Directors Of The Rescue Source Cordially invite you to attend an Open House And Dedication Ceremony for the new Family Intervention Center in the new addition of the East Wing Address City, State" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-10-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-205" : {
			"origin" : "The law firm of Mullis, Fulton and Teller cordially invite you to an Estate Planning Seminar On Wednesday, the 12th of August 2015, from 10:00 a.m. to 4:00 p.m. Lunch Served Question and Answer session from 12:30 to 1:00 at 12 Concourse Center Plaza City, State Open to the Public",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-12", "event_startTime" : "10:00", "event_duration" : "360", "event_result" : "The law firm of Mullis, Fulton and Teller cordially invite you to an Estate Planning Seminar, Lunch Served Question and Answer session from 12:30 to 1:00 at 12 Concourse Center Plaza City, State Open to the Public" },
				{  "event_type" : "N", "event_startDate": "2015-08-12", "event_startTime" : "12:30", "event_duration" : "30", "event_result" : "The law firm of Mullis, Fulton and Teller cordially invite you to an Estate Planning Seminar On Wednesday, the 12th of August 2015, 10:00 a.m. to 4:00 p.m. Lunch Served Question and Answer session at 12 Concourse Center Plaza City, State Open to the Public" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-206" : {
			"origin" : "Catherine Marie Brown and Joseph Robert Green invite you to share in their joy as they exchange marriage vows alongside Napa Valley vineyards on Saturday, the fifteenth of August 2009 at three-thirty in the afternoon The Harvest Inn One Main Street Saint Helena, California",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2009-08-15", "event_startTime" : "15:30", "event_duration" : "30", "event_result" : "Catherine Marie Brown and Joseph Robert Green invite you to share in their joy as they exchange marriage vows alongside Napa Valley vineyards The Harvest Inn One Main Street Saint Helena, California" }
			],
			"environment" : { "time" : "10:30", "date" : "2009-08-01" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-207" : {
			"origin" : "You are a part of our lives please be a part of our celebration of life and our commitment Together with their parents Frances A Hinckley and David Henri Bren request the pleasure of your company at their marriage Wednesday, the twenty third of September at half past five Martha Clara Vineyards Dinner reception to follow",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-09-23", "event_startTime" : "17:30", "event_duration" : "30", "event_result" : "You are a part of our lives please be a part of our celebration of life and our commitment Together with their parents Frances A Hinckley and David Henri Bren request the pleasure of your company at their marriage Martha Clara Vineyards Dinner reception to follow" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-08-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-208" : {
			"origin" : "David York & Darnelle Devereaux request the pleasure of your company at their wedding Sunday, the third of May at three o'clock  in their home 534 North 33th Street  Seattle, Washington Reception immediately following",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-03", "event_startTime" : "03:00", "event_duration" : "30", "event_result" : "David York & Darnelle Devereaux request the pleasure of your company at their wedding  in their home 534 North 33th Street  Seattle, Washington Reception immediately following" },
				{  "event_type" : "N", "event_startDate": "2015-05-03", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "David York & Darnelle Devereaux request the pleasure of your company at their wedding  in their home 534 North 33th Street  Seattle, Washington Reception immediately following" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-01" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-209" : {
			"origin" : "Love fills a moment, a moment fills a lifetime, a lifetime begins eternity, our eternity begins here, at the wedding of Amanda Hannah Rayburn & Brian Alan Duncan Please complete our happiness by celebrating our wedding weekend May 22th, 23th and 24th 2015 Beau Lodge Bow, Alabama Ceremony at 4pm Sunday the 24th May",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-24", "event_startTime" : "16:00", "event_duration" : "30", "event_result" : "Love fills a moment, a moment fills a lifetime, a lifetime begins eternity, our eternity begins here, at the wedding of Amanda Hannah Rayburn & Brian Alan Duncan Please complete our happiness by celebrating our wedding weekend May 22th, 23th and 24th 2015 Beau Lodge Bow, Alabama Ceremony" },
				{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Love fills a moment, a moment fills a lifetime, a lifetime begins eternity, our eternity begins here, at the wedding of Amanda Hannah Rayburn & Brian Alan Duncan Please complete our happiness by celebrating our wedding weekend, 23th and 24th 2015 Beau Lodge Bow, Alabama Ceremony at 4pm Sunday the 24th May" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-210" : {
			"origin" : "Mr. & Mrs. Florentino Tanedo request the honor of your presence at the marriage of their daughter Perla Chavez Tanedo to Jeffrey Michael Andrews son of Mr. & Mrs. Joseph Andrews Saturday, the eighteenth of July 2015 at eleven o'clock in the morning St. Judes Redmond, Washington",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-18", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "Mr. & Mrs. Florentino Tanedo request the honor of your presence at the marriage of their daughter Perla Chavez Tanedo to Jeffrey Michael Andrews son of Mr. & Mrs. Joseph Andrews St. Judes Redmond, Washington" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-211" : {
			"origin" : "Because you have shared in our lives with your Friendship and Love, We Heather Elizabeth Kennedy and Alvaro Garcia Maritato ask you to join us for an intimate ceremony to celebrate our Love on Sunday, the twelfth of April 2015 at five o'clock in the afternoon Miami Beach Botanical Garden 2000 Convention Center Drive Miami Beach, Florida",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-12", "event_startTime" : "17:00", "event_duration" : "30", "event_result" : "Because you have shared in our lives with your Friendship and Love, We Heather Elizabeth Kennedy and Alvaro Garcia Maritato ask you to join us for an intimate ceremony to celebrate our Love Miami Beach Botanical Garden 2000 Convention Center Drive Miami Beach, Florida" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-212" : {
			"origin" : "Kerry Jacoby & Gordon Roger Scott request the pleasure of your company at our wedding in celebration of life and our commitment Sunday, the thirtieth of August at two o'clock in the evening Seattle Asian Art Museum Seattle, Washington dinner reception to follow",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-30", "event_startTime" : "14:00", "event_duration" : "30", "event_result" : "Kerry Jacoby & Gordon Roger Scott request the pleasure of your company at our wedding in celebration of life and our commitment Seattle Asian Art Museum Seattle, Washington dinner reception to follow" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-07-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-213" : {
			"origin" : "Mr. and Mrs. Walter and Andrea Morris and Mr. Robert Allen request the honor of your presence at the marriage of their daughter Hanah Leigh to Arron Neville Wilkins son of Mr. and Mrs. Carl and Valerie McDaniel and Mr. James Wilkins Thursday, the twentieth of August at four o'clock Lakeside Christian Church Redding, California Reception to follow Fern Hill Masonic Lodge",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-20", "event_startTime" : "16:00", "event_duration" : "30", "event_result" : "Mr. and Mrs. Walter and Andrea Morris and Mr. Robert Allen request the honor of your presence at the marriage of their daughter Hanah Leigh to Arron Neville Wilkins son of Mr. and Mrs. Carl and Valerie McDaniel and Mr. James Wilkins Lakeside Christian Church Redding, California Reception to follow Fern Hill Masonic Lodge" },
				{  "event_type" : "N", "event_startDate": "2015-08-20", "event_startTime" : "04:00", "event_duration" : "30", "event_result" : "Mr. and Mrs. Walter and Andrea Morris and Mr. Robert Allen request the honor of your presence at the marriage of their daughter Hanah Leigh to Arron Neville Wilkins son of Mr. and Mrs. Carl and Valerie McDaniel and Mr. James Wilkins Lakeside Christian Church Redding, California Reception to follow Fern Hill Masonic Lodge" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-07-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-214" : {
			"origin" : "Mr. and Mrs. David George Richardson request the pleasure of your company at the marriage of their daughter Jane Louise to Mr. Andrew Richard Randolph son of Mr. and Mrs. Richard Randolph on Friday, the twenty-sixth of June at half past six o'clock Westlake Country Club Miami, Florida",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-26", "event_startTime" : "18:30", "event_duration" : "30", "event_result" : "Mr. and Mrs. David George Richardson request the pleasure of your company at the marriage of their daughter Jane Louise to Mr. Andrew Richard Randolph son of Mr. and Mrs. Richard Randolph Westlake Country Club Miami, Florida" },
				{  "event_type" : "N", "event_startDate": "2015-06-26", "event_startTime" : "06:30", "event_duration" : "30", "event_result" : "Mr. and Mrs. David George Richardson request the pleasure of your company at the marriage of their daughter Jane Louise to Mr. Andrew Richard Randolph son of Mr. and Mrs. Richard Randolph Westlake Country Club Miami, Florida" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-215" : {
			"origin" : "Together with their parents Tracy Marie Smith and Nathaniel James Hofeldt request the honour of your presence at their marriage Sunday, the twenty-first of June at three thirty o'clock in the evening Terril United Methodist Church 2954 Hector Avenue Terril, Virginia",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-21", "event_startTime" : "15:30", "event_duration" : "30", "event_result" : "Together with their parents Tracy Marie Smith and Nathaniel James Hofeldt request the honour of your presence at their marriage Terril United Methodist Church 2954 Hector Avenue Terril, Virginia" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-06" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-216" : {
			"origin" : "Mr. and Mrs. Neil Pospisil invite you to share in the joy of the marriage uniting their daughter Amie Jo to Mr. Ryan Joseph Keenan Tu, the second of July 2013 at four thirty p.m. United Methodist Church Graham, Washington",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2013-07-02", "event_startTime" : "16:30", "event_duration" : "30", "event_result" : "Mr. and Mrs. Neil Pospisil invite you to share in the joy of the marriage uniting their daughter Amie Jo to Mr. Ryan Joseph Keenan United Methodist Church Graham, Washington" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-217" : {
			"origin" : "Mr. and Mrs. Ron McDonald and Drs. Jeff and Diane Tredwell invite you to share in the joy of the marriage uniting their children Brooke Leigh and Matthew Wade Wed, the first of July 2015 half past five in the evening Rose Well House Bloomington, Indiana Reception immediately following ceremony Indiana University Auditorium",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-01", "event_startTime" : "17:30", "event_duration" : "30", "event_result" : "Mr. and Mrs. Ron McDonald and Drs. Jeff and Diane Tredwell invite you to share in the joy of the marriage uniting their children Brooke Leigh and Matthew Wade Rose Well House Bloomington, Indiana Reception immediately following ceremony Indiana University Auditorium" },
				{  "event_type" : "N", "event_startDate": "2015-07-01", "event_startTime" : "17:30", "event_duration" : "30", "event_result" : "Mr. and Mrs. Ron McDonald and Drs. Jeff and Diane Tredwell invite you to share in the joy of the marriage uniting their children Brooke Leigh and Matthew Wade, the first of July two thousand thirteen Rose Well House Bloomington, Indiana Reception immediately following ceremony Indiana University Auditorium" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-218" : {
			"origin" : "Please join us for our annual Swanson Family Picnic Saturday, the 7th of July, 2018 11:00 a.m. – Sunset Clarkson Park, Pavilion 7 Adirondacks Map enclosed. Please bring a dish to pass Hope to see you there",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2018-07-07", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "Please join us for our annual Swanson Family Picnic – Sunset Clarkson Park, Pavilion 7 Adirondacks Map enclosed. Please bring a dish to pass Hope to see you there" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-219" : {
			"origin" : "Join us for our 10th Annual Family Reunion clam bake! Saturday, September 12th 12:00 p.m. to 8:00 p.m. 800 Marine Boulevard Baltimore, Maryland reply card enclosed",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-09-12", "event_startTime" : "12:00", "event_duration" : "480", "event_result" : "Join us for our 10th Annual Family Reunion clam bake! 800 Marine Boulevard Baltimore, Maryland reply card enclosed" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-220" : {
			"origin" : "Please join us for our 5th Annual Family Reunion the 31st of July, 2018 10:00 a.m. Evangola Beach Pavillion 5 Evangola, New York ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2018-07-31", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "Please join us for our 5th Annual Family Reunion Evangola Beach Pavillion 5 Evangola, New York " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-221" : {
			"origin" : "You’re invited to attend the 14th annual Hemsley Family Cookout Saturday, June the 16TH, 2018 at 5:00 p.m. 1675 Davis Street Ducanville, Texas ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2018-06-16", "event_startTime" : "17:00", "event_duration" : "30", "event_result" : "You’re invited to attend the 14th annual Hemsley Family Cookout 1675 Davis Street Ducanville, Texas " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-222" : {
			"origin" : "Organize the clan and pack your bags… for the Hilburn Family Reunion! Wed, the 19TH August Fun and festivities begin at 10:00 a.m. Rain or shine Greenberg State Park Chicago, Illinois ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-19", "event_startTime" : "10:00", "event_duration" : "30", "event_result" : "Organize the clan and pack your bags… for the Hilburn Family Reunion! Fun and festivities begin Rain or shine Greenberg State Park Chicago, Illinois " },
				{  "event_type" : "N", "event_startDate": "2015-08-19", "event_startTime" : "22:00", "event_duration" : "30", "event_result" : "Organize the clan and pack your bags… for the Hilburn Family Reunion! Fun and festivities begin Rain or shine Greenberg State Park Chicago, Illinois " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-07-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

//        "TC-223" : {
//            "origin" : "Bring your skis and snowshoes for the annual Johnson Winter Wonderland Reunion Sunday, January 3rd - Tuesday, January 5th Itinerary as follows:Friday: 6-9 p.m. - Dinner and Slideshow Saturday:5:30 a.m. - Breakfast 6-11 a.m. - Ski competition 12:00 p.m. - Lunch 3:00 p.m. – Fun & More Games Sunday: 8:00 a.m. - Breakfast & Departure Cost per person & hotel information enclosed",
//            "expectations" : [
//                {  "event_type" : "N", "event_startDate": "2016-01-03", "event_startTime" : "09:00", "event_duration" : "3480", "event_result" : "Bring your skis and snowshoes for the annual Johnson Winter Wonderland Reunion Sunday - Tuesday, Itinerary as follows:Friday: 6-9 p.m. - Dinner and Slideshow Saturday:5:30 a.m. - Breakfast 6-11 a.m. - Ski competition 12:00 p.m. - Lunch 3:00 p.m. – Fun & More Games Sunday: 8:00 a.m. - Breakfast & Departure Cost per person & hotel information enclosed" }
//            ],
//            "environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
//        },

		"TC-224" : {
			"origin" : "The boat’s in the water the sun’s rising high…let’s get together before summer sails by! Join us for a Summer Cruise on Friday, 10th July at 1:00 p.m.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-10", "event_startTime" : "13:00", "event_duration" : "30", "event_result" : "The boat’s in the water the sun’s rising high…let’s get together before summer sails by! Join us for a Summer Cruise" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-225" : {
			"origin" : "Now is the time for a few good fellows to join our ranks aboard The HMS Whimsey for a sporting good time! September the 1st at noon Berth #16 – Dock E Island Marina Caption Hook & His Merry Crew",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-09-01", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "Now is the time for a few good fellows to join our ranks aboard The HMS Whimsey for a sporting good time! Berth #16 – Dock E Island Marina Caption Hook & His Merry Crew" }
			],
			"environment" : { "time" : "15:30", "date" : "2015-08-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-226" : {
			"origin" : "We love Paris in the springtime we love Paris in the fall so, since time nor finances will permit a real visit this year, we’re gonna pretend and set-up an Evening in Paris aboard The Island Harbor Boat on Monday, June twenty second seven-thirty at The Waterfront Marina ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-22", "event_startTime" : "07:30", "event_duration" : "30", "event_result" : "We love Paris in the springtime we love Paris in the fall so, since time nor finances will permit a real visit this year, we’re gonna pretend and set-up an Evening in Paris aboard The Island Harbor Boat at The Waterfront Marina " },
				{  "event_type" : "N", "event_startDate": "2015-06-22", "event_startTime" : "19:30", "event_duration" : "30", "event_result" : "We love Paris in the springtime we love Paris in the fall so, since time nor finances will permit a real visit this year, we’re gonna pretend and set-up an Evening in Paris aboard The Island Harbor Boat at The Waterfront Marina " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-227" : {
			"origin" : "The captain and his first mate welcome you aboard the Serenity II for cruising the inland waters, swimming off Point Clear, and sunset supper.Embarking from Winnetka Yacht Club Dock “C” Slip No. 27 Wednesday, July 1ST at 2 P.M. Captain Jack and Cathy Wallaby The favor of a reply is requested by June 22nd",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-01", "event_startTime" : "14:00", "event_duration" : "30", "event_result" : "The captain and his first mate welcome you aboard the Serenity II for cruising the inland waters, swimming off Point Clear, and sunset supper.Embarking from Winnetka Yacht Club Dock “C” Slip No. 27 Captain Jack and Cathy Wallaby The favor of a reply is requested by June 22nd" },
				{  "event_type" : "N", "event_startDate": "2015-06-22", "event_startTime" : "14:00", "event_duration" : "30", "event_result" : "The captain and his first mate welcome you aboard the Serenity II for cruising the inland waters, swimming off Point Clear, and sunset supper.Embarking from Winnetka Yacht Club Dock “C” Slip No. 27 Wednesday, July 1ST at 2 P.M. Captain Jack and Cathy Wallaby The favor of a reply is requested" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-228" : {
			"origin" : "Please join us for dinner and dancing as we sail around the bay aboard the Mithrandir in celebration of the graduation of James William Mitchell from Duke University Sat, the thirty of May 2015 from five until ten o’clock Longboat Marina 18 Bay Boulevard, Longboat Key",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-30", "event_startTime" : "05:00", "event_duration" : "300", "event_result" : "Please join us for dinner and dancing as we sail around the bay aboard the Mithrandir in celebration of the graduation of James William Mitchell from Duke University Longboat Marina 18 Bay Boulevard, Longboat Key" },
				{  "event_type" : "N", "event_startDate": "2015-05-30", "event_startTime" : "17:00", "event_duration" : "300", "event_result" : "Please join us for dinner and dancing as we sail around the bay aboard the Mithrandir in celebration of the graduation of James William Mitchell from Duke University Longboat Marina 18 Bay Boulevard, Longboat Key" }
			],
			"environment" : { "time" : "10:30", "date" : "2018-04-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-229" : {
			"origin" : "Join us in celebrating the birthday of Jim Avery aboard the Joseph Conrad Wednesday, the tenth of June boarding at two-thirty p.m. at the Windy Port Marina 749 Shoreline Drive, Portland ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-10", "event_startTime" : "14:30", "event_duration" : "30", "event_result" : "Join us in celebrating the birthday of Jim Avery aboard the Joseph Conrad boarding at the Windy Port Marina 749 Shoreline Drive, Portland " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-230" : {
			"origin" : "We’re so sad we have to say Stacey and Troy are moving away! Send-off Supper Sunday, the 23RD August 6:30 PM. Laura and Mike Robinson 389 Kensington Way Give with love by their neighbors and friends ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-23", "event_startTime" : "18:30", "event_duration" : "30", "event_result" : "We’re so sad we have to say Stacey and Troy are moving away! Send-off Supper. Laura and Mike Robinson 389 Kensington Way Give with love by their neighbors and friends " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-231" : {
			"origin" : "Lights, camera, action! Join us at the movies to celebrate Sam’s 10th Birthday! Friday, May 22ND 4:30 p.m. - 6:30 p.m. Rave Motion Pictures ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "16:30", "event_duration" : "120", "event_result" : "Lights, camera, action! Join us at the movies to celebrate Sam’s 10th Birthday! Rave Motion Pictures " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-232" : {
			"origin" : "You are invited to attend a special production of “Hollywood Nights” to honor the premier independent filmmakers of our times on January 5th 2018 one-thirty o’clock in the evening Walk among the stars Parent Production Studio 2001 Lexington Avenue Seating is limited Please reply by 15TH January",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2018-01-05", "event_startTime" : "13:30", "event_duration" : "30", "event_result" : "You are invited to attend a special production of “Hollywood Nights” to honor the premier independent filmmakers of our times Walk among the stars Parent Production Studio 2001 Lexington Avenue Seating is limited Please reply by 15TH January" },
				{  "event_type" : "N", "event_startDate": "2015-01-15", "event_startTime" : "13:30", "event_duration" : "30", "event_result" : "You are invited to attend a special production of “Hollywood Nights” to honor the premier independent filmmakers of our times on January 5th 2018 Walk among the stars Parent Production Studio 2001 Lexington Avenue Seating is limited Please reply" }
			],
			"environment" : { "time" : "00:30", "date" : "2017-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-233" : {
			"origin" : "Kara and Curtis MacKenzie invite you to an evening of Classics and Conversation Wednesday, the 5th August at 7:30 p.m. 248 Croquet Circle Bloomfield ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-05", "event_startTime" : "19:30", "event_duration" : "30", "event_result" : "Kara and Curtis MacKenzie invite you to an evening of Classics and Conversation 248 Croquet Circle Bloomfield " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-07-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-234" : {
			"origin" : "A 13th Birthday Celebration Starring: Jordin Thompson Saturday, Jun. 6th at 5  Added features:Movie, popcorn, pizza and coke Meet at the Quaker Crossing Theater Complex. Pickup time at 7 p.m. ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "19:00", "event_duration" : "30", "event_result" : "A 13th Birthday Celebration Starring: Jordin Thompson at 5  Added features:Movie, popcorn, pizza and coke Meet at the Quaker Crossing Theater Complex. Pickup time " },
				{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "17:00", "event_duration" : "30", "event_result" : "A 13th Birthday Celebration Starring: Jordin Thompson  Added features:Movie, popcorn, pizza and coke Meet at the Quaker Crossing Theater Complex. Pickup time at 7 p.m. " },
				{  "event_type" : "N", "event_startDate": "2015-06-06", "event_startTime" : "05:00", "event_duration" : "30", "event_result" : "A 13th Birthday Celebration Starring: Jordin Thompson  Added features:Movie, popcorn, pizza and coke Meet at the Quaker Crossing Theater Complex. Pickup time at 7 p.m. " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-235" : {
			"origin" : "You are cordially invited to attend the “Angels” party for Foothills Repertory Theater’s production of “Oklahoma” Thursday, November the 22nd, 2018 Cocktails at 6:30 p.m. Production 7:30 – 9:45 p.m. Dinner & Dancing to follow The Bayon Theatre Scottsdale ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2018-11-22", "event_startTime" : "19:30", "event_duration" : "135", "event_result" : "You are cordially invited to attend the “Angels” party for Foothills Repertory Theater’s production of “Oklahoma” Cocktails at 6:30 p.m. Production Dinner & Dancing to follow The Bayon Theatre Scottsdale " },
				{  "event_type" : "N", "event_startDate": "2018-11-22", "event_startTime" : "18:30", "event_duration" : "30", "event_result" : "You are cordially invited to attend the “Angels” party for Foothills Repertory Theater’s production of “Oklahoma” Cocktails Production 7:30 – 9:45 p.m. Dinner & Dancing to follow The Bayon Theatre Scottsdale " }
			],
			"environment" : { "time" : "10:30", "date" : "2017-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-236" : {
			"origin" : "All the world’s a stage and we’re gonna shine! “Collaborative Arts” A gala evening at the theatre proudly presented by the Vally Forge Community College Foundation Tuesday, 23rd of June 6:30 p.m. Renaissance Theatre ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-23", "event_startTime" : "18:30", "event_duration" : "30", "event_result" : "All the world’s a stage and we’re gonna shine! “Collaborative Arts” A gala evening at the theatre proudly presented by the Vally Forge Community College Foundation Renaissance Theatre " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-237" : {
			"origin" : "From Champagne to Port Chianti to Merlot We'll be tasting the wine and enjoying the show! Please join us for the 83rd annual Grapevine Wine Tasting Thursday, April 23rd 6:00 p.m. - 10:00 p.m. Grapevine Plaza Del Tour ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-23", "event_startTime" : "18:00", "event_duration" : "240", "event_result" : "From Champagne to Port Chianti to Merlot We'll be tasting the wine and enjoying the show! Please join us for the 83rd annual Grapevine Wine Tasting Grapevine Plaza Del Tour " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-238" : {
			"origin" : "Please join us to savor all the new delights Bruce Cockran discovered in Tuscany on Friday, August seventh at five thirty o'clock. We shall bask in the golden warmth of the Autumn sun excite all our senses with gastronomic delights and share treasured time with treasured friends ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-07", "event_startTime" : "17:30", "event_duration" : "30", "event_result" : "Please join us to savor all the new delights Bruce Cockran discovered in Tuscany. We shall bask in the golden warmth of the Autumn sun excite all our senses with gastronomic delights and share treasured time with treasured friends " },
				{  "event_type" : "N", "event_startDate": "2015-08-07", "event_startTime" : "05:30", "event_duration" : "30", "event_result" : "Please join us to savor all the new delights Bruce Cockran discovered in Tuscany. We shall bask in the golden warmth of the Autumn sun excite all our senses with gastronomic delights and share treasured time with treasured friends " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-07-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-239" : {
			"origin" : "Michelle and Aaron Bloy cordially invite you to attend their annual Wine Tasting Event Monday, the second of July 2018 seven thirty in the evening 3221 West 32nd Street Warm Springs, Virginia ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2018-07-02", "event_startTime" : "19:30", "event_duration" : "30", "event_result" : "Michelle and Aaron Bloy cordially invite you to attend their annual Wine Tasting Event 3221 West 32nd Street Warm Springs, Virginia " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-240" : {
			"origin" : "Rachel and Arnold cordially invite you for an afternoon on the terrace savoring the delights of their continent Wine & Cheese (from Italy and France) Sunday, June the seventh at six thirty in the evening 65 Mill Creek Run Regrets only please 442-8867",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-07", "event_startTime" : "18:30", "event_duration" : "30", "event_result" : "Rachel and Arnold cordially invite you for an afternoon on the terrace savoring the delights of their continent Wine & Cheese (from Italy and France) 65 Mill Creek Run Regrets only please 442-8867" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-241" : {
			"origin" : "Wine Tasting Party Sunday, the sixth of September at one-thirty in the afternoon Norton Vineyards 4224 Connor Avenue Templeton, California Shirley and Earl Lipton",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-09-06", "event_startTime" : "13:30", "event_duration" : "30", "event_result" : "Wine Tasting Party Norton Vineyards 4224 Connor Avenue Templeton, California Shirley and Earl Lipton" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-08-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-242" : {
			"origin" : "You are cordially invited to Rock Around the Clock at Evergreen High School Class of 1978 on Saturday, September 22nd 2018 40 Year Reunion Celebration Social Hour at 6:00 p.m. Dinner and Dance will follow Hotel Yves Evergreen, South Carolina",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2018-09-22", "event_startTime" : "18:00", "event_duration" : "30", "event_result" : "You are cordially invited to Rock Around the Clock at Evergreen High School Class of 1978 40 Year Reunion Celebration Social Hour Dinner and Dance will follow Hotel Yves Evergreen, South Carolina" }
			],
			"environment" : { "time" : "10:30", "date" : "2018-08-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-243" : {
			"origin" : "It's hard to believe it's been 50 years! Come and reminisce with The Class of 1966 of Clearway High on May 2nd from 6:00pm until 12:00 midnight Belleview Hotel 90 Sebring Road Clearway, MA",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-02", "event_startTime" : "18:00", "event_duration" : "360", "event_result" : "It's hard to believe it's been 50 years! Come and reminisce with The Class of 1966 of Clearway High Belleview Hotel 90 Sebring Road Clearway, MA" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-244" : {
			"origin" : "Premiere: October the 1ST, 2018 Showtime: 6 PM Please join us for a night of Glamour and Elegance as we celebrate our Fifteen Year Class Reunion Thursday, October eighteenth two thousand eighteen at one thirty in the evening Parrot Harbor Inn Easton, New York Attire: Red Carpet Chic Hosted by: SOM Class of 2003",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2018-10-01", "event_startTime" : "13:30", "event_duration" : "30", "event_result" : "Premiere: Showtime: 6 PM Please join us for a night of Glamour and Elegance as we celebrate our Fifteen Year Class Reunion Thursday, October eighteenth two thousand eighteen Parrot Harbor Inn Easton, New York Attire: Red Carpet Chic Hosted by: SOM Class of 2003" },
				{  "event_type" : "N", "event_startDate": "2018-10-01", "event_startTime" : "18:00", "event_duration" : "30", "event_result" : "Premiere: Showtime: Please join us for a night of Glamour and Elegance as we celebrate our Fifteen Year Class Reunion Thursday, October eighteenth two thousand eighteen at one thirty in the evening Parrot Harbor Inn Easton, New York Attire: Red Carpet Chic Hosted by: SOM Class of 2003" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-245" : {
			"origin" : "With pride and joy we invite you to share a special day in our lives and join us for the Class Reunion of Hutchtech High for the year 1980 on Wed, September 2nd at 7:00 p.m. 89723 Lincoln Park Drive Memphis, Tennessee,",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-09-02", "event_startTime" : "19:00", "event_duration" : "30", "event_result" : "With pride and joy we invite you to share a special day in our lives and join us for the Class Reunion of Hutchtech High for the year 1980 89723 Lincoln Park Drive Memphis, Tennessee," }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-246" : {
			"origin" : "We are pleased to announce Lincoln High’s 1977 Class Reunion on Friday, May eleventh 2018 at six o’clock in the evening Knight Stadium 123 Knight Street Rochester, New York",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2018-05-11", "event_startTime" : "18:00", "event_duration" : "30", "event_result" : "We are pleased to announce Lincoln High’s 1977 Class Reunion Knight Stadium 123 Knight Street Rochester, New York" }
			],
			"environment" : { "time" : "10:30", "date" : "2018-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-247" : {
			"origin" : "The graduating class of 1988 invites you to our 30 year class reunion! The 21st June, 2018 at five-thirty for cocktails, followed by dinner at six-thirty o'clock Little Valley Golf Club Little Valley, Pennsylvania Philadelphia College of Fine Arts",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2018-06-21", "event_startTime" : "17:30", "event_duration" : "30", "event_result" : "The graduating class of 1988 invites you to our 30 year class reunion! for cocktails, followed by dinner at six-thirty o'clock Little Valley Golf Club Little Valley, Pennsylvania Philadelphia College of Fine Arts" },
				{  "event_type" : "N", "event_startDate": "2018-06-21", "event_startTime" : "05:30", "event_duration" : "30", "event_result" : "The graduating class of 1988 invites you to our 30 year class reunion! for cocktails, followed by dinner at six-thirty o'clock Little Valley Golf Club Little Valley, Pennsylvania Philadelphia College of Fine Arts" },
				{  "event_type" : "N", "event_startDate": "2018-06-21", "event_startTime" : "18:30", "event_duration" : "30", "event_result" : "The graduating class of 1988 invites you to our 30 year class reunion! five-thirty for cocktails, followed by dinner Little Valley Golf Club Little Valley, Pennsylvania Philadelphia College of Fine Arts" },
				{  "event_type" : "N", "event_startDate": "2018-06-21", "event_startTime" : "06:30", "event_duration" : "30", "event_result" : "The graduating class of 1988 invites you to our 30 year class reunion! five-thirty for cocktails, followed by dinner Little Valley Golf Club Little Valley, Pennsylvania Philadelphia College of Fine Arts" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-248" : {
			"origin" : "The honour of your presence is requested at The Yacht Club 117 Seaside Drive Miami, Florida on Jun. 11TH for Cocktails and Hors d'oeuvres at one o'clock in the evening Dinner immediately following, ",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-11", "event_startTime" : "13:00", "event_duration" : "30", "event_result" : "The honour of your presence is requested at The Yacht Club 117 Seaside Drive Miami, Florida for Cocktails and Hors d'oeuvres Dinner immediately following, " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-249" : {
			"origin" : "Discuss the terms of the contract on June the 3RD  at midnight",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-250" : {
			"origin" : "discuss the terms of the contract on June the 22ND,  at midnight",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-22", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-251" : {
			"origin" : "discuss the terms of the contract on the 23rd June at midnight",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-23", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-252" : {
			"origin" : "Discuss the terms of the contract on the 1st June  at midnight",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-01", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-253" : {
			"origin" : "Discuss the terms of the contract on Jun. 1st at midnight",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-01", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-254" : {
			"origin" : "Discuss the terms of the contract on June the 23rd at midnight",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-23", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-255" : {
			"origin" : "order printer ink Mar. 2nd at noon",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-02", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "order printer ink" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-256" : {
			"origin" : "discuss the terms of the contract on Jun 2nd  at 3",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " },
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "03:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-257" : {
			"origin" : "discuss the terms of the contract on Jun 21st  at 3am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-21", "event_startTime" : "03:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-258" : {
			"origin" : "Discuss the terms of the contract on Jun 22ND  at 3pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-22", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-259" : {
			"origin" : "discuss the terms of the contract on 22ND of June at 3PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-22", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-260" : {
			"origin" : "Discuss the terms of the contract on May the 23RD at 3AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-23", "event_startTime" : "03:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-270" : {
			"origin" : "Discuss the terms of the contract on May 23RD at 3 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-23", "event_startTime" : "03:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-271" : {
			"origin" : "Discuss the terms of the contract on May the 2ND at 3 PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2016-05-02", "event_startTime" : "15:00", "event_duration" : "30", "event_result" : "Discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-272" : {
			"origin" : "discuss the terms of the contract on 23RD May  at noon",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-23", "event_startTime" : "12:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-273" : {
			"origin" : "discuss the terms of the contract on June the 1ST  at midnight",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-01", "event_startTime" : "00:00", "event_duration" : "30", "event_result" : "discuss the terms of the contract " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-274" : {
			"origin" : "The Lunar Eclipse will last for 3 hrs and 20 mins on Sept. 28th, 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-09-28", "event_startTime" : "09:00", "event_duration" : "200", "event_result" : "The Lunar Eclipse will last" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-275" : {
			"origin" : "Total Lunar Eclipse or 'Blood Moon' is on April the 3rd, 2015 and will be visible in most parts of our planet from 10.30 - 11.30pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-03", "event_startTime" : "10:30", "event_duration" : "60", "event_result" : "Total Lunar Eclipse or 'Blood Moon' is and will be visible in most parts of our planet" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-276" : {
			"origin" : "Lunar Eclipse will start at 3-05AM and last for 2 hours and 29 minutes from beginning to end, remind me in time",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-03", "event_startTime" : "03:05", "event_duration" : "149", "event_alarms": "0", "event_result" : "Lunar Eclipse will start and last from beginning to end" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-277" : {
			"origin" : "Lunar Eclipse will start at 2 AM and last for 1 h 10 m from beginning to end. Remind me an hour before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-03", "event_startTime" : "02:00", "event_duration" : "70", "event_alarms": "-60", "event_result" : "Lunar Eclipse will start and last from beginning to end." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-278" : {
			"origin" : "The totality – total phase – of 4th of April, 2015 lunar eclipse will last from 11:55 PM - 1:05 AM, making it the shortest total lunar eclipse of the 21st century",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-04", "event_startTime" : "23:55", "event_duration" : "70", "event_result" : "The totality – total phase – of lunar eclipse will last, making it the shortest total lunar eclipse of the 21st century" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-279" : {
			"origin" : "After 24 hours I have the best party in the 21st century!!!!! Start time at 11:00",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-02", "event_startTime" : "11:00", "event_duration" : "30", "event_result" : "After 24 hours I have the best party in the 21st century!!!!! Start time" },
				{  "event_type" : "N", "event_startDate": "2015-05-03", "event_startTime" : "10:30", "event_duration" : "30", "event_result" : "I have the best party in the 21st century!!!!! Start time at 11:00" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-280" : {
			"origin" : "The best time to view the Perseids, or most other meteor showers is 10:30PM - 1:30AM, notify me 5 minutes before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-02", "event_startTime" : "22:30", "event_duration" : "180", "event_alarms": "-5", "event_result" : "The best time to view the Perseids, or most other meteor showers is" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-281" : {
			"origin" : "The Perseids meteor shower is not visible at this time of year and the best date is around the 23RD of August 2015 from 10:00pm to 3:30am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-23", "event_startTime" : "22:00", "event_duration" : "330", "event_result" : "The Perseids meteor shower is not visible at this time of year and the best date is" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-282" : {
			"origin" : "The Lunar Eclipse is on April 1st 2015, the moon takes 3h.30m. to totally cross Earth’s dark umbral shadow",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-01", "event_startTime" : "09:00", "event_duration" : "210", "event_result" : "The Lunar Eclipse is, the moon takes to totally cross Earth’s dark umbral shadow" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-283" : {
			"origin" : "two days after put your cake in the oven for an hour and a half, switch off the oven 5 min later",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-04", "event_startTime" : "09:00", "event_duration" : "90", "event_result" : "put your cake in the oven, switch off the oven 5 min later" },
				{  "event_type" : "N", "event_startDate": "2015-05-04", "event_startTime" : "09:00", "event_duration" : "95", "event_result" : "put your cake in the oven for an hour and a half, switch off the oven" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-284" : {
			"origin" : "June the 2ND, 2015 Solar Eclipse will last for 3 hrs and 20 mins",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "09:00", "event_duration" : "200", "event_result" : "Solar Eclipse will last" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-285" : {
			"origin" : "After a day put your cake in the oven for half an hour, switch off the oven an hour later",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-03", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "put your cake in the oven, switch off the oven an hour later" },
				{  "event_type" : "N", "event_startDate": "2015-05-03", "event_startTime" : "09:00", "event_duration" : "90", "event_result" : "put your cake in the oven for half an hour, switch off the oven" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-286" : {
			"origin" : "The Supermoon on 20 March 2015 will be the third of the year; the best time to observe is 1.05-2.10 am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-20", "event_startTime" : "01:05", "event_duration" : "65", "event_result" : "The Supermoon will be the third of the year; the best time to observe is" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-287" : {
			"origin" : "two days after put your cake in the oven for half-hour, switch off the oven a minute later",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-04", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "put your cake in the oven, switch off the oven a minute later" },
				{  "event_type" : "N", "event_startDate": "2015-05-04", "event_startTime" : "09:00", "event_duration" : "31", "event_result" : "put your cake in the oven for half-hour, switch off the ove" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-288" : {
			"origin" : "July the 23RD, 2015 Lunar Eclipse will last for 1 hour and 1 minute",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-23", "event_startTime" : "09:00", "event_duration" : "61", "event_result" : "Lunar Eclipse will last" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-289" : {
			"origin" : "The Supermoon on March the 3RD, 2015 will be the third of the year;  the best time to see is 10.10-11.10 pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-03", "event_startTime" : "22:10", "event_duration" : "30", "event_result" : "The Supermoon will be the third of the year;  the best time to see is" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-290" : {
			"origin" : "2015/10/1 from 6.00 – 10.00 The Bren Hall, Feminist Art History Conference, room 6011.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-01", "event_startTime" : "06:00", "event_duration" : "240", "event_result" : "The Bren Hall, Feminist Art History Conference, room 6011." },
				{  "event_type" : "N", "event_startDate": "2015-10-01", "event_startTime" : "18:00", "event_duration" : "240", "event_result" : "The Bren Hall, Feminist Art History Conference, room 6011." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-291" : {
			"origin" : "March 11th, 2015 from 6.00 – 9.00 The Bren Hall, Feminist Art History Conference, room 6011.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-11", "event_startTime" : "06:00", "event_duration" : "180", "event_result" : "The Bren Hall, Feminist Art History Conference, room 6011." },
				{  "event_type" : "N", "event_startDate": "2015-03-11", "event_startTime" : "18:00", "event_duration" : "180", "event_result" : "The Bren Hall, Feminist Art History Conference, room 6011." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-292" : {
			"origin" : "The Supermoon on March 2ND 2015 will be the third of the year; the best time to see is 9.10-11.10 a.m.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-02", "event_startTime" : "21:10", "event_duration" : "120", "event_result" : "The Supermoon will be the third of the year; the best time to see is" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-293" : {
			"origin" : "Thu, 2015.10.1 from 4.00 till 10.00, The Bren Hall, Feminist Art History Conference, room 6011.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-01", "event_startTime" : "04:00", "event_duration" : "360", "event_result" : "The Bren Hall, Feminist Art History Conference, room 6011." },
				{  "event_type" : "N", "event_startDate": "2015-10-01", "event_startTime" : "16:00", "event_duration" : "360", "event_result" : "The Bren Hall, Feminist Art History Conference, room 6011." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-294" : {
			"origin" : "The Bren Hall, Feminist Art History Conference on Apr 20, 2015 from 12-9 p.m.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-20", "event_startTime" : "12:00", "event_duration" : "540", "event_result" : "The Bren Hall, Feminist Art History Conference" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-295" : {
			"origin" : "Students with documented conflicts should contact their instructors about taking the final exam on Sunday, May 24th 2015 at 11:30AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-24", "event_startTime" : "11:30", "event_duration" : "30", "event_result" : "Students with documented conflicts should contact their instructors about taking the final exam" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-296" : {
			"origin" : "Saturday, May the 2nd 2015, 2-3 p.m. students with documented conflicts should contact their instructors about taking the final exam",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-02", "event_startTime" : "14:00", "event_duration" : "60", "event_result" : "students with documented conflicts should contact their instructors about taking the final exam" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-297" : {
			"origin" : "Notification of exams approval must be received by the School Office before April 17, 2015 at 9 am. Remind me 2 weeks before.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-17", "event_startTime" : "09:00", "event_duration" : "30", "event_alarms": "-20160", "event_result" : "Notification of exams approval must be received by the School Office." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-298" : {
			"origin" : "Notification of exams approval must be received by the School Office on June 3rd 2015 from 9 till 10 am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "09:00", "event_duration" : "60", "event_result" : "Notification of exams approval must be received by the School Office" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-299" : {
			"origin" : "Students having conflicts with exams schedule must notify the appropriate instructor before Friday, April 3TH 2015 at 10AM. Remind me two days before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-03", "event_startTime" : "10:00", "event_duration" : "30", "event_alarms": "-2880", "event_result" : "Students having conflicts with exams schedule must notify the appropriate instructor." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-300" : {
			"origin" : "Students having conflicts with exams schedule must notify the appropriate instructor on April 1st, 2015 from 10 to 11 AM. Remind me 2 days before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-01", "event_startTime" : "10:00", "event_duration" : "60", "event_alarms": "-2880", "event_result" : "Students having conflicts with exams schedule must notify the appropriate instructor." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-301" : {
			"origin" : "Notification must be sent to the Central Office before 7-Apr-15, NOON. Remind me a day before.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-07", "event_startTime" : "12:00", "event_duration" : "30", "event_alarms": "-1440", "event_result" : "Notification must be sent to the Central Office" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-302" : {
			"origin" : "Notification must be sent to the Central Office on Aug 9, 2015, 11am - 12pm. Remind me one day before.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-09", "event_startTime" : "11:00", "event_duration" : "60", "event_alarms": "-1440", "event_result" : "Notification must be sent to the Central Office." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-303" : {
			"origin" : "Notification must be sent to the Central Office on August 1ST 2015, 9 A.M. - 11 A.M.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-01", "event_startTime" : "09:00", "event_duration" : "120", "event_result" : "Notification must be sent to the Central Office" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-304" : {
			"origin" : "Students having conflicts with exams schedule must notify the appropriate instructor on April 2nd, 2015 9 a.m.-11 a.m.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-02", "event_startTime" : "09:00", "event_duration" : "120", "event_result" : "Students having conflicts with exams schedule must notify the appropriate instructor" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-305" : {
			"origin" : "Students having conflicts with exams schedule must notify the appropriate instructor on April 1ST, 2015 from 9-11 am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-01", "event_startTime" : "09:11", "event_duration" : "120", "event_result" : "Students having conflicts with exams schedule must notify the appropriate instructor" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-306" : {
			"origin" : "Notification of exams approval must be received by the School Office on June 2nd 2015 from 9 a.m. - 10:30 a.m.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "09:00", "event_duration" : "90", "event_result" : "Notification of exams approval must be received by the School Office" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-307" : {
			"origin" : "The Bren Hall, Feminist Art History Conference starts on April 23rd, 2015, 12-9:30 p.m.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-23", "event_startTime" : "12:00", "event_duration" : "570", "event_result" : "The Bren Hall, Feminist Art History Conference starts" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-308" : {
			"origin" : "Thursday, the 1st of October 2015, The Bren Hall, Feminist Art History Conference from 11am - 9:30pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-01", "event_startTime" : "11:00", "event_duration" : "630", "event_result" : "The Bren Hall, Feminist Art History Conference" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-309" : {
			"origin" : "Notification of exams approval must be received by the School Office on 3RD of June 2015 from 8 AM - 9 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "08:00", "event_duration" : "60", "event_result" : "Notification of exams approval must be received by the School Office" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-310" : {
			"origin" : "Mo, 4th of May 2015 Students with documented conflicts should contact their instructors about taking the final exam from 8am - 9am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-04", "event_startTime" : "08:00", "event_duration" : "60", "event_result" : "Students with documented conflicts should contact their instructors about taking the final exam" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-311" : {
			"origin" : "Students with documented conflicts should contact their instructors about taking the final exam on 24TH of May, 2015 from 11 A.M. - 1 P.M.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-24", "event_startTime" : "11:00", "event_duration" : "120", "event_result" : "Students with documented conflicts should contact their instructors about taking the final exam" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-312" : {
			"origin" : "The Perseids meteor shower is visible on August 2ND, 2015 from 10 PM - 3 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-02", "event_startTime" : "22:00", "event_duration" : "300", "event_result" : "The Perseids meteor shower is visible" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-313" : {
			"origin" : "The best time to view the Perseids is 11 pm - 4 am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-02", "event_startTime" : "23:00", "event_duration" : "300", "event_result" : "The best time to view the Perseids is" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-314" : {
			"origin" : "The totality of 3RD April 2015 lunar eclipse will start at 11.30 PM until 1 AM, making it the shortest total lunar eclipse of the 21st century",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-03", "event_startTime" : "23:30", "event_duration" : "90", "event_result" : "The totality of lunar eclipse will start, making it the shortest total lunar eclipse of the 21st century" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-315" : {
			"origin" : "The total phase of Apr 2015 lunar eclipse will last in 1.05 a.m. - 2.05 a.m., making it the shortest total lunar eclipse of the 21st century",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-01", "event_startTime" : "01:05", "event_duration" : "60", "event_result" : "The total phase of lunar eclipse will last, making it the shortest total lunar eclipse of the 21st century" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-03-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-316" : {
			"origin" : "Meet the DJ on Jun 3RD from 6 - 7p.m., choose the right music. After 48 hours I have the best party in the 21st century!!!!!",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "18:00", "event_duration" : "780", "event_result" : "Meet the DJ, choose the right music. After 48 hours I have the best party in the 21st century!!!!!" },
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "06:00", "event_duration" : "60", "event_result" : "Meet the DJ, choose the right music. After 48 hours I have the best party in the 21st century!!!!!" },
				{  "event_type" : "N", "event_startDate": "2015-06-04", "event_startTime" : "18:00", "event_duration" : "60", "event_result" : "Meet the DJ on Jun 3RD, choose the right music. I have the best party in the 21st century!!!!!" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-317" : {
			"origin" : "My brother's wedding ceremony begins on 29th February, 2017 at 14 o'clock",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2017-02-01", "event_startTime" : "14:00", "event_duration" : "30", "event_result" : "My brother's wedding ceremony begins on 29th" },
				{  "event_type" : "N", "event_startDate": "2017-02-01", "event_startTime" : "02:00", "event_duration" : "30", "event_result" : "My brother's wedding ceremony begins on 29th February, 2017 at 14 o'clock" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-318" : {
			"origin" : "My brother's wedding ceremony begins on the 29TH February, 2016 at 14 pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2016-02-29", "event_startTime" : "14:00", "event_duration" : "30", "event_result" : "My brother's wedding ceremony begins" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-319" : {
			"origin" : "My brother's wedding ceremony begins on 30TH February, 2016 - 2.00 PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2016-02-01", "event_startTime" : "14:00", "event_duration" : "30", "event_result" : "My brother's wedding ceremony begins on 30TH" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-320" : {
			"origin" : "My brother's wedding ceremony begins on 32ND February, 2016 at 2pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2016-02-01", "event_startTime" : "14:00", "event_duration" : "30", "event_result" : "My brother's wedding ceremony begins on 32ND" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-321" : {
			"origin" : "The 1st Annual Progressive Dinner on May 3RD 2015 from 6.30 - 9.30 P.M.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-03", "event_startTime" : "18:30", "event_duration" : "180", "event_result" : "The 1st Annual Progressive Dinner" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-322" : {
			"origin" : "7TH Annual Feminist Dinner starts on 7TH of May 2015 from 6.00 - 9.30 PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-07", "event_startTime" : "18:00", "event_duration" : "210", "event_result" : "7TH Annual Feminist Dinner starts" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-323" : {
			"origin" : "Feminist Press Annual Benefit Cocktail Party and Dinner begins on Saturday, 23RD May, 2015 6.00 p.m. - 8.00 p.m.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-23", "event_startTime" : "18:00", "event_duration" : "120", "event_result" : "Feminist Press Annual Benefit Cocktail Party and Dinner begins" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-324" : {
			"origin" : "the 1ST May 2015, 5 p.m. - 9 p.m. Feminist Press Annual Benefit Cocktail Party and Dinner",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "17:00", "event_duration" : "240", "event_result" : "Feminist Press Annual Benefit Cocktail Party and Dinner" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-325" : {
			"origin" : "Aurora Award Dinner held on Thu, the 22nd October, 2015 at Aurora Picture Show from 5.30 pm - 8.30 pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-22", "event_startTime" : "17:30", "event_duration" : "180", "event_result" : "Aurora Award Dinner held at Aurora Picture Show" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-326" : {
			"origin" : "Aurora Award Dinner held on the 3rd of October 2015 at Aurora Picture Show from 9:30pm - 1am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-03", "event_startTime" : "21:30", "event_duration" : "210", "event_result" : "Aurora Award Dinner held at Aurora Picture Show" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-327" : {
			"origin" : "Aurora Award Dinner held on the 23RD of October, 2015 from 8pm - 1.30am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-23", "event_startTime" : "20:00", "event_duration" : "330", "event_result" : "Aurora Award Dinner held" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-328" : {
			"origin" : "The 117th meeting of the NY Comics & Picture-story Symposium will be held on Tuesday, the 10th March, 2015 from 7-10.30 pm at Parsons The New School",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-10", "event_startTime" : "19:00", "event_duration" : "210", "event_result" : "The 117th meeting of the NY Comics & Picture-story Symposium will be held at Parsons The New School" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-329" : {
			"origin" : "The 117th meeting of the NY Comics & Picture-story Symposium will be held on 1st of March 2015 from 7:00 - 10.00pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-01", "event_startTime" : "19:00", "event_duration" : "180", "event_result" : "The 117th meeting of the NY Comics & Picture-story Symposium will be held" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-330" : {
			"origin" : "the 22ND March, 2015 from 6 P.M. - 10 P.M. The 117th meeting of the NY Comics & Picture-story Symposium",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-22", "event_startTime" : "18:00", "event_duration" : "240", "event_result" : "The 117th meeting of the NY Comics & Picture-story Symposium" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-331" : {
			"origin" : "The 117th meeting of the NY Comics & Picture-story Symposium will be held on 20 of April, 2015 at 7.30 P.M. - 9.30 P.M. at Parsons The New School",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-20", "event_startTime" : "19:30", "event_duration" : "120", "event_result" : "The 117th meeting of the NY Comics & Picture-story Symposium will be held at Parsons The New School" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-332" : {
			"origin" : "Notification of exams approval must be received by the School Office on Friday, 3rd April 2015 9:30-12:00 noon. Notify me a week before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-03", "event_startTime" : "09:30", "event_duration" : "150", "event_alarms": "-10080", "event_result" : "Notification of exams approval must be received by the School Office." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-333" : {
			"origin" : "Notification of exams approval must be received by the School Office on the 21ST April, 2015 9.00 - 11.00 AM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-21", "event_startTime" : "09:00", "event_duration" : "120", "event_result" : "Notification of exams approval must be received by the School Office" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" }}
		},

		"TC-334" : {
			"origin" : "the 23rd May, 2015 9 am - 10 am notification of exams approval must be received by the School Office",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-23", "event_startTime" : "09:00", "event_duration" : "60", "event_result" : "notification of exams approval must be received by the School Office" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-335" : {
			"origin" : "The first exam for a class starts 9:00–11:00 a.m., and the second exam 1:00–4:00 p.m.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-03", "event_startTime" : "09:00", "event_duration" : "120", "event_result" : "The first exam for a class starts, and the second exam 1:00–4:00 p.m." },
				{  "event_type" : "N", "event_startDate": "2015-02-03", "event_startTime" : "13:00", "event_duration" : "180", "event_result" : "The first exam for a class starts 9:00–11:00 a.m., and the second exam" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-336" : {
			"origin" : "The first exam for a class starts 10:00–11:00 AM, and the second exam 2:00–3:00 PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-02", "event_startTime" : "10:00", "event_duration" : "60", "event_result" : "The first exam for a class starts, and the second exam 2:00–3:00 PM" },
				{  "event_type" : "N", "event_startDate": "2015-02-02", "event_startTime" : "14:00", "event_duration" : "60", "event_result" : "The first exam for a class starts 10:00–11:00 a.m., and the second exam" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-337" : {
			"origin" : "the 22ND of April, 2015 4.00 PM - 6.00 PM 35th Annual Athletics Hall of Fame Induction Ceremony",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-22", "event_startTime" : "16:00", "event_duration" : "120", "event_result" : "35th Annual Athletics Hall of Fame Induction Ceremony" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-338" : {
			"origin" : "April 23RD, 2015 4:00PM - 8:00PM 35th Annual Athletics Hall of Fame Induction Ceremony",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-23", "event_startTime" : "16:00", "event_duration" : "240", "event_result" : "35th Annual Athletics Hall of Fame Induction Ceremony" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-339" : {
			"origin" : "The 35th Annual Athletics Hall of Fame Induction Ceremony begins on 21st of April, 2015 from 11:30 am - 1:00 pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-21", "event_startTime" : "11:30", "event_duration" : "90", "event_result" : "The 35th Annual Athletics Hall of Fame Induction Ceremony begins" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-340" : {
			"origin" : "Tomorrow 8:00 am – Noon New Treatments for Cholestatic and Biliary Disorders",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-03", "event_startTime" : "08:00", "event_duration" : "240", "event_result" : "New Treatments for Cholestatic and Biliary Disorders" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-341" : {
			"origin" : "Tomorrow 9:00 AM – 12:00 PM New Treatments for Cholestatic and Biliary Disorders",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-03", "event_startTime" : "09:00", "event_duration" : "180", "event_result" : "New Treatments for Cholestatic and Biliary Disorders" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-342" : {
			"origin" : "Tomorrow 9AM – 11AM New Treatments for Cholestatic and Biliary Disorders",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-03", "event_startTime" : "09:00", "event_duration" : "120", "event_result" : "New Treatments for Cholestatic and Biliary Disorders" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-343" : {
			"origin" : "the 2nd May 2015 from 9 – 10.30am New Treatments for Cholestatic and Biliary Disorders",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-02", "event_startTime" : "09:00", "event_duration" : "90", "event_result" : "New Treatments for Cholestatic and Biliary Disorders" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-344" : {
			"origin" : "Today 12N – 3:00pm Pediatric Symposium: Blood Disorders and the Liver Clinical Research Workshop",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-02", "event_startTime" : "12:00", "event_duration" : "180", "event_result" : "Pediatric Symposium: Blood Disorders and the Liver Clinical Research Workshop" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-345" : {
			"origin" : "the 23rd of February, 2015 from 9.00am – 11.00am Pediatric Symposium: Blood Disorders and the Liver Clinical Research Workshop",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-23", "event_startTime" : "09:00", "event_duration" : "120", "event_result" : "Pediatric Symposium: Blood Disorders and the Liver Clinical Research Workshop" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-346" : {
			"origin" : "Pediatric Symposium: Blood Disorders and the Liver Clinical Research Workshop on the 7th February 2015 from 11AM - 4.30PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-07", "event_startTime" : "11:00", "event_duration" : "330", "event_result" : "Pediatric Symposium: Blood Disorders and the Liver Clinical Research Workshop" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-347" : {
			"origin" : "the 1st April, 2015 from 8:30 a.m. - 11 a.m. Blood Disorders and the Liver Clinical Research Workshop. And the day after tomorrow will be the 21st Pediatric Symposium",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-01", "event_startTime" : "08:30", "event_duration" : "150", "event_result" : "Blood Disorders and the Liver Clinical Research Workshop. And the day after tomorrow will be the 21st Pediatric Symposium" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-348" : {
			"origin" : "the 8TH April 2015 from 8:30 PM - 11 PM the 21st Pediatric Symposium",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-08", "event_startTime" : "20:30", "event_duration" : "150", "event_result" : "the 21st Pediatric Symposium" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-349" : {
			"origin" : "science experiment at twenty-five minutes to 11 on 1ST of July 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-01", "event_startTime" : "10:35", "event_duration" : "30", "event_result" : "science experiment" },
				{  "event_type" : "N", "event_startDate": "2015-07-01", "event_startTime" : "22:35", "event_duration" : "30", "event_result" : "science experiment" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-350" : {
			"origin" : "the 23RD June, 2015 donate to a special cause in my hometown thirty minutes past five pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-23", "event_startTime" : "17:30", "event_duration" : "30", "event_result" : "donate to a special cause in my hometown" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-351" : {
			"origin" : "This Monday, 2015-9-7 discuss the terms of the contract from 2015-10-5 at twelve hours fifteen minutes of daytime", // rare
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-09-07", "event_startTime" : "12:15", "event_duration" : "30", "event_result" : "discuss the terms of contract from 2015-10-5" },
				{  "event_type" : "N", "event_startDate": "2015-10-05", "event_startTime" : "12:15", "event_duration" : "30", "event_result" : "This Monday, 2015-9-7 discuss the terms of the contract" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-05-21" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-352" : {
			"origin" : "watch my show at twenty-three minutes past ten am next day",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "10:23", "event_duration" : "30", "event_result" : "watch my show" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-353" : {
			"origin" : "watch cartoons with kids at twenty one minutes past twelve pm today",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "12:21", "event_duration" : "30", "event_result" : "watch cartoons with kids" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-06-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-354" : {
			"origin" : "I spend fifty-five minutes defining the problem, and only five minutes finding the solution",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-02", "event_startTime" : "09:00", "event_duration" : "55", "event_result" : "I spend defining the problem, and only five minutes finding the solution" },
				{  "event_type" : "N", "event_startDate": "2015-02-02", "event_startTime" : "09:00", "event_duration" : "05", "event_result" : "I spend fifty-five minutes defining the problem, and only finding the solution" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-01" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-355" : {
			"origin" : "watch cartoons with kids at thirteen minutes past twelve pm on the next day",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-03", "event_startTime" : "12:13", "event_duration" : "30", "event_result" : "watch cartoons with kids" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-356" : {
			"origin" : "watch my show at twenty-five minutes past ten am on the following day",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-03", "event_startTime" : "10:25", "event_duration" : "30", "event_result" : "watch my show" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-357" : {
			"origin" : "Meet the DJ from 5-6pm, choose the right music, because I have the best party 48 hours after!!!!!",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-04", "event_startTime" : "17:00", "event_duration" : "60", "event_result" : "Meet the DJ, choose the right music, because I have the best party!!!!!" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-358" : {
			"origin" : "Jul. 3RD My presentation time is 10-30 – 12-00",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-03", "event_startTime" : "10:30", "event_duration" : "90", "event_result" : "My presentation time is" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-359" : {
			"origin" : "Nov 1ST My presentation time from 10-30 to 12-00",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-11-01", "event_startTime" : "10:30", "event_duration" : "90", "event_result" : "My presentation time" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-360" : {
			"origin" : "<div>Nov 1ST My presentation time from 10-30 to 12-00</div>",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-11-01", "event_startTime" : "10:30", "event_duration" : "90", "event_result" : "<div>My presentation time</div>" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-361" : {
			"origin" : "<p>Nov 1ST My presentation time from 10-30 to 12-00</p>",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-11-01", "event_startTime" : "10:30", "event_duration" : "90", "event_result" : "<p>My presentation time</p>" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-362" : {
			"origin" : "<a>Nov</a> 1ST My presentation time from 10-30 to 12-00",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-11-01", "event_startTime" : "10:30", "event_duration" : "90", "event_result" : "<a></a>My presentation time" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-363" : {
			"origin" : "the 23RD June, <span>2015<\span> donate to a special cause in my hometown thirty five minutes past five pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-23", "event_startTime" : "17:35", "event_duration" : "30", "event_result" : "<span><\span> donate to a special cause in my hometown" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-364" : {
			"origin" : "The Yankees plan to retire Williams' No. 51 at a ceremony on Dec 22nd from 3 h. 30 m. - 5 h. 30 m.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "15:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51 at a ceremony" },
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "03:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51 at a ceremony" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-365" : {
			"origin" : "The Yankees plan to retire Williams' No. 51 at a ceremony on Dec 22nd from 3 hours 30 minutes to 5 hours 30 minutes",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "15:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51 at a ceremony" },
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "03:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51 at a ceremony" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-366" : {
			"origin" : "The Yankees plan to retire Williams' No. 51 at a ceremony on Dec 22nd from 3 hrs. 30 min. - 5 hrs. 30 min.",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "15:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51 at a ceremony" },
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "03:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51 at a ceremony" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-367" : {
			"origin" : "The Yankees plan to retire Williams' No. 51л at a ceremony on Dec 22nd from 3 hrs 30 min till 5 hrs. 30 min",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "15:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51л at a ceremony" },
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "03:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51л at a ceremony" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-368" : {
			"origin" : "The Yankees plan to retire Williams' No. 51ĭ at a ceremony on Dec 22nd from 3 h 30 m - 5 h 30 m",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "15:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51ĭ at a ceremony" },
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "03:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51ĭ at a ceremony" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-369" : {
			"origin" : "The Yankees plan to retire Williams' No. 51 at a ceremony on Dec 22nd from 3h 30min to 5h 30min",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "15:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51 at a ceremony" },
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "03:30", "event_duration" : "120", "event_result" : "The Yankees plan to retire Williams' No. 51 at a ceremony" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-370" : {
			"origin" : "Feb. 23, 2015 from nine hours to eleven hours at morning, New Treatments for Cholestatic and Biliary Disorders",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-23", "event_startTime" : "09:00", "event_duration" : "120", "event_result" : "New Treatments for Cholestatic and Biliary Disorders" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-371" : {
			"origin" : "The Yankees plan to retire Williams' No. 51 at a ceremony on 3rd December 2015 from six hours - ten hours",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-12-03", "event_startTime" : "18:00", "event_duration" : "240", "event_result" : "The Yankees plan to retire Williams' No. 51 at a ceremony" },
				{  "event_type" : "N", "event_startDate": "2015-12-03", "event_startTime" : "06:00", "event_duration" : "240", "event_result" : "The Yankees plan to retire Williams' No. 51 at a ceremony" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-372" : {
			"origin" : "The Tigers swept through Cleveland and took three games, the two teams are back together for a rematch in Motown starting Friday from seven hrs thirty mins to nine thirty. Notify me two weeks before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "19:30", "event_duration" : "120", "event_alarms" : "-20160", "event_result" : "The Tigers swept through Cleveland and took three games, the two teams are back together for a rematch in Motown starting" },
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "07:30", "event_duration" : "120", "event_alarms" : "-20160", "event_result" : "The Tigers swept through Cleveland and took three games, the two teams are back together for a rematch in Motown starting " }
			],
			"environment" : { "time" : "10:30", "date" : "2015-04-28" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-373" : {
			"origin" : "Feb. 21st, 2015 from 9H - 11H AM, New Treatments for Cholestatic and Biliary Disorders",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-21", "event_startTime" : "09:00", "event_duration" : "120", "event_result" : "New Treatments for Cholestatic and Biliary Disorders" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-374" : {
			"origin" : "After one day disolve 3 oz. of Jello in 2 cups boiling water, stirring for at least 2 minutes",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-03", "event_startTime" : "09:00", "event_duration" : "02", "event_result" : "disolve 3 oz. of Jello in 2 cups boiling water, stirring" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-375" : {
			"origin" : "Jan. 2016 burn 2 pounds of fat with my new exercise program from 10-11 o'clock",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2016-01-01", "event_startTime" : "10:00", "event_duration" : "60", "event_result" : "burn 2 pounds of fat with my new exercise program" },
				{  "event_type" : "N", "event_startDate": "2016-01-01", "event_startTime" : "22:00", "event_duration" : "60", "event_result" : "burn 2 pounds of fat with my new exercise program" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-376" : {
			"origin" : "Dec. 22nd, 2015 Buy 10 lbs potatoes and 1 ton of rice, cook for homeless. Remind me one week before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-12-22", "event_startTime" : "09:00", "event_duration" : "30", "event_alarms" : "-10080", "event_result" : "Buy 10 lbs potatoes and 1 ton of rice, cook for homeless." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-377" : {
			"origin" : "Yay!!! Comicon 2015! A year ago I've lost my tickets! But this year I will be there exactly on Nov. 23rd, 2015 in Bloomington, Minnesota",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-11-23", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Yay!!! Comicon 2015! A year ago I've lost my tickets! But this year I will be there exactly in Bloomington, Minnesota" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-378" : {
			"origin" : "Pre-order 30 inch tape in hair extensions from China on Apr 2nd, 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-02", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Pre-order 30 inch tape in hair extensions from China" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-379" : {
			"origin" : "the second game of the Royals-White Sox series starts on Friday night from 7 to 9:30P.M. Remind me at time of event",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-06", "event_startTime" : "19:00", "event_duration" : "150", "event_alarms" : "0", "event_result" : "the second game of the Royals-White Sox series starts night" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-380" : {
			"origin" : "Buy 5 feet teddy bear for my nephew on Apr 2nd, 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-02", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Buy 5 feet teddy bear for my nephew" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-381" : {
			"origin" : "after 1 day pick up two yards of cut fabric from a store, that opens around the clock",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-03", "event_startTime" : "09:00", "event_duration" : "1440", "event_result" : "pick up two yards of cut fabric from a store, that opens" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-382" : {
			"origin" : "The important distance for older horses is 10 furlongs. I must check the distance on Mar 3rd 2015. Warn me two days before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-03", "event_startTime" : "09:00", "event_duration" : "30", "event_alarms" : "-2880", "event_result" : "The important distance for older horses is 10 furlongs. I must check the distance." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-383" : {
			"origin" : "Special Tax Option for Donations Aiding Families must be approved by 09-APR-2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-09", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Special Tax Option for Donations Aiding Families must be approved" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-384" : {
			"origin" : "THE 22ND MAY 2015 - THE DEADLINE TO CHANGE MY SHIPPING ADDRESS",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "THE DEADLINE TO CHANGE MY SHIPPING ADDRESS" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-385" : {
			"origin" : "the 2nd of May, 2015 deadline to change m shipping address",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-02", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "deadline to change m shipping address" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-386" : {
			"origin" : "Listen to 3 Miles From Space by Halftribe from seven to eight o'clock two days after",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-04", "event_startTime" : "19:00", "event_duration" : "60", "event_result" : "Listen to 3 Miles From Space by Halftribe" },
				{  "event_type" : "N", "event_startDate": "2015-02-04", "event_startTime" : "07:00", "event_duration" : "60", "event_result" : "Listen to 3 Miles From Space by Halftribe" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-387" : {
			"origin" : "the 1st of May 2015 figure out the price of 1 square inches of pizza to fix the right price",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "figure out the price of 1 square inches of pizza to fix the right price" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-388" : {
			"origin" : "Start to built a 400 sq. ft. backyard cottage on 23rd of November, 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-11-23", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Start to built a 400 sq. ft. backyard cottage" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-389" : {
			"origin" : "Find a realtor to buy 2 acres of land on 2nd of December 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-12-02", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Find a realtor to buy 2 acres of land" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-390" : {
			"origin" : "Take 3 square miles of desert southwest of Phoenix and turn them into one of the largest solar power plants on 1st May, 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-01", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Take 3 square miles of desert southwest of Phoenix and turn them into one of the largest solar power plants" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-391" : {
			"origin" : "the 1ST of December 2015 Figure out how much calories in 1 fluid ounce of Whole Milk",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-12-01", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Figure out how much calories in 1 fluid ounce of Whole Milk" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-392" : {
			"origin" : "Save $5 for a pint of beer for tomorrow",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-03", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Save $5 for a pint of beer" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-393" : {
			"origin" : "Mar 2ND, 2015 Buy 40 quarts of water to the farm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-02", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Buy 40 quarts of water to the farm" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-394" : {
			"origin" : "Mar 1ST, 2015 prepare 5 gallons of diesel fuel for a trip",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-01", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "prepare 5 gallons of diesel fuel for a trip" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-395" : {
			"origin" : "Buy 10 barrels of crude oil from the open market on 22ND of March, 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-22", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Buy 10 barrels of crude oil from the open market" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-396" : {
			"origin" : "Find organic carrots for 1 Dollar 50 Cents on farmers market on Sunday. Opening hours: 8.30-11.30am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-08", "event_startTime" : "08:30", "event_duration" : "180", "event_result" : "Find organic carrots for 1 Dollar 50 Cents on farmers market. Opening hours:" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-397" : {
			"origin" : "Find organic carrots for 1 Dollar 50 Cents this Wednesday",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-04", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Find organic carrots for 1 Dollar 50 Cents" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-398" : {
			"origin" : "Aug 1st, 2015 Change my saved dime coins at the bank",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-01", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Change my saved dime coins at the bank" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-399" : {
			"origin" : "Aug. 22RD, 2015 buy 10 silver quarters at the bank",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-22", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "buy 10 silver quarters at the bank" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-400" : {
			"origin" : "buy unique 100 US Bill style wallet for my bro next morning",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-02", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "buy unique 100 US Bill style wallet for my bro" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-401" : {
			"origin" : "Get US Dollar rates on Mar 4TH, 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-04", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Get US Dollar rates" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-402" : {
			"origin" : "Analyze American Dollar exchange rates and U.S. Dollar currency conversions for the United States currency on 1ST March 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-01", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Analyze American Dollar exchange rates and U.S. Dollar currency conversions for the United States currency" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-403" : {
			"origin" : "the 8TH of March 2015 Ping my IP address: 178.205.251.226 from 8 h 30 mins - 9 h at evening",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-08", "event_startTime" : "20:30", "event_duration" : "30", "event_result" : "Ping my IP address: 178.205.251.226" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-404" : {
			"origin" : "the 2ND March 2015 Call my daughter (800) 299-8065 and have a long girls talk from 8 h. - 9 h 30 mins at morning",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-02", "event_startTime" : "08:00", "event_duration" : "90", "event_result" : "Call my daughter (800) 299-8065 and have a long girls talk" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-405" : {
			"origin" : "the 3RD March 2015 Call to the Service Desk 317-834-2962 from 8 h.30 min - 9 hrs",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-03", "event_startTime" : "08:30", "event_duration" : "30", "event_result" : "Call to the Service Desk 317-834-2962" },
				{  "event_type" : "N", "event_startDate": "2015-03-03", "event_startTime" : "20:30", "event_duration" : "30", "event_result" : "Call to the Service Desk 317-834-2962" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-406" : {
			"origin" : "the 2nd of March 2015 call the Citibank Fraud unit 1-866-299-2421 at two thirty pm. Remind me half an hour before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-02", "event_startTime" : "14:30", "event_duration" : "30", "event_alarms" : "-30", "event_result" : "call the Citibank Fraud unit 1-866-299-2421." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-407" : {
			"origin" : "the 7TH of March, 2015 call the Citibank Fraud unit +1 503 299-1150 for payment via wire transfer at eight thirty pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-07", "event_startTime" : "20:30", "event_duration" : "30", "event_result" : "call the Citibank Fraud unit +1 503 299-1150 for payment via wire transfer" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-408" : {
			"origin" : "the 1st of March, 2015 contact the call centre 1 (855) 299-0028 at ten-thirty am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-01", "event_startTime" : "10:30", "event_duration" : "30", "event_result" : "contact the call centre 1 (855) 299-0028" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-409" : {
			"origin" : "the 21ST of March, 2015 Call +1 441 299 6110 For Personal Internet Banking at eleven-thirty am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-21", "event_startTime" : "11:30", "event_duration" : "30", "event_result" : "Call +1 441 299 6110 For Personal Internet Banking" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-410" : {
			"origin" : "the 2ND of March 2015 Call to register +1 (703) 299-2430 at eight-thirty am. Remind me ten mins before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-02", "event_startTime" : "08:30", "event_duration" : "30", "event_alarms" : "-10", "event_result" : "Call to register +1 (703) 299-2430." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-411" : {
			"origin" : "Mar. 8TH, 2015 Call to register +1 (703) 299-2430 at eleven thirty am. Notify me 1 h. before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-03-08", "event_startTime" : "11:30", "event_duration" : "30", "event_alarms" : "-60", "event_result" : "Call to register +1 (703) 299-2430." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-412" : {
			"origin" : "Jun. 21ST, 2015 Contact the vendor directly +1 212-299-3555 at eleven thirty am. Remind me 3 h before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-21", "event_startTime" : "11:30", "event_duration" : "30", "event_alarms" : "-180", "event_result" : "Contact the vendor directly +1 212-299-3555." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-413" : {
			"origin" : "Visit this city N55°47'50.192'' E49°8'1.241'' on 2ND JUNE 2015",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Visit this city N55°47'50.192'' E49°8'1.241''" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-414" : {
			"origin" : "Jun 3RD, 2015 Coachella 2016 passes go on sale at nine-thirty am. Remind me 5 min before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "09:30", "event_duration" : "30", "event_alarms" : "-5", "event_result" : "Coachella 2016 passes go on sale." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-415" : {
			"origin" : "Payment plan ticket sales ends on FRIDAY, APRIL 3rd, 2015 AT 11:59PM. Notify me 2 hours before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-04-03", "event_startTime" : "23:59", "event_duration" : "30", "event_alarms" : "-120", "event_result" : "Payment plan ticket sales ends." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-416" : {
			"origin" : "Orders placed and paid in full by 21ST of May, 2015 will ship on 2ND of June 2015 from ten thirty - eleven forty five am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "10:30", "event_duration" : "75", "event_result" : "Orders placed and paid in full will ship on 2ND of June 2015" },
				{  "event_type" : "N", "event_startDate": "2015-06-02", "event_startTime" : "10:30", "event_duration" : "75", "event_result" : "Orders placed and paid in full by 21ST of May, 2015 will ship" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-417" : {
			"origin" : "Morningstar Program Registration is on 1st June 2015 from 8:30 to 10 AM. Notify me 2.5 hours before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-01", "event_startTime" : "08:30", "event_duration" : "90", "event_alarms" : "-150", "event_result" : "Morningstar Program Registration is" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-418" : {
			"origin" : "Orders placed and paid in full by 22nd of May, 2015 will ship on 3rd of June 2015 from ten fifteen - eleven fifty five am",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-22", "event_startTime" : "10:15", "event_duration" : "100", "event_result" : "Orders placed and paid in full will ship on 3rd of June 2015" },
				{  "event_type" : "N", "event_startDate": "2015-06-03", "event_startTime" : "10:15", "event_duration" : "100", "event_result" : "Orders placed and paid in full by 22nd of May, 2015 will ship" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-419" : {
			"origin" : "The Oregon FFA state convention begins 23RD of July, 2015 from 8.30 - 11 A.M. in Silverton. Remind me three hrs before",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-23", "event_startTime" : "08:30", "event_duration" : "150", "event_alarms" : "-180", "event_result" : "The Oregon FFA state convention begins in Silverton." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-420" : {
			"origin" : "The anniversary of our first date is October 24, book a hotel for that night 2 days before. Remind me at 9",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-10-24", "event_startTime" : "09:00", "event_duration" : "30", "event_alarms" : "-2880", "event_result" : "The anniversary of our first date, book a hotel for that night. Remind me at 9" },
				{  "event_type" : "N", "event_startDate": "2015-10-24", "event_startTime" : "09:00", "event_duration" : "30", "event_alarms" : "0", "event_result" : "The anniversary of our first date, book a hotel for that night 2 days before." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-421" : {
			"origin" : "Balmule House Open Evening on Thursday 21ST MAY, 2015 5 hrs 30 mins – 10 hrs. Remind me at 4",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "17:30", "event_duration" : "270", "event_alarms" : "-90", "event_result" : "Balmule House Open Evening" },
				{  "event_type" : "N", "event_startDate": "2015-05-21", "event_startTime" : "05:30", "event_duration" : "270", "event_alarms" : "-90", "event_result" : "Balmule House Open Evening" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-422" : {
			"origin" : "Do something especially nice for Father's Day (June 15th).",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-06-15", "event_startTime" : "09:00", "event_duration" : "30", "event_result" : "Do something especially nice for Father's Day." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-423" : {
			"origin" : "Jul 2ND help my sister with her wedding invitations from 2 hrs. to 8 hrs. PM",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-07-02", "event_startTime" : "14:00", "event_duration" : "360", "event_result" : "help my sister with her wedding invitations." }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-424" : {
			"origin" : "Host a cooking party - invite some friends on Aug. 2ND from 2.30 min - 6",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-08-02", "event_startTime" : "14:30", "event_duration" : "210", "event_result" : "Host a cooking party - invite some friends" },
				{  "event_type" : "N", "event_startDate": "2015-08-02", "event_startTime" : "02:30", "event_duration" : "210", "event_result" : "Host a cooking party - invite some friends" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-07-22" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		},

		"TC-425" : {
			"origin" : "Go fly a kite from 4-8 pm",
			"expectations" : [
				{  "event_type" : "N", "event_startDate": "2015-02-02", "event_startTime" : "16:00", "event_duration" : "240", "event_result" : "Go fly a kite" }
			],
			"environment" : { "time" : "10:30", "date" : "2015-02-02" , "workTime" : { "Mo" : "09:00-19:00", "Tu" : "09:00-19:00", "We" : "09:00-19:00", "Th" : "09:00-19:00", "Fr" : "09:00-19:00", "Sa" : "09:00-13:00", "Su" : "09:00-13:00" } }
		}
	};

