(function(exports){


	
	
	
	
	
	
	
	
	



	exports.categories = [

		{
			name:	'encounters',			//Begegnung
			colors:	['#4FB1FF'],
			tags:	[
						'encounters_meet',
						'encounters_play',
						'encounters_eatndrink',
						'encounters_groups',
						'encounters_conversations',
						'encounters_gardening',
						'encounters_party'
					]
		},

		{
			name:	'counseling',			//Beratung
			colors:	['#966CE1'],
			tags: 	[
						'counseling_social',
				    'counseling_housing',
				    'counseling_care',
				    'counseling_legal',
				    'counseling_pension',
				    'counseling_volunteers'
					]
		},

		{
			name:	'exercise',				//Bewegung_und_Gesundheit
			colors:	['#A0C543'],
			tags:	[
					'exercise_walk',
				    'exercise_sports',
				    'exercise_dance',
				    'exercise_memory',
				    'exercise_prevention',
				    'exercise_nutrition'

					]
		},

		{
		  name: 'education',
		  colors: ['#F29D22'],
		  tags:   [
		        'education_language',
		        'education_internet',
		        'education_health',
		        'education_learning',
		        'education_misc'
		      ]
		},

		{
	
			name:	'arts',					//Kunst und Kreativität
			colors:	['#DA535E'],
			tags: 	[
						'arts_paint_craft',
						'arts_handicrafts',
						'arts_choir',
						'arts_music',
						'arts_fotographie',
						'arts_literature',
						'arts_excursions'
					]
		},

		{
		  name: 'society',
		  colors: ['#488EC5'],
		  tags:   [
		        'society_volunteering',
		        'society_politics',
		        'society_religion',
		        'society_enviroment',
		        'society_information'
		      ]
		},

		{
			name:	'it',					//Computer_und_Technik
			colors:	['#F36A07'],
			tags: 	[
						'it_courses',	// Kurse und Lernmöglichkeiten
						'it_seniors',	// Technik und Alter
						'it_lending',	// Leihmöglichkeiten von Tablets und Smartphones
						'it_repair'
					]
		},

		{
			name:	'support',				//Alltagshilfen_Ehrenamt
			colors:	['#D878E3'],
			tags: 	[
						'support_open_lunch',			// Offener Mittagstisch
						'support_give_away',			// Kleiderkammer, Bücherbasar
						'support_neighborhood', 		// Einkaufshilfen und Nachbarschaftshilfen
						'support_visiting_service',		// Besuchsdienste
						'support_spiritual_welfare', 			// Telefonseelsorge
						'support_support_groups'
					]
		},

		{
			name:	'care',					//Rund_um_die_Pflege	
			colors:	['#00ADC3'],
			tags: 	[
						'care_facility',
						'care_consulting',
						'care_relief_everyday_life',
						'care_relief_caregivers',
						'care_dementia'
			]
		},


		{
			name:	'misc',					//Sonstige_Angebote
			colors:	['#9CAEC2'],
			tags: 	[]
		},

	]

	exports.types = [
		{
			name:		'location',
			colors:		['#096402', '#096402'],
		},		
		{
			name:		'service',
			colors:		['#fec300', '#fec300'],
		},
		{
			name:		'event',
			colors:		['#62a7d5', '#62a7d5'],
		}
	]

	exports.tags = {

		mode: [
			'on_site',			// vor Ort
			'online',			// online
			'phone'				// per Telefon
		],

		target_groups: [
			'migrants', 		// Migrant*innen
			'women', 			// Frauen
			'men',				// Männer
			'lgtbiq', 			// LSBTI*
			'young_and_old',	// Jung und Alt
			'care_needs',
			'affiliated'
		],

		// districts: [
		// 	'bz_01',
		// 	'bz_02',
		// 	'bz_03',
		// 	'bz_04',
		// 	'bz_05',
		// 	'bz_06',
		// 	'bz_07',
		// 	'bz_08'
		// ],

		accessibility:[				
			'wheelchair_accessible_wc',	// Rollstuhlgerechtes WC
			'accessible_parking',		// Parkplatz für Menschen mit Behinderung
			'wheelchair_accessible',	// Zugang rollstuhlgerecht
			'elevator_present',			// Fahrstuhl vorhanden		
			'hearing_vision'	
		],

		misc :[
			'free_wifi_usage', 		// Kostenlose W-Lan-Nutzung
			'free_pc_usage',		// Kostenlose PC Nutzung
		],

	languages: [

			'albanian',
			'arabic',
			'english',
			'farsi',
			'french',
			'russian',
			'serbian_croatian',
			'turkish',
			'urdu',
		],

		institution_type: [
			'meeting_place',			//Begegnungsstätte
			'counseling_center',		//Beratungsstelle
			'education',
			'caring',
			'other'
		],

		extra: [
			'berlin_wide'		//berlinweit
		]

	}

}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
