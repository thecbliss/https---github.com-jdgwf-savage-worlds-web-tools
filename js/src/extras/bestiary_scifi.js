/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Sci-Fi Companion and are owned by Pinnacle Entertainment Group.
*/
if(typeof(extraDatabase) == "undefined")
	var extraDatabase = Array();

if(typeof(extraBooks) == "undefined")
	var extraBooks = Array();

var currentBook = books_list[4];

extraBooks = extraBooks.concat(currentBook);

extraDatabase = extraDatabase.concat(Array(
/*
	{
		name: "Alligator/Crocodile",
		wildcard: 0,
		image: "",
		blurb: "Alligators and crocs are staples of most pulp-genre adventure games. The statistics here represent an average specimen of either species. Much larger versions are often found in more remote areas.",
		attributes: {
			agility: "d4",
	smarts: "d4 (A)",
			spirit: "d6",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			 'Fighting' : "d8",
			 'Notice' : "d6",
			 'Swimming' : "d8"
		},
		charisma: "",
		pace: "3",
		parry: "6",
		toughness: "9",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick skin."
			},
			{
				name: "Aquatic",
				description: "Pace 5"
			},
			{
				name: "Bite",
				description: "Str+d6"
			},
			{
				name: "Rollover	",
				description: "Both gators and crocs are notorious for grasping their prey in their vice-like jaws and rolling over and over with their flailing victims in their mouth. If one of these large amphibians hits with a raise, it causes an extra 2d4 rollover damage to its prey in addition to its regular Strength damage."
			}
		),
		book: currentBook,

		page: "p135"
	}
));
*/
    {
		name: "Acid Pitcher",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "These carnivorous plants look something like a pitcher about two feet deep, four feet across, and set down into the ground. Filling the pitcher is a powerful digestive enzyme, which looks and smells like water. When an animal drinks from the pitcher, thick fronds lying just beneath the surface burst out and pull the animal into the bowl where it’s dissolved and digested. Acid pitchers locate their prey through sensing ground vibrations, but only to a range of 6 yards (3”) from their center.",
		attributes: {
			agility: "d4",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d12",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d8",
			'Notice': "d4"
		}
		charisma: "0",
		pace: "0",
		parry: "6",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Grapple",
				description: "Acid pitchers have six thick fronds which function as rudimentary and surprisingly quick arms. The tentacles function as a whole and can only attack one target per round. With a successful grapple, they drag the victim into the enzyme, causing 2d6 damage per round. Escape requires an opposed Strength roll."
			},
			{
				name: "Hard to Kill",
				description: "The heart of the plant lies deep underground. Each of its tentacles can take one wound, but destroying them does no harm to the plant. Once half of the tentacles are destroyed, the plant can no longer grapple effectively and withdraws the fronds into the soil."
			},
			{
				name: "Plant",
				description: "Called shots do no extra damage. Bullets, arrows, and other piercing weapons inflict half damage. Immune to Tests of Will."
			}
		),
		book: currentBook,
		page: "p74"
	},{
		name: "Arc Beetle",
		wildcard: 0,
		image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Dytiscus_latissimus.jpg",
		blurb: "Arc beetles are armored insects with a distinctive yellow and blue striped shell. Protruding from their forehead are two long antennae that crackle with bioelectrical energy and can throw bolts of electricity to a range of over 45 yards.",
		attributes: {
			agility: "d6",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d8", 
			'Fighting' : "d6", 
			'Notice'   : "d6",
            'Shooting' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "11(3)",
		armor: "3",
		abilities: Array(
			{
				name: "Armor +3",
				description: "Thick shell"
			},
			{
				name: "Bite",
				description: "Str+d4"
			},
			{
				name: "Electricity",
				description: "Arc beetles fire bolts of electricity from their antennae. This works as the bolt power, and the beetle has 20 Power Points for this purpose only. It uses Shooting as its arcane skill"
			},
			{
				name: "Size +2",
				description: "Arc beetles are over 6’ long and 4’ high."
			}
		),
		book: currentBook,

		page: "p75"
	},
	{
		name: "Avrok",
		wildcard: 0,
		image: "",
		blurb: "The avrok is a massive crocodilian creature found on more primitive worlds with plentiful game.",
		attributes: {
			agility: "d10",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12+2",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8", 
			'Notice'   : "d6",
			'Stealth' : "d8",
			'Swimming' : "d12"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "15(2)",
		armor: "2",
		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 12."
			},
			{
				name: "Armor +2",
				description: "Thick hide."
			},
			{
				name: "Large",
				description: "Attackers are +2 to attack rolls because of the beast’s size."
			},
			{
				name: "Shake",
				description: "If an avrok scores a raise on its attack it has secured a strong grip. On subsequent rounds it proceeds to shake its head violently, allowing its teeth to saw through its prey. This causes 3d6 damage and no attack roll is required. Escaping requires an opposed Strength roll."
			},
			{
				name: "Size +6",
				description: "Avroks measure 35’."
			}
		),
		book: currentBook,

		page: "p75"
	},{
		name: "Barbed Tongued Lizard",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Barbed tongues get their name from the sharp bony 'teeth' at the end of their longtongue. The barbs deliver a poison which causes immense pain but little physical harm. Some aggressive species use this to stun and eat their prey, while others use it to escape.Barbed tongue lizards have dark red scales they can flush with blood to turn bright red and startle potential threats.",
		attributes: {
			agility: "d8",
			smarts: "d6(A)",
			spirit: "d4",
			strength: "d12+1",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d12",
			'Intimidation': "d6",
			'Notice': "d6",
			'Stealth': "d4"
		}
		charisma: "0",
		pace: "10",
		parry: "8",
		toughness: "9",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d8."
			},
			{
				name: "Fast",
				description: "Pace 10; d10 running die."
			},
			{
				name: "Large",
				description: "Attackers add +2 toattack rolls because of the beast’s size."
			},
			{
				name: "Low Light Vision",
				description: "No penalties for Dim and Dark lighting."
			},
			{
				name: "Size +4",
				description: "Barbed tongue sweigh 2000 pounds."
			},
			{
				name: "Tongue",
				description: "Str+d4, Reach 1.The tongue is tipped with bony barbs that deliver a pain-causing poison. Anyone Shaken or wounded must make a Vigor roll or be Shaken and cannot attempt to recover for 1d6 rounds."
			}
		),
		book: currentBook,
		page: "p75"
	},{
		name: "Batspider",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Batspiders are a species of flying arachnid. Each spider is about six inches across with two sets of bat-like wings extending from their back. Batspiders commonly dwell in forests or jungles, swooping down from trees to land on their prey’s back. They are often found as solitary hunters, though sometimes as many as a dozen gather together. They never form true swarms.",
		attributes: {
			agility: "d10",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "—",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d6",
			'Notice': "d8",
			'Stealth': "d10"
		}
		charisma: "0",
		pace: "4",
		parry: "5",
		toughness: "2",
		armor: "0",
		abilities: Array(
			{
				name: "Backbiter",
				description: "If a batspider has surprise, it flies onto its opponent’s back and attacks with the Drop. The victim suffers a –2 penalty to attack while it remains on his back."
			},
			{
				name: "Flying",
				description: "Pace 8."
			},
			{
				name: "Poison Bite (–2)",
				description: "Bat spiders can’t cause true damage with their bite and thus can’t penetrate armor, but they seek out bare skin or light clothing, making a Called Shot if necessary. With a successful Fighting roll as a Touch Attack (+2) they manage to bite and deliver their poison. Victims must make a Vigor roll at –2 (–4 if it hit with a raise) or suffer 2d4 damage at the start of each subsequent round."
			},
			{
				name: "Size –3",
				description: "Batspiders are six inches in diameter."
			},
			{
				name: "Small",
				description: "Attackers subtract 2 from their rolls due to the bat spider’s small size."
			},
			{
				name: "Wall Walker",
				description: "Batspiders can move across vertical or horizontal surfaces at their Pace"
			}
		),
		book: currentBook,
		page: "p75"
	},{
		name: "Bleeder Rabbit",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Imagine a rabbit the size of a small child covered with scaly skin like that of an armadillo. Then enlarge its teeth to the length of an adult human’s index finger. That’s a bleeder rabbit—or bleeder bunny as some crews prefer.Despite their relatively small size, bleeder bunnies can kill much larger prey with a single bite. Their saliva acts as an anticoagulant, preventing the deep wound from clotting. All the bunny has to do is make one bite, then flee to a safe distance and wait for its prey to slowly bleed to death.",
		attributes: {
			agility: "d8",
			smarts: "d6(A)",
			spirit: "d10",
			strength: "d4",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d6",
			'Notice': "d10",
			'Stealth': "d6"
		}
		charisma: "0",
		pace: "6",
		parry: "5",
		toughness: "6 (1)",
		armor: "1",
		abilities: Array(
			{
				name: "Armor +1",
				description: "Scaly skin."
			},
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Bleeder",
				description: "A character Shaken or wounded because of a bite attack suffers Fatigue at the start of every other round. A successful Healing roll stops the bleeding."
			},
			{
				name: "Leap",
				description: "Doubles jumping distances."
			},
			{
				name: "Pounce",
				description: "The beast can make a special Wild Attack if it can jump at least 2” to the target, adding +4 to attack and damage instead of +2 (Parry is still just -2)."
			},
			{
				name: "Size –1",
				description: "Bleeders stand 3’ in height."
			}
		),
		book: currentBook,
		page: "p76"
	},{
		name: "Bombardier Bird",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Bombardier birds work as a flock, dropping a barrage of stones onto victims to bludgeon them to death. Only when the prey is dead do the birds land to feast. The birds are treated as a Swarm (see Savage Worlds), but instead of biting drop stones on their prey",
		attributes: {
			agility: "-",
			smarts: "-",
			spirit: "-",
			strength: "-",
			vigor: "-"
		}
		skills: {
			
		}
		charisma: "-",
		pace: "-",
		parry: "-",
		toughness: "-",
		armor: "-",
		abilities: Array(
			{
				name: "Bombardment",
				description: "Bombardiers attack by dropping heavy rocks on their prey. Place a Medium Burst Template over the intended target, and then make a d8 Throwing roll. With success, the template drifts 1d4” in a d12 direction (read as a clockface). With a raise there is no drift. If the roll is failed, the drift is 2d8”. Damage to anything caught in the template is 3d6. Bombardiers make only a single attack before flying off for 2d4 rounds to grab more stones."
			}
		),
		book: currentBook,
		page: "p77"
	},{
		name: "Bone Spider",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Bone spiders are nightmarish creatures from desolate worlds. They have bodies the size of a man’s head, 12 inch long legs, and bodies covered in black, segmented, bony armor. At the end of their extendable jaws are four sharp fangs surrounding a circular mouth filled with teeth capable of cutting through bone. It’s a flesh eater and willing to attack opponents much larger than itself.",
		attributes: {
			agility: "d10",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d4",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d8",
			'Intimidation': "d6",
			'Notice': "d8",
			'Stealth': "d10"
		}
		charisma: "0",
		pace: "6",
		parry: "6",
		toughness: "6 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Bony shell."
			},
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Fear –2",
				description: "They are nightmarish creatures."
			},
			{
				name: "Paralysis",
				description: "Anyone Shaken or wounded by a bone spider must make a Vigor roll or be paralyzed for 2d6 rounds."
			},
			{
				name: "Small",
				description: "Attackers subtract 2 from their rolls due to the spider’s small size."
			},
			{
				name: "Size –2",
				description: "Bone spiders are the same size as human heads with 12” long legs."
			}
		), 
		book: currentBook,
		page: "p77"
	},{
		name: "Bore Worm Swarm",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Bore worms are tiny but deadly creatures. They are nocturnal and attracted to body heat. When they contact flesh, they burrow through the skin (which feels like an insect sting to the victim) and begin eating it alive from the inside. Fortunately for the victim, they only lay their eggs in dead flesh. Treat as a Swarm (see Savage Worlds) with the following Special Abilities:",
		attributes: {
			agility: "-",
			smarts: "-",
			spirit: "-",
			strength: "-",
			vigor: "-"
		}
		skills: {
			
		}
		charisma: "-",
		pace: "-",
		parry: "-",
		toughness: "-",
		armor: "-",
		abilities: Array(
			{
				name: "Infravision",
				description: "Halve penalties for bad lighting against heat-producing targets."
			},
			{
				name: "Internal Feeding", 
				description: "If a swarm causes a Shaken or wounded result, several dozen of the creatures have burrowed beneath the victim’s skin. The target suffers an automatic wound each day afterwards until he perishes. These wounds cannot be healed til the worms are removed. Removing the bore worms requires complex surgery (Healing roll at –4) or five minutes exposure to high levels of radiation (which in itself can be deadly)."
			}
		),
		book: currentBook,
		page: "p77"
	},{
		name: "Bristled Gorer",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Bristled gorers are herbivores that use their four sharp tusks to dig up roots and tubers. Although predominantly flat, their teeth and jaws are more than capable of crushing thick fibers. They are quadrupedal and covered in short fur, which stands on end when the creature is startled, and almost doubles its effective size. 77Tr a v e l e rs & Xen o s The flesh of a gorer is extremely tasty, and native races hunt them. Despite being herbivorous, gorers are aggressive when provoked and their tusks are quite capable of slicing through flesh and bone.",
		attributes: {
			agility: "d6",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d6",
			'Intimidation': "d8",
			'Notice': "d6"
		}
		charisma: "0",
		pace: "6",
		parry: "5",
		toughness: "6",
		armor: "0",
		abilities: Array(
			{
				name: "Berserk",
				description: "When a gorer is frightened (such as being attacked), it goes berserk. It gains +2 to all Fighting and Strength rolls and its Toughness, but Parry is reduced by 2. It also ignores wound penalties."
			},
			{
				name: "Gore",
				description: "If a gorer can charge at least 6” before attacking, it adds +4 to damage."
			},
			{
				name: "Tusks",
				description: "Str+d6."
			}
		),
		book: currentBook,
		page: "p77"
	},{
		name: "Crab, Giant",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Giant crabs are found throughout the oceans of the galaxy. They are voracious hunters who attack anything they can crack or rend with their powerful claws.",
		attributes: {
			agility: "d8",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d10",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d8",
			'Notice': "d6",
			'Stealth': "d6",
			'Swimming': "d8"
		}
		charisma: "0",
		pace: "8",
		parry: "6",
		toughness: "10 (3)",
		armor: "3",
		abilities: Array(
			{
				name: "Armor +3",
				description: "Crabs have thick shells."
			},
			{
				name: "Claws",
				description: "Str+d8, AP 2."
			},
			{
				name: "Grapple",
				description: "A crab which succeeds in a grapple maneuver inflicts Str damage on subsequent rounds."
			},
			{
				name: "Size +1",
				description: "These creatures weigh over 300 pounds"
			}
		),
		book: currentBook,
		page: "p78"
	},{
		name: "Creature From The Id",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Id monsters are created when a psionicist dies from extreme backlash. The entities somehow take physical form and seek out other psionicists—which they slay and feed on (just the brain). If they can be seen, creatures from the id take on a muted and much larger aspect of their creator.",
		attributes: {
			agility: "d8",
			smarts: "d6(A)",
			spirit: "d10",
			strength: "d12+8",
			vigor: "d10"
		}
		skills: {
			'Fighting': "d10",
			'Notice': "d8"
		}
		charisma: "0",
		pace: "6",
		parry: "7",
		toughness: "10",
		armor: "0",
		abilities: Array(
			{
				name: "Claws",
				description: "Str+d8."
			},
			{
				name: "Fearless",
				description: "Immune to Fear and Intimidation."
			},
			{
				name: "Invisible",
				description: "Id monsters are invisible in their natural state. A character may detect the invisible presence if he has a reason to look and makes a Notice roll at –6. Once detected, he may attack the thing at –6. These creatures radiate heat, so thermal or infravision eliminates their invisibility bonus."
			},
			{
				name: "Invulnerability",
				description: "Non-psionic attacks cause no damage, though they can Shake the creature. Multiple Shaken results from non-psionic attacks do not result in a wound."
			},
			{
				name: "Size +3",
				description: "Id creatures stand 10’ tall."
			},
			{
				name: "Weakness (Psionics)",
				description: "Id monsters suffer normal damage from psionic attacks."
			}
		),
		book: currentBook,
		page: "p78"
	},{
		name: "Cyber Dog",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Cyber enhanced dogs are typically rottweilers or German shepherds augmented with cybernetics to improve their use as guard and attack dogs.",
		attributes: {
			agility: "d8",
			smarts: "d6(A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d6",
			'Intimidation': "d6",
			'Notice': "d10",
			'Stealth': "d8"
		}
		charisma: "0",
		pace: "10",
		parry: "5",
		toughness: "6 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Subdermal plates."
			},
			{
				name: "Bite",
				description: "Str+d8. Enhanced jaw muscles."
			},
			{
				name: "Enhanced Senses",
				description: "+2 to Notice rolls."
			},
			{
				name: "Go for the Throat",
				description: "Dogs instinctively go for an opponent’s soft spots. With a raise on its attack roll, the animal hits the target’s most weakly-armored location."
			},
			{
				name: "Infravision",
				description: "Dogs halve penalties for poor lighting when attacking heat-producing targets."
			},
			{
				name: "Leg Enhancements",
				description: "Pace 10. Cyber enhanced dogs roll a d10 when running instead of a d6."
			},
			{
				name: "Size –1",
				description: "Most are the size of German shepherds or rottweilers."
			}
		),
		book: currentBook,
		page: "p78"
	},{
		name: "Death Worm",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "The death worm is longer than a human is tall, covered in flexible sand-yellow scales, lives beneath the soft sand of its desert home, and has the ability to kill a grown man at a distance.",
		attributes: {
			agility: "d6",
			smarts: "d8(A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d8",
			'Intimidation': "d6",
			'Notice': "d8",
			'Shooting': "d6",
			'Stealth': "d8"
		}
		charisma: "0",
		pace: "8",
		parry: "6",
		toughness: "9 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor (+2)",
				description: "Hard, scaly skin."
			},
			{
				name: "Bite",
				description: "Str+d6."
			},
			{
				name: "Burrow (8)",
				description: "Death worms can move through sand and soft soil at full Pace and may attack from below."
			},
			{
				name: "Death Power",
				description: "Instead of biting, the death worm can focus an internally generated electrical charge strong enough to stop a man’s heart or fry electrical systems in a vehicle. Range 3/6/12, RoF 1, Damage 4d6, AP 10. It may do this from just beneath the earth."
			},
			{
				name: "Size +2",
				description: "Death worms measure 10’ in length and are 1’ in diameter."
			}
		),
		book: currentBook,
		page: "p78"
	},{
		name: "Decapitator",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Decapitators are large apes, similar in size to Terran gorillas, but with extended arms ending in sickle shaped, sharpened bones. They hang from branches by their prehensile feet waiting for prey to pass beneath. When it does, they slash with their scythe-like arms, aiming for the head.",
		attributes: {
			agility: "d8",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12+2",
			vigor: "d10"
		}
		skills: {
			'Climbing': "d8",
			'Fighting': "d8",
			'Intimidation': "d10",
			'Notice': "d6",
			'Stealth': "d10"
		}
		charisma: "0",
		pace: "6",
		parry: "6",
		toughness: "9",
		armor: "0",
		abilities: Array(
			{
				name: "Ambush",
				description: "If a decapitator Surprises its prey, it also has the Drop. It makes a Called Shot to the head."
			},
			{
				name: "Climb",
				description: "Decapitators can move at their full Pace in trees or similar environments and don’t normally need to make Climbing rolls."
			},
			{
				name: "Scythes",
				description: "Str+d10, AP 4."
			},
			{
				name: "Size +2",
				description: "Decapitators weigh over 1000 pounds."
			}
		),
		book: currentBook,
		page: "p79"
	},{
		name: "Deep Diver",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Rather than trying to bite their prey to death, these sturgeon-like fish use their jaws to get a firm grip, then dive (or rise) to a depth where the pressure is deadly to their prey.",
		attributes: {
			agility: "d8",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12+4",
			vigor: "d12"
		}
		skills: {
			'Fighting': "d8",
			'Notice': "d6",
			'Swimming': "d10."
		}
		charisma: "0",
		pace: "0",
		parry: "6",
		toughness: "8",
		armor: "0",
		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 10."
			},
			{
				name: "Bite",
				description: "Str+d6."
			},
			{
				name: "Barotrauma",
				description: "A deep diver that succeeds in a grapple attack proceeds to dive, descending 10” each round. Most beings are poorly suited to intense pressures, such as those found underwater. For every 10” the fish dives, a character not breathing compressed air or in sealed armor suffers an automatic level of Fatigue. Compressed air breathers suffer Fatigue for every 50”."
			},
			{
				name: "Pressure Resistant",
				description: "Deep divers are immune to the effects of pressure and can change pressure rapidly with no adverse affects."
			}
		),
		book: currentBook,
		page: "p79"
	},{
		name: "Dragon",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "The name started as a reference to old fairy tales by interstellar travelers and stuck. It applies to all Komodo and larger-size lizards found throughout the galaxy. Most lizards are simply foul-tempered and quick to bite with jagged teeth, but a few have developed spit attacks—from acid to actual fire (created by mixing volatile chemicals from special glands).",
		attributes: {
			agility: "d6",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d4",
			'Intimidation': "d8",
			'Notice': "d6",
			'Shooting': "d8"
		}
		charisma: "0",
		pace: "8",
		parry: "4",
		toughness: "6 (1)",
		armor: "1",
		abilities: Array(
			{
				name: "Armor +1",
				description: "Scaly hide."
			},
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Explode",
				description: "When a dragon is killed, it’s organs rupture in a Large Burst Template. Everyone within is automatically hit by whatever type of breath weapon the dragon possessed."
			},
			{
				name: "Spit",
				description: "Cone Template. Victims may make an Agility roll at –2 versus the dragon’s Shooting to evade. If hit, the target suffers one of the following effects to his least armored location"
			},
			{
				name: "Acid",
				description: "3d6 damage and 2d6 damage at the start of the next two rounds if it isn’t washed off with at least a gallon of water."
			},
			{
				name: "Fire",
				description: "2d10 fire damage against their weakest armored location and may catch fire."
			},
			{
				name: "Poison Gas",
				description: "The poison can be any of the four types described under Hazards in Savage Worlds."
			}
		),
		book: currentBook,
		page: "p79"
	},{
		name: "Earthquake Beast",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Earthquake beasts are enormous, long necked herbivores, similar to the diplodocus, but with six legs and a tail almost half the length of their body. They weigh so much that when they walk, the ground literally shakes. They are notoriously stupid and shortsighted. Once they make their minds up to go somewhere, they walk through everything in their path—including buildings, vehicles, and creatures too slow to clear their stride.",
		attributes: {
			agility: "d6",
			smarts: "d4(A)",
			spirit: "d8",
			strength: "d12+4",
			vigor: "d10"
		}
		skills: {
			'Fighting': "d4",
			'Notice': "d4"
		}
		charisma: "0",
		pace: "6",
		parry: "4",
		toughness: "15",
		armor: "0",
		abilities: Array(
			{
				name: "Earthquake",
				description: "Characters within 36” of a moving earthquake beast must make an Agility roll each round (a free action) or fall prone. A roll of 1, regardless of the Wild Die, means the character is Shaken as well."
			},
			{
				name: "Gargantuan",
				description: "Attack rolls against these creatures are at +4 due to their immense size. Heavy Armor. Stomp damage d12+25, less opponent’s Size. This counts as a Heavy Weapon."
			},
			{
				name: "Hardy",
				description: "Not wounded by a second Shaken result."
			},
			{
				name: "Slow Nervous System",
				description: "The earthquake beast’s slow nervous system means it barely registers pain and shock. It adds +2 to recover from being Shaken and Wild Card versions of the monster ignore all wound penalties."
			},
			{
				name: "Size +8",
				description: "Earthquake beasts weigh as much as 160 tons."
			},
			{
				name: "Tail Slap",
				description: "An earthquake beast can sweep all opponents in its rear facing in a 3” long by 6” wide area. This is a standard Fighting attack, and damage is equal to the beast’s Strength–2."
			}
		),
		book: currentBook,
		page: "p80"
	},{
		name: "Eel, Giant",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "A number of worlds are home to massive eel-like creatures with sword-like teeth.",
		attributes: {
			agility: "d8",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d12+10",
			vigor: "d12"
		}
		skills: {
			'Fighting': "d10",
			'Intimidation': "d10",
			'Notice': "d10",
			'Stealth': "d6",
			'Swimming': "d10"
		}
		charisma: "0",
		pace: "0",
		parry: "7",
		toughness: "20",
		armor: "0",
		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 10."
			},
			{
				name: "Bite",
				description: "Str+d10."
			},
			{
				name: "Electric Shock",
				description: "Some species can discharge electricity. Given their tremendous size, this causes 5d6 damage to everything in contact with the eel (such as a grappled ship) and within a Large Burst Template. Only sealed Heavy Armor offers protection."
			},
			{
				name: "Gargantuan",
				description: "Heavy Armor, Heavy Weapon. Attacks by man-size creatures are made at +4."
			},
			{
				name: "Size (+12)",
				description: "Giant eels can reach lengths of over 100’ long."
			}
		),
		book: currentBook,
		page: "p80"
	},{
		name: "Emotor",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Emotors are semi-sentient, psionic creatures resembling furless lemurs. They have the unusual ability to crystallize their emotion into solid form. How and why they do this is a mystery, but they are hunted for their “emotion crystals,” which fetch high prices on the black market.",
		attributes: {
			agility: "d8",
			smarts: "d4",
			spirit: "d6",
			strength: "d8",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d6",
			'Notice': "d6",
			'Psionics': "d10"
		}
		charisma: "0",
		pace: "6",
		parry: "5",
		toughness: "3",
		armor: "0",
		abilities: Array(
			{
				name: "Crystallize Emotions",
				description: "Each emotor has 1d4 crystallized emotions protruding from its body. Removing them requires complex surgery (which most hunters don’t bother with) or killing the creature (which is much easier). Emotion crystals are eaten for the powerful effect of the emotion. Some examples are included below. The GM is encouraged to devise his own list of extra emotions. *Anger/Rage: The user immediately becomes Berserk (as per the Edge). The effects last 10 minutes before the user may try to calm himself.*Bravery: +2 to Fear tests for 10 minutes. *Calm: The user draws an extra initiative card and acts on the best for the next 10 minutes. This stacks with Level Headed. *Compassion: The user gains the Heroic Hindrance for 10 minutes. *Fear: The user becomes extremely jumpy and fearful. Fear tests are made at –2 and any rolls on the Fright Table are made at +2.*Hatred: The user has –2 Charisma and the Bloodthirsty Edge for the next 10 minutes.*Love: The user gains +2 Charisma for the next 10 minutes, and also the Major Pacifist Hindrance"
			},
			{
				name: "Psionics",
				description: "Emotors have 20 Power Points and the following powers"
			},
			{
				name: "Size –2",
				description: "Emotors are the size of lemurs."
			}
		),
		book: currentBook,
		page: "p80"
	},{
		name: "Energy Drainer",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Energy drainers have a central, bulbous sac surrounded by a myriad of long tentacles. The sac is filled with hydrogen, which allows the energy drainer to float on wind currents in the upper atmosphere. They have no mouth, but instead feed on electrical energy. Drainers float in packs of 3d6 individual creatures. They catch and prey on the bioelectrical signals of small creatures, but are also able to handle the vastly greater high-energy emissions of a starship’s engines or other machines. Once attached to such a device (such as a ship’s hull), they begin to leach energy at an alarming rate.",
		attributes: {
			agility: "d8",
			smarts: "d4(A)",
			spirit: "d10",
			strength: "d8",
			vigor: "d6"
		}
		skills: {
			'Notice': "d6",
			'Shooting': "d10"
		}
		charisma: "0",
		pace: "0",
		parry: "2",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Electrical Attack",
				description: "Energy drainers channel their own bioelectric energy into a deadly bolt (Range 4/8/16, Damage 3d6, RoF 1). If draining energy from a power source (such as an engine), they can fire bolts indefinitely. Otherwise, they may only fire as many bolts per day as their Vigor die."
			},
			{
				name: "Energy Drain",
				description: "When attached to a power source, the creature drains a day’s worth of energy or fuel every five minutes (and five creatures drain a day’s worth of energy every minute!)."
			},
			{
				name: "Flight",
				description: "Pace 2, Climb –3. When drainers sense powerful electricity, they draw forth an arc and “ride” it to the device at incredibly high speeds (Pace above is their normal “drifting” speed). Herds of the things often travel in on a single arc, slowing just before impact to attach themselves to the target’s hull or walls."
			},
			{
				name: "Immunity",
				description: "Energy drainers are immune to electricity and electrical attacks."
			}
		),
		book: currentBook,
		page: "p81"
	},{
		name: "Atomic Elemental",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Atomic elementals consist of crackling bluish-white nuclear energy living in or near stars or areas of extreme radiation. They cannot survive long outside their native environments where fuel is plentiful. When they travel, they are known to leech energy from fusion-powered starships, vehicles, or power plants they find along their way. Atomic elementals are spheres in their natural state, but can take on humanoid states when they wish to communicate. Energy elementals are swirling clouds or balls of intense energy, though they often take the shape of any beings they care to entreat. Elementals don’t speak, but can communicate by forming shapes, symbols, or simple words of pure energy. Travelers have said dealing with them is almost like talking to a hyper-intelligent toddler in a foreign language. All enemy elementals are extremely powerful creatures that should not be introduced into an encounter without some thought.",
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d10",
			strength: "d8",
			vigor: "d10"
		}
		skills: {
			'Fighting': "d6",
			'Intimidation': "d8",
			'Notice': "d8",
			'Shooting': "d10"
		}
		charisma: "0",
		pace: "8",
		parry: "5",
		toughness: "7",
		armor: "0",
		abilities: Array(
			{
				name: "Atomic Attack",
				description: "Atomic elementals can fire a wave of energy using a Cone Template, or fire balls of energy using any other size template, up to 50” distant (100 yards) at no range penalty. This uses their Shooting skill and causes 5d10 damage against a target’s weakest Armor. Any creature Shaken or wounded by the attack must make a Vigor roll or suffer radiation sickness (see Savage Worlds)."
			},
			{
				name: "Atomic Aura",
				description: "At the end of its movement, and at the creature’s will, all adjacent creatures suffer 3d10 damage from the elemental’s intense heat and radiation. Any creature Shaken or wounded by the attack must make a Vigor roll or suffer radiation poisoning (see Savage Worlds)."
			},
			{
				name: "Elemental",
				description: "No additional damage from called shots, Fearless, Immune to disease and poison."
			},
			{
				name: "Ethereal",
				description: "Atomic elementals are made of pure energy."
			},
			{
				name: "Flight",
				description: "Pace FTL, Climb 6. Atomic elementals may fly in any environment at the same speed as the setting’s standard FTL drives."
			},
			{
				name: "Invulnerability",
				description: "Energy elementals are invulnerable to all normal types of damage. They are susceptible to arcane attack forms (such as psionics)."
			},
			{
				name: "Leech",
				description: "Atomic elementals can only exist outside of their extreme conditions for a number of days equal to their Vigor, but can feed off nuclear reactions and radioactive material. Each day’s worth of fusion-based starship energy, or week’s worth of vehicular energy, takes the being a minute to consume and gives it another day of life outside its native environment."
			},
			{
				name: "Swipe",
				description: "Str+2d10."
			},
			{
				name: "Weakness (Special)",
				description: "Atomic elementals have no true Weakness other than their need for vast amounts of energy. This sets them up for scientific contraptions that isolate, drain, or overload their energy and disperse them. This might be accomplished by a scientist with access to theoretical materials and a Dramatic Task."
			}
		),
		book: currentBook,
		page: "p82"
	},{
		name: "Plasma Elemental",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Plasma elementals are humanoid creatures composed entirely of swirling, burning, super-heated gas. They are typically found only in the outer layers of suns or the cores of large planets.Energy elementals are swirling clouds or balls of intense energy, though they often take the shape of any beings they care to entreat. Elementals don’t speak, but can communicate by forming shapes, symbols, or simple words of pure energy. Travelers have said dealing with them is almost like talking to a hyper-intelligent toddler in a foreign language. All enemy elementals are extremely powerful creatures that should not be introduced into an encounter without some thought.",
		attributes: {
			agility: "d10",
			smarts: "d8",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d6",
			'Intimidation': "d8",
			'Notice': "d8",
			'Shooting': "d10"
		}
		charisma: "0",
		pace: "8",
		parry: "5",
		toughness: "6",
		armor: "0",
		abilities: Array(
			{
				name: "Elemental",
				description: "No additional damage from called shots, Fearless, Immune to disease and poison."
			},
			{
				name: "Energy Attack",
				description: "Plasma elementals can attack with a Cone Template, or fire balls of energy using any other size template, up to 25” distant (50 yards). This uses their Shooting skill and causes 3d10 damage against a target’s weakest Armor. Victims Shaken or wounded by such an attack may catch fire (see Savage Worlds)."
			},
			{
				name: "Ethereal",
				description: "Plasma elementals are made of pure energy."
			},
			{
				name: "Fiery Aura",
				description: "At the end of its movement, and at the creature’s will, all adjacent creatures suffer 2d10 damage from the elemental’s intense heat. Any creature Shaken or wounded by the attack must may catch fire (see Savage Worlds)."
			},
			{
				name: "Flight",
				description: "Plasma elementals fly at speeds up to 600 mph, and have a Climb of 5."
			},
			{
				name: "Invulnerability",
				description: "Plasma elementals are invulnerable to all kinetic and heat-based damage."
			},
			{
				name: "Swipe",
				description: "Str+2d10. Victims have a chance of catching fire."
			},
			{
				name: "Weakness",
				description: "Plasma elementals are somewhat vulnerable to anything that disrupts their charged state. Kinetic and fire-based weapons have no effect, but high-voltage electricity, EMPs, magnetism, and most other energy forms cause half-damage."
			}
		),
		book: currentBook,
		page: "p82"
	},{
		name: "Time Elemental",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Time elementals are beings made from the raw essence of space-time itself. They resemble gaunt humanoids with eyes that appear to be bottomless wells of total darkness—like black holes. Most are more interested in studying the point in time in which they have appeared than warring on the inhabitants. They might be guardians of the time stream, or simply manifest around anomalies such as black holes and rage against any intruder they find there. Energy elementals are swirling clouds or balls of intense energy, though they often take the shape of any beings they care to entreat. Elementals don’t speak, but can communicate by forming shapes, symbols, or simple words of pure energy. Travelers have said dealing with them is almost like talking to a hyper-intelligent toddler in a foreign language. All enemy elementals are extremely powerful creatures that should not be introduced into an encounter without some thought.",
		attributes: {
			agility: "d8",
			smarts: "d10",
			spirit: "d12",
			strength: "d8",
			vigor: "d10"
		}
		skills: {
			'Fighting': "d8",
			'Knowledge': "(All)",
			'Intimidation': "d8",
			'Notice': "d10"
		}
		charisma: "0",
		pace: "6",
		parry: "6",
		toughness: "7",
		armor: "0",
		abilities: Array(
			{
				name: "Elemental",
				description: "No additional damage from called shots, Fearless, Immune to disease and poison."
			},
			{
				name: "Ethereal",
				description: "Time elementals are made of pure energy."
			},
			{
				name: "Flicker",
				description: "Time elementals flicker rapidly in and out of time at random intervals. All attacks against them, even those of arcane nature, are made at –4."
			},
			{
				name: "Teleport",
				description: "Time elementals can teleport to any time or place as an action. They cannot extend this ability to others, nor can they carry items with them as they travel."
			},
			{
				name: "Time Control",
				description: "At the beginning of any round of combat, after cards have been dealt and determined but before anyone acts, the time elementals can make a group Spirit roll to reorder an Action Card per success and raise (except Jokers)."
			},
			{
				name: "Wither",
				description: "Time elementals attack by touch, causing 2d6 damage as they age and atrophy a target’s tissue. Armor applies normally, though the entity might attempt a called shot to touch raw flesh."
			}
		),
		book: currentBook,
		page: "p83"
	},{
		name: "Fisher Beetle",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Fisher beetles are large flying beetles with four long tentacles instead of legs. They hover silently over woodland areas, using their Infravision to detect the body heat of prey. Their name comes from their peculiar style of hunting. Rather than simply use their tentacles to grab prey, they dedicate one tentacle to holding a lure, be this a clump of plants or a small animal, and use it to lure the bait much as a fisherman does fish. Once satisfied the target is “hooked,” they use their other tentacles to grab it.",
		attributes: {
			agility: "d8",
			smarts: "d6(A)",
			spirit: "d10",
			strength: "d12+3",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d8",
			'Intimidation': "d8",
			'Notice': "d8",
			'Stealth': "d8"
		}
		charisma: "0",
		pace: "4",
		parry: "6",
		toughness: "12 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Fisher beetles have thin carapaces."
			},
			{
				name: "Bite",
				description: "Str+d8."
			},
			{
				name: "Flying",
				description: "Pace 12, Climb –1."
			},
			{
				name: "Infravision",
				description: "Halve penalties for poor lighting against heat-producing targets."
			},
			{
				name: "Large",
				description: "Attackers add +2 to attack rolls because of the beast’s size."
			},
			{
				name: "Size +4",
				description: "Fishers are 20’ across."
			},
			{
				name: "Tentacles",
				description: "The fisher’s long tentacles receive a +2 to grab their victims. They have a Reach of 4”."
			}
		),
		book: currentBook,
		page: "p83"
	},{
		name: "Glitch",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Glitches are extra-dimensional entities inhabiting hyperspace and attracted to the powerful emission of a starship’s FTL drive. They lurk in the hyperspace field surrounding the ship and inevitably get pulled into the ship’s systems. Once there, the glitches wreak havoc with various systems. Few glitches act maliciously—most seek only to escape back to hyperspace. Unfortunately, they are not overly intelligent and make their presence felt by flicking lights on and off, opening and closing automatic doors, and other such phenomena. Reports of ships possessed by ghosts are most likely glitch infested. Glitches have no language of their own but sometimes attempt to communicate by forwarding existing messages—which they sense as communication—to random addresses in the ship. This often leads to disaster as private or confidential information is shared. They resemble sparks of energy in their natural state, but can form into general shapes to communicate with other species.",
		attributes: {
			agility: "d8",
			smarts: "d4",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		}
		skills: {
			'Notice': "d8",
			'Stealth': "d10"
		}
		charisma: "0",
		pace: "0",
		parry: "2",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Accidental Mishap",
				description: "Each day the glitch is in the ship, draw a card from the Action Deck. If it’s a black face card, the glitch has burned out a vital system. Roll on the Critical Hit table. The ship suffers no actual wounds, however, just the effects of the Critical Hit. A crew result means it has caused an accident for one of the crew (electrocution, an airlock incident, or even a private message blasted to the entire ship). Treat a Chassis result as minor effects with no lasting damage."
			},
			{
				name: "Ghost In The Machine",
				description: "Any use of the ship’s systems suffers a –2 penalty due to the interference of the glitch, including gunnery, maneuvering, or jumping to hyperspace."
			},
			{
				name: "Removal",
				description: "Removing a glitch requires the crew to shut down every system on the ship except the FTL drive. Each 30 minutes a ship is powered down, the glitch makes a Smarts roll. If it succeeds, it locates the FTL drive and escapes back into hyperspace. A glitch will not exit a ship in normal space, even if the FTL drive is powered up, as normal space is instantly fatal to them. While the ship is powered down, the crew had best don spacesuits. Oxygen runs out and the temperature drops to below freezing in 10 minutes times the vessel’s Size (see Ship Size Table on page 41)."
			}
		),
		book: currentBook,
		page: "p83"
	},{
		name: "Grazer",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "The head of these large herbivores is a wide, flat lump of dense bone with no obvious features. Covering the head are millions of tiny pits, each an olfactory sensor. The eyes, which are small and suited only to close range work, are located on the underside of the head, along with an elephant-like trunk. Unlike an elephant, however, this is not a grasping appendage but the mouth and neck. While the grazer can only see what it’s eating, its keen olfactory pits remain alert for predators. Their head is actually a weapon, used in mating rituals and to butt predators. They have been known to severely damage vehicles, which they often see as a rival.",
		attributes: {
			agility: "d6",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d12+8",
			vigor: "d12"
		}
		skills: {
			'Fighting': "d8",
			'Notice': "d8"
		}
		charisma: "0",
		pace: "6",
		parry: "6",
		toughness: "18/20 (2/4)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2/+4",
				description: "Thick hide on the torso and legs (+2). Dense bony head (+4)."
			},
			{
				name: "Hardy",
				description: "Grazers do not suffer a wound from being Shaken twice."
			},
			{
				name: "Headbutt",
				description: "Str+d10. Heavy Weapon."
			},
			{
				name: "Huge",
				description: "Attackers add +4 to attack rolls against these beasts due to their size."
			},
			{
				name: "Size +8",
				description: "Grazers weigh 25,000 pounds."
			},
			{
				name: "Trample",
				description: "If a grazer takes a run action and moves in a straight line of at least 6”, it tramples everything in its path. Make an opposed Fighting vs Agility roll against all targets. Those who fail suffer Strength +d4 damage."
			}
		),
		book: currentBook,
		page: "p84"
	},{
		name: "Gremlin",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "The gremlins presented here aren’t the mystical creatures of fairy tales, but they have much the same effect on starships. These creatures are small, scaly humanoids about the size of small rats. They subsist on electricity, so should they get aboard vehicles or ships they chew through wires and other electronics that can quickly render even the largest ship unsound. The creatures are extremely resilient to chemicals and other vermin-control methods, and where there is one there are many (usually 2d20). The best way to purge a ship is to cut power to all electrical systems for a full week.",
		attributes: {
			agility: "d10",
			smarts: "d6",
			spirit: "d8",
			strength: "d4",
			vigor: "d6"
		}
		skills: {
			'Climbing': "d10",
			'Fighting': "d8",
			'Notice': "d8",
			'Repair': "d6",
			'Stealth': "d10"
		}
		charisma: "0",
		pace: "6",
		parry: "6",
		toughness: "2",
		armor: "0",
		abilities: Array(
			{
				name: "Bite or Claws",
				description: "Str."
			},
			{
				name: "Sabotage",
				description: "Every day a ship or vehicle is infested with gremlins, roll a Critical Hit (with no accompanying wound, and reroll Wrecked results). A crew result means an accident for one of the personnel—such as electrocution (2d6 damage), a faulty airlock, a spacesuit has a hole in it, etc. Treat a Chassis result as damage to a minor system, giving a –2 penalty to relevant Knowledge or Piloting rolls until it is repaired."
			},
			{
				name: "Size –3",
				description: "Gremlins are four inches tall."
			},
			{
				name: "Small",
				description: "Attackers subtract 2 from their rolls due to the creatures’ small size."
			}
		),
		book: currentBook,
		page: "p84"
	},{
		name: "Harpooner",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Harpooners are large slugs with what looks like a horn growing from the front of their heads. The horn is, in fact, a specialized weapon. Connected to the body by a thin but tough length of sinew, the harpooner can build up internal pressure within its head, which it then releases, firing out the horn and trailing sinew. When it strikes flesh, the barbed horn sticks fast. The harpooner then retracts the harpoon and whatever it has struck to its waiting mouth. Harpooners crawl into small nooks and crannies when they are young and remain there for the rest of their lives, growing only as much as the hole allows. If attacked, the things withdraw their head back into the hole.",
		attributes: {
			agility: "d4",
			smarts: "d4(A)",
			spirit: "d8",
			strength: "d12",
			vigor: "d10"
		}
		skills: {
			'Fighting': "d4",
			'Notice': "d6",
			'Shooting': "d10"
		}
		charisma: "0",
		pace: "—",
		parry: "4",
		toughness: "9",
		armor: "0",
		abilities: Array(
			{
				name: "Amorphous Body",
				description: "Called shots have no effect on harpooners. Bullets cause normal damage (mostly from hydrostatic shock), but other non-powered piercing weapons such as knives or arrows don’t."
			},
			{
				name: "Bite",
				description: "Str+d6."
			},
			{
				name: "Harpoon",
				description: "Range 3/6/12, Damage Str+d6, RoF 1. Reloading a missed shot takes one round. If a victim suffers a Shaken or wound result, he must make an opposed Strength roll. The harpooner drags the victim 2” per success and raise. The connecting sinew has Toughness 8. Severing it requires the attacker to inflict a wound, but this does not affect the harpooner, who grows a new harpoon in 1d6 days."
			},
			{
				name: "Size +2",
				description: "Harpooners can grow to as much as 30’. This specimen is a mere 9’ long"
			}
		),
		book: currentBook,
		page: "p85"
	},{
		name: "Haze Barnacle",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Haze barnacles are molluscs, spending much of their time hunkered down in their thick shells. A series of fine nozzles on the top of the shell produces puffs of purple gas (the creature’s exhalations). When prey nears, the creature puffs out a cloud of deadly poisonous gas. Only when the victims have stopped moving does the barnacle slowly crawl onto them and begin feasting.",
		attributes: {
			agility: "d4",
			smarts: "d4(A)",
			spirit: "d8",
			strength: "d4",
			vigor: "d10"
		}
		skills: {
			'Fighting': "d6",
			'Notice': "d6",
			'Stealth': "d6"
		}
		charisma: "0",
		pace: "2",
		parry: "5",
		toughness: "8 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Shell."
			},
			{
				name: "Poison (–2)",
				description: "Small Burst Template. Victims who fail their Vigor roll die in 2d6 minutes. Characters in completely sealed suits are immune."
			},
			{
				name: "Size –1",
				description: "Haze barnacles measure 2’ across and are 6” thick."
			},
			{
				name: "Slow",
				description: "Barnacles cannot run"
			}
		),
		book: currentBook,
		page: "p85"
	},{
		name: "Hugger",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Huggers feed off carbon dioxide emissions, such as those found in breathing exhalations. They attack by leaping at the face of their prey and smothering them into unconsciousness. They then secrete chemicals which keep the prey unconscious until the victim eventually dies from dehydration. The spider-like creatures have no fangs, eyes, or mouths. They have specialized vents, pores, and tiny hairs that work together to help it locate prey and absorb food.",
		attributes: {
			agility: "d10",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d6",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d8",
			'Notice': "d8",
			'Stealth': "d10"
		}
		charisma: "0",
		pace: "8",
		parry: "6",
		toughness: "4",
		armor: "0",
		abilities: Array(
			{
				name: "Size –2",
				description: "Huggers are 2’ across."
			},
			{
				name: "Small",
				description: "Attackers subtract 2 from their rolls due to the creatures’ small size."
			},
			{
				name: "Smother",
				description: "If a hugger gets a raise on its Fighting roll, it has managed to secure a hold around the victim’s face. Treat this as a Grapple, except the victim gains a level of Fatigue each round the grapple is maintained. Once Incapacitated, the prey remains that way until the hugger is removed or the victim dies."
			},
			{
				name: "Unusual Sense",
				description: "Huggers can sense carbon dioxide emission with pinpoint accuracy. Treat this as Infravision, with the hugger halving penalties for darkness against living creatures not breathing through any sort of rebreather or enclosed air supply system."
			}
		),
		book: currentBook,
		page: "p85"
	},{
		name: "Warrior (Hunters)",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "These aliens are insectoids armored in thick dark bone or shell carapace. They have no discernible eyes but seem to see with senses not yet understood. Their primary weapons are powerful, extendable jaws and sharp claws, and long tails tipped with barbed stingers. The things have only the most basic sentience—or perhaps share a sentience with their insect-like hive. They are skilled hunters and use simple but effective tactics to divide and conquer their prey.",
		attributes: {
			agility: "d10",
			smarts: "d8(A)",
			spirit: "d10",
			strength: "d12+3",
			vigor: "d8"
		}
		skills: {
			'Climbing': "d8",
			'Fighting': "d8",
			'Intimidation': "d10",
			'Notice': "d8",
			'Stealth': "d12"
		}
		charisma: "0",
		pace: "6",
		parry: "6",
		toughness: "8 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick plates."
			},
			{
				name: "Bite and Claws",
				description: "Str+d6."
			},
			{
				name: "Fearless",
				description: "Immune to Fear and Intimidation."
			},
			{
				name: "Hardy",
				description: "Multiple Shaken results do not cause a wound."
			},
			{
				name: "Paralysis",
				description: "Anyone Shaken or wounded by a tail attack must make a Vigor roll or be paralyzed for 2d6 rounds."
			},
			{
				name: "Tail",
				description: "Str+d8, Reach 1, AP 2, –2 to Fighting when used."
			}
		),
		book: currentBook,
		page: "p86"
	},{
		name: "Queen (Hunters)",
		wildcard: 1,
		image: "",
		tags: "",
		blurb: "At the center of the hive lives the queen. Although her primary function is to lay eggs, she is a voracious hunter and fearless in defending her clutch. The queen has six legs and looks something like a cross between a beetle and a massive mantis.These aliens are insectoids armored in thick dark bone or shell carapace. They have no discernible eyes but seem to see with senses not yet understood. Their primary weapons are powerful, extendable jaws and sharp claws, and long tails tipped with barbed stingers. The things have only the most basic sentience—or perhaps share a sentience with their insect-like hive. They are skilled hunters and use simple but effective tactics to divide and conquer their prey.",
		attributes: {
			agility: "d8",
			smarts: "d8(A)",
			spirit: "d12",
			strength: "d12+6",
			vigor: "d12"
		}
		skills: {
			'Fighting': "d10",
			'Intimidation': "d10",
			'Notice': "d8",
			'Stealth': "d8"
		}
		charisma: "0",
		pace: "10",
		parry: "7",
		toughness: "16 (4)",
		armor: "4",
		abilities: Array(
			{
				name: "Armor +4",
				description: "Thick plates."
			},
			{
				name: "Bite and Claws",
				description: "Str+d10, AP 3."
			},
			{
				name: "Fearless",
				description: "Immune to Fear and Intimidation."
			},
			{
				name: "Hardy",
				description: "Multiple Shaken results do not cause a wound."
			},
			{
				name: "Large",
				description: "Attackers add +2 to attack rolls because of the beast’s size."
			},
			{
				name: "Paralysis (–4)",
				description: "Anyone Shaken or wounded by a tail attack must make a Vigor roll or be paralyzed for 2d6 rounds."
			},
			{
				name: "Size +4",
				description: "The queen stands 14’ high and is typically 20’ or more long. She has a narrow, segmented body."
			},
			{
				name: "Tail",
				description: "Str+d10, +1 Reach, AP 4, Heavy Weapon, –2 to Fighting when used."
			}
		),
		book: currentBook,
		page: "p86"
	},{
		name: "Impaler",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Impalers are among the top carnivores on their homeworld. They have four muscular legs and a thick tail forming their lower body. From the front of the torso protrudes a thick vertical “neck” which ends in a huge, forward-facing maw filled with rows of razor-sharp triangular teeth. The neck actually comprises the creature’s head and upper body, and holds the stomach, lungs, and heart. Extending from the lower part of the neck are six arms, each tipped with four spear-like claws arranged in a square. Impalers attack by stabbing prey with their claws, then attacking with their fearsome teeth. Despite having six arms, they are quite short in comparison to the beast, and it may only attack one target at a time with them. However, it uses all six independently.",
		attributes: {
			agility: "d6",
			smarts: "d6(A)",
			spirit: "d10",
			strength: "d10",
			vigor: "d10"
		}
		skills: {
			'Fighting': "d8",
			'Intimidation': "d10",
			'Notice': "d6",
			'Stealth': "d4"
		}
		charisma: "0",
		pace: "8",
		parry: "6",
		toughness: "12 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick, leathery hide."
			},
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Claws",
				description: "Str+d4. Can make up to six attacks on a single target each round at no penalty."
			},
			{
				name: "Size +3",
				description: "Impalers stand over 10’ tall."
			},
			{
				name: "Stab and Grab",
				description: "An impaler scoring a raise with at least two claw attacks has impaled its foe. The beast may then attack with its bite, gaining +2 to that attack and damage."
			}
		),
		book: currentBook,
		page: "p86"
	},{
		name: "Insect, Giant",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Massive insects can be found on many worlds, living in massive colonies of a few dozen to millions of creatures. They aren’t particularly dangerous in small numbers, but most travel in herds of 2d20, and many are connected through pheromones or even psionics to a queen that can direct more creatures to a perceived threat.",
		attributes: {
			agility: "d8",
			smarts: "d4(A)",
			spirit: "d10",
			strength: "d10",
			vigor: "d10"
		}
		skills: {
			'Climbing': "d6",
			'Fighting': "d6",
			'Notice': "d8",
			'Stealth': "d6"
		}
		charisma: "0",
		pace: "6",
		parry: "5",
		toughness: "11 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Carapace."
			},
			{
				name: "Bite",
				description: "Str+d6, AP 2."
			},
			{
				name: "Burrow (4)",
				description: "Giants insects can move through soil at Pace 4."
			},
			{
				name: "Size +2",
				description: "This specimen is 9’ long and slightly taller than a man at the top of its head. Smaller and larger specimens may be found."
			}
		),
		book: currentBook,
		page: "p87"
	},{
		name: "Ironclaw",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Crews jokingly call this ape-like horror the “lesser spotted ironclaw,” fooling less experienced crew members into believing there is a greater spotted ironclaw. The first thing anyone notices about the horror is its diamond-like claws, but it also has the ability to change its color by flooding different combinations of multi-hued hairs covering its body.",
		attributes: {
			agility: "d8",
			smarts: "d6(A)",
			spirit: "d10",
			strength: "d12+2",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d8",
			'Notice': "d8",
			'Stealth': "d8"
		}
		charisma: "0",
		pace: "8",
		parry: "6",
		toughness: "9",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Chameleon",
				description: "If the ironclaw has some cover or darkness and moves half its Pace or less, it gains +4 to Stealth rolls."
			},
			{
				name: "Claws",
				description: "Str+d8, AP 2."
			},
			{
				name: "Improved Frenzy",
				description: "Ironclaws may make two Fighting attacks each action at no penalty."
			},
			{
				name: "Leap",
				description: "The creature doubles jumping distances."
			},
			{
				name: "Pounce",
				description: "The beast can make a special Wild Attack if it can jump at least 2” to the target, adding +4 to attack and damage instead of +2 (Parry is still just -2)."
			},
			{
				name: "Size +3",
				description: "Adult ironclaws weigh over 600 pounds."
			}
		),
		book: currentBook,
		page: "p87"
	},{
		name: "Logger",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Loggers are amphibious brown slugs that look like logs when floating in water. Although carnivorous, they are not particularly skilled hunters. They spend much of their time drifting near the shore of lakes. Loggers have primitive eyes and great difficulty detecting anything over a few yards away—they simply lie still and wait for their unsuspecting prey to come to them.",
		attributes: {
			agility: "d4",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d6",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d6",
			'Intimidation': "d8",
			'Notice': "d4",
			'Stealth': "d10",
			'Swimming': "d4"
		}
		charisma: "0",
		pace: "2",
		parry: "5",
		toughness: "7",
		armor: "0",
		abilities: Array(
			{
				name: "Amphibious",
				description: "Pace 3 in water."
			},
			{
				name: "Bite",
				description: "Str+d6."
			},
			{
				name: "Dependency (Water)",
				description: "The creature must immerse itself in water at least one hour out of every 24 or suffer Fatigue each day until Incapacitated. The day after that, they perish."
			},
			{
				name: "Size +1",
				description: "Loggers measure 8’ in length."
			}
		),
		book: currentBook,
		page: "p87"
	},{
		name: "Monkeys",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "A wide variety of monkey-like creatures dot the cosmos. Below are three of the most common, all of which use the same basic profile. Jester monkeys mimic humanoid behavior and have learned to handle basic tools— including weapons—they’ve seen others use. Lobber monkeys have strong throwing arms and hurl rocks at their foes. Maulers are typical monkeys but with scaly skin, longer claws, and are extremely aggressive.",
		attributes: {
			agility: "d8",
			smarts: "d10(A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d6"
		}
		skills: {
			'Climbing': "d10",
			'Fighting': "d6",
			'Intimidation': "d8",
			'Notice': "d10",
			'Swimming': "d6",
			'Throwing': "d6"
		}
		charisma: "0",
		pace: "6",
		parry: "5",
		toughness: "4",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2 (Mauler)",
				description: "Maulers have hard, scaly skin (Toughness 6 (2))."
			},
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Claws (Mauler)",
				description: "Str+d6."
			},
			{
				name: "Climb",
				description: "Monkeys can move at their full Pace in trees or similar environments and don’t normally need to make Climbing rolls."
			},
			{
				name: "Leap",
				description: "Double jumping distances."
			},
			{
				name: "Lob (Lobber Monkeys)",
				description: "Lobbers are excellent marksmen. They have Throwing d10 and cause Str+d6 damage with the heavy stones they’ve learned to hurl. They often strike from high in the branches where they are difficult to spot, and have a reserve of heavy stones lodged in strategic positions."
			},
			{
				name: "Mimicry (Jester Monkeys)",
				description: "Jester monkeys can use simple tools (such as firearms) if they’ve seen humans use them. Their skill with such devices is a flat d4. They don’t have the sophistication to actually reload, switch firing modes, etc."
			},
			{
				name: "Size –1",
				description: "Monkies are about 4’ tall."
			}
		),
		book: currentBook,
		page: "p87"
	},{
		name: "Mucus Frog",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Mucus frogs have large, bloated bodies with primitive forearms and stubby tails. Three eyestalks sit equidistant on the top of their heads. Their jaws are wide and powerful, and allow them to spit balls of sticky, suffocating mucus at their prey.",
		attributes: {
			agility: "d8",
			smarts: "d4(A)",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d4",
			'Notice': "d8",
			'Shooting': "d10",
			'Stealth': "d6",
			'Swimming': "d6"
		}
		charisma: "0",
		pace: "4",
		parry: "4",
		toughness: "6",
		armor: "0",
		abilities: Array(
			{
				name: "Amphibious",
				description: "Pace 6 in water."
			},
			{
				name: "Dependency (Water)",
				description: "The frogs must immerse in water at least one hour out of every 24 or suffer Fatigue each day until they perish."
			},
			{
				name: "Leap",
				description: "Doubles jumping distances."
			},
			{
				name: "Mucus",
				description: "Range 3/6/12. If the frog scores a raise on its Shooting roll, the mucus strikes the target’s face and hardens instantly. Victims suffer a level of Fatigue at the start of each round until they die or the mucus is removed. Removing the mucus requires a Strength roll at –4, and it has a Toughness of 6."
			}
		),
		book: currentBook,
		page: "p88"
	},{
		name: "Needlebush",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Not all carnivores are animals. Needlebushes are similar in appearance to cacti and their thick, waxy coating is covered in thousands of small pores. When a creature touches the bark, whether brushing up against it or to feast on the plant, it launches poisonous needles from the holes. The plant cannot limit its attack to the area touched, and so fires spines in a circular pattern. The needlebush uses its extensive root network to feed on the decomposing flesh of its victims.",
		attributes: {
			agility: "d4",
			smarts: "d4",
			spirit: "d6",
			strength: "d6",
			vigor: "d8"
		}
		skills: {
			'Notice': "d6"
		}
		charisma: "0",
		pace: "0",
		parry: "2",
		toughness: "9 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Needlebushes are protected by thick bark."
			},
			{
				name: "Plant",
				description: "Called shots do no extra damage. Bullets, arrows, and other piercing weapons inflict half damage. Immune to Tests of Will."
			},
			{
				name: "Poison",
				description: "Anyone Shaken or wounded by the spines must make a Vigor roll or die in 2d6 rounds."
			},
			{
				name: "Size +1",
				description: "Needlebushes are taller than an average human."
			},
			{
				name: "Thorns",
				description: "A needlebush fires a volley of thorns every round it senses prey within a Large Burst Template centered on itself. Everything within suffers 2d4 damage."
			}
		),
		book: currentBook,
		page: "p88"
	},{
		name: "Orthocone",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Orthocones are long, cylindrical sea creatures with tentacles around their mouths. They move through the sea by sucking in water and pushing it out through special holes, propelling themselves at great speeds.",
		attributes: {
			agility: "d6",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12+4",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d8",
			'Intimidation': "d6",
			'Notice': "d8",
			'Stealth': "d8",
			'Swimming': "d10"
		}
		charisma: "0",
		pace: "0",
		parry: "6",
		toughness: "13 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 10. Can “run” using a d10 running die."
			},
			{
				name: "Armor +2",
				description: "Thick shell."
			},
			{
				name: "Bite",
				description: "Str +d6."
			},
			{
				name: "Large",
				description: "Attackers add +2 to attack rolls because of the beast’s size."
			},
			{
				name: "Size +6",
				description: "Orthocones are 40 feet long."
			},
			{
				name: "Tentacles",
				description: "An orthocone may make up to four attacks each round. On a raise, the creature has grappled the victim. An entangled victim may only attempt an opposed Strength roll each round to escape. Once grappled, the orthocone does its Str+d6 damage automatically by crushing with its arms and rending with its beak. A victim killed by an orthocone ’ tentacles is usually ripped in half. Each tentacle is Toughness 10 (2)."
			}
		),
		book: currentBook,
		page: "p89"
	},{
		name: "Pendulum Bird",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Pendulum birds are large avians, capable of flight only because of the dense atmosphere and low gravity of their homeworld. Some time during their evolution, their legs fused into a single limb and their feet into a solid lump of bone. This lack of limbs mean they spend their entire lives in the air, eating and mating on the wing. When attacking, they swoop down on their prey and unleash their bony leg, which is strong enough to smash armor plating and bone. Once the prey is dead, they make a series of dives to snatch at flesh with their sharp beaks.",
		attributes: {
			agility: "d10",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12+2",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d8",
			'Notice': "d6"
		}
		charisma: "0",
		pace: "0",
		parry: "6",
		toughness: "6",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Bony Limb",
				description: "Str+d8. Any creature struck must make an Agility roll or be knocked prone."
			},
			{
				name: "Flying",
				description: "Pace 12, Climb 1."
			},
			{
				name: "Low Gravity",
				description: "–1 Toughness."
			},
			{
				name: "Size +1",
				description: "Pendulum birds have a wingspan of 30’ and a 6’ long body."
			}
		),
		book: currentBook,
		page: "p89"
	},{
		name: "Pentamouth",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "A pentamouth has a thick, knobby, cylindrical body which ends in five long necks, each ending in a large “head” with a tooth-filled mouth. Each head contains rudimentary visual organs but no brain—which is found in the central body. Pentamouths are slow-moving and prefer to lie in low burrows and wait for prey to pass by. They can sense vibrations within five yards.",
		attributes: {
			agility: "d6",
			smarts: "d4(A)",
			spirit: "d8",
			strength: "d10",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d6",
			'Intimidation': "d8",
			'Notice': "d6",
			'Stealth': "d10"
		}
		charisma: "0",
		pace: "2",
		parry: "5",
		toughness: "8",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d6, Reach 1."
			},
			{
				name: "Multiple Limbs",
				description: "Each head may make one Fighting roll without occurring a multi-action penalty. However, only two heads may attack a single foe."
			},
			{
				name: "Size +2",
				description: "Pentamouths are very dense. Most adults measure 6’ in length and 3’ in diameter."
			}
		),
		book: currentBook,
		page: "p89"
	},{
		name: "Possessor",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Possessors are non-corporeal alien beings resembling insubstantial shimmering colors in their natural form. They have the ability to take over a sentient body, which they can then use as their own. Some species seek only to learn about their host’s race. Others are more malicious.",
		attributes: {
			agility: "d8",
			smarts: "d10",
			spirit: "d10",
			strength: "d4",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d4",
			'Notice': "d8",
			'Stealth': "d12"
		}
		charisma: "0",
		pace: "6",
		parry: "4",
		toughness: "6",
		armor: "0",
		abilities: Array(
			{
				name: "Ethereal",
				description: "Possessors are beings of pure psychic energy."
			},
			{
				name: "Immunities",
				description: "Possessors are immune to cold, heat, radiation, poison, and disease. They do not require air, food, or water to survive."
			},
			{
				name: "Possess",
				description: "A possessor tries to possess its opponent’s body with an opposed Spirit roll. With success, the possessor gains complete control of its host’s body. The victim may attempt to force the alien out every hour (another opposed Spirit roll). If the host is rendered unconscious, the possessor is forced to flee the body immediately."
			},
			{
				name: "Skill Use",
				description: "Possessors have access to their host’s skills and Edges."
			}
		),
		book: currentBook,
		page: "p89"
	},{
		name: "Psi Blocker",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Psi blockers are green slug-like creatures with the unusual ability to dampen psionics. They are highly sought after by those who must deal with psionicists regularly.",
		attributes: {
			agility: "d4",
			smarts: "d4(A)",
			spirit: "d12",
			strength: "d4",
			vigor: "d6"
		}
		skills: {
			'Notice': "d6",
			'Stealth': "d8"
		}
		charisma: "0",
		pace: "2",
		parry: "2",
		toughness: "1",
		armor: "0",
		abilities: Array(
			{
				name: "Dampen Psionics",
				description: "Any psionicist within 10 yards (5”) of a psi blocker has –4 to his Psionics roll. Anyone touching a psi blocker has the benefits of the Improved Arcane Resistance Edge."
			},
			{
				name: "Size –4",
				description: "Psi boosters are 6 inches long and 2” thick."
			},
			{
				name: "Tiny",
				description: "Attackers subtract 4 from their rolls due to the creature’s small size."
			}
		),
		book: currentBook,
		page: "p90"
	},{
		name: "Psi Booster",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Psi boosters are small, squid-like entities. Although they are not truly psionic, they possess the remarkable ability to channel and boost psionic powers. The creatures are parasites, allowing their host to use their ability in return for taking sustenance from him. Aside from the host having to eat 25% more food than usual to maintain his energy levels, they are harmless. Psi boosters attach to the back of the host’s head, sinking a thick tentacle through the back of the skull (an automatic wound), which intertwines around the spinal cord.  The creatures know who has psionic powers and never attach to non-psionicists.",
		attributes: {
			agility: "d6",
			smarts: "d6(A)",
			spirit: "d12",
			strength: "d6",
			vigor: "d6"
		}
		skills: {
			'Notice': "d6"
		}
		charisma: "0",
		pace: "2",
		parry: "2",
		toughness: "3",
		armor: "0",
		abilities: Array(
			{
				name: "Hard To Remove",
				description: "Unless the host dies, psi boosters are loathe to leave a healthy body. Removing one requires complex surgery and a Healing roll at –4."
			},
			{
				name: "Psionic Boost",
				description: "Each raise on a psionics roll, reduces the Power Point cost by one (min zero). The psionicist must have the points necessary to use the power before he rolls."
			},
			{
				name: "Size –2",
				description: "Psi boosters are 2’ long and 2” thick."
			},
			{
				name: "Small",
				description: "Attackers subtract 2 from their rolls due to the creatures’ small size."
			}
		),
		book: currentBook,
		page: "p90"
	},{
		name: "Puppet Master",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "There are more ways to conquer a race than blasting it to atoms with superior firepower. Puppet masters are small spiderlike creatures with a human eye in the centre of their back. They are biotechnology tools, used to control important people, attaching themselves to the spinal cord of sentient beings so they can monitor and control the victim’s thoughts.",
		attributes: {
			agility: "d4",
			smarts: "d10",
			spirit: "d12",
			strength: "—",
			vigor: "d8"
		}
		skills: {
			'Notice': "d6"
		}
		charisma: "0",
		pace: "4",
		parry: "2",
		toughness: "2",
		armor: "0",
		abilities: Array(
			{
				name: "Hard to Remove",
				description: "Puppet masters would rather see their victim die than break free of their control. Surgically removing a puppet master requires a Healing roll at –4. With a failure, the puppet master makes a Psionics roll opposed by the victim’s Spirit. Each success and raise lowers the victim’s Smarts by 1 die as it destroys the brain as an act of revenge. A victim reduced to zero Smarts is a vegetable. The same applies if the creature is ever wounded—though it only has one attempt to destroy its victim’s brain before it dies."
			},
			{
				name: "Puppet",
				description: "If a puppet master gets to the back of a victim’s neck, usually while he’s asleep, it inserts its tendrils into the spinal column and makes an opposed Spirit roll. Once attached, the puppet is in complete control of its victim, gaining access to all his skills, memories, and even psionic powers (if the host has them). The host can never break free unless someone removes the puppet master."
			},
			{
				name: "Size –4",
				description: "Puppet masters are four inches in diameter."
			},
			{
				name: "Tiny",
				description: "Attackers subtract 4 from their rolls due to the puppet master’s small size."
			}
		),
		book: currentBook,
		page: "p91"
	},{
		name: "Quadrapus",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "A quadrapus is vaguely similar in appearance to a four-armed octopus. It has a squarish head with an eye on each side, a beak on the underside, and four long tentacles. Unlike the octopus, however, the quadrapus lives on land. The quadrapus is a floater, rather than a flyer or glider. It drifts in the air currents of its low gravity world, expelling jets of air sucked in through its beak to retain its height. Quadrapuses are not the smartest of hunters, and simply drift along dangling their tentacles along the ground and lunging at anything trying to avoid their grasp. A quadrapus attacks by either slapping its prey or grappling with it. A quadrapus may take up to four different actions each round with its tentacles, either slapping or grappling at no multi-action penalty.",
		attributes: {
			agility: "d6",
			smarts: "d4(A)",
			spirit: "d8",
			strength: "d10",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d6",
			'Intimidation': "d6",
			'Notice': "d8",
			'Stealth': "d6"
		}
		charisma: "0",
		pace: "0",
		parry: "5",
		toughness: "8",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Floater",
				description: "Pace 4; Climb –2."
			},
			{
				name: "Size +2",
				description: "These beasts measure 20’ long from head to tentacle-tip."
			},
			{
				name: "Tentacles",
				description: "Str+d4, Reach 1, or grapple. With a raise on a grapple, the victim is entangled and may only attempt an opposed Strength roll each round to escape. Once grappled, the quadrapus does its Strength+d4 damage automatically by crushing with its arms and rending with its beak. A victim killed by an quadrapus’ tentacles is usually ripped in half."
			}
		),
		book: currentBook,
		page: "p91"
	},{
		name: "Radbeast",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Radbeasts are silicon-based life forms that resemble a slithering collection of small rocks with no discernible limbs. Indeed, they have no discernible features of any sort. They do have sensory organs, but these are attuned to heat rather than light. They actually eat rock, digesting it with powerful acids and using osmosis to transfer the resulting paste to their bodies. Through some quirk of chemistry, they cannot dissolve diamonds. In certain systems they are used as diamond miners. The radbeasts dissolve the stone around the gem, leaving behind raw diamonds for collection later.",
		attributes: {
			agility: "d6",
			smarts: "d4(A)",
			spirit: "d8",
			strength: "d10",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d4",
			'Notice': "d6",
			'Stealth': "d10"
		}
		charisma: "0",
		pace: "4",
		parry: "4",
		toughness: "10 (4)",
		armor: "4",
		abilities: Array(
			{
				name: "Acid",
				description: "If forced to fight, radbeasts rear up and plop forward in an attempt to grapple. If successful, the victim suffers 3d6 damage each round it’s maintained. Armor and other items lose one point of protection each round until dissolved. Given time, a rad beast can eat through a starship’s hull."
			},
			{
				name: "Armor +4",
				description: "Thick, stony body."
			},
			{
				name: "Immunity (Radiation)",
				description: "Radbeasts suffer no harm from radiation."
			},
			{
				name: "Infravision",
				description: "Radbeasts halve darkness penalties for attacking heat-producing targets (round down)."
			},
			{
				name: "Radiation",
				description: "Radbeasts eat all manner of rock, but favor radioactive minerals. As an action, they can project an intense radiation field around their bodies as a form of defense. Any creature within a Medium Burst Template centered on the beast must make a Vigor roll or suffer a level of Fatigue. Any character Incapacitated by this attack and survives, or who rolls a 1 on his Vigor die, regardless of Wild Die, has contracted radiation sickness (see Savage Worlds)."
			}
		),
		book: currentBook,
		page: "p91"
	},{
		name: "Scoopjaw",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Scoopjaws are scaled quadrupedal, hippolike creatures of immense size with jaws wide enough to swallow humans whole. They are truly massive—the size of six-story houses— territorial, and aggressive, especially during mating season.",
		attributes: {
			agility: "d8",
			smarts: "d8(A)",
			spirit: "d8",
			strength: "d12+10",
			vigor: "d12"
		}
		skills: {
			'Fighting': "d8",
			'Intimidation': "d10",
			'Notice': "d8",
			'Stealth': "d8"
		}
		charisma: "0",
		pace: "8",
		parry: "6",
		toughness: "20",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d10. Heavy Weapon."
			},
			{
				name: "Gargantuan",
				description: "Heavy Armor, Heavy Weapon. Attacks by man-size creatures are made at +4."
			},
			{
				name: "Hardy",
				description: "Not wounded by a second Shaken result."
			},
			{
				name: "Improved Frenzy",
				description: "May make two attacks each round at no penalty."
			},
			{
				name: "Size +12",
				description: "Over 60’ tall."
			},
			{
				name: "Swallow",
				description: "If the creature scores a raise on its Fighting roll against an opponent of Size+4 or smaller, it has swallowed it whole. Located at the back of its mouth are several sets of powerful secondary jaws which act as a grinder. The victim suffers Str+d10 damage each round the scoopjaw lives."
			}
		),
		book: currentBook,
		page: "p92"
	},{
		name: "Sentient Vehicle",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Occasionally, starships, vehicles, or walkers develop sentience just like robots or androids. Most of these remain quiet, listening to their hosts and continuing to learn. A few become malicious, eradicating their crews and going rogue if such a thing is possible given their particular circumstances. Use the statistics for the appropriate vehicle. The AI has a Smarts and Spirit of at least d8.",
		attributes: {
			agility: "-",
			smarts: "-",
			spirit: "-",
			strength: "-",
			vigor: "-"
		}
		skills: {
			
		}
		charisma: "-",
		pace: "-",
		parry: "-",
		toughness: "-",
		armor: "-",
		abilities: Array(
		),
		book: currentBook,
		page: "p92"
	},{
		name: "Shock Ray",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Shock rays are large fish with massive “wings” and long tails, just like Terran rays. This variety relies on electrical shocks to stun their prey rather than stingers. On low or zero-gravity worlds, they might be fliers instead (Flight 12”, Climb 0).",
		attributes: {
			agility: "d10",
			smarts: "d6(A)",
			spirit: "d10",
			strength: "d6",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d8",
			'Notice': "d8",
			'Swimming': "d8"
		}
		charisma: "0",
		pace: "0",
		parry: "6",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 8."
			},
			{
				name: "Electric Discharge",
				description: "As a free action, but never two rounds in a row, the shock ray can discharge a powerful electric field. Anyone within a Medium Burst Template centered on the ray must make a Vigor roll at –2 or be stunned. Stunned victims  are Shaken and cannot attempt to recover for 1d6 rounds."
			},
			{
				name: "Infravision",
				description: "Shock rays halve penalties for poor lighting when attacking heatproducing targets."
			},
			{
				name: "Tail Lash",
				description: "Str +d6, AP 2, Reach 1."
			}
		),
		book: currentBook,
		page: "p92"
	},{
		name: "Shredder",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Shredders are large lizards with muscular arms, huge teeth, and razor-sharp claws. One bite is usually enough to disable most prey. They rely on pure speed for hunting and are typically solitary creatures.",
		attributes: {
			agility: "d6",
			smarts: "d8",
			spirit: "d8",
			strength: "d12+6",
			vigor: "d10"
		}
		skills: {
			'Fighting': "d6",
			'Intimidation': "d8",
			'Notice': "d6",
			'Stealth': "d6"
		}
		charisma: "0",
		pace: "10",
		parry: "5",
		toughness: "14",
		armor: "0",
		abilities: Array(
			{
				name: "Bite and Claws",
				description: "Str+d8."
			},
			{
				name: "Fleet-Footed",
				description: "d10 running die."
			},
			{
				name: "Huge",
				description: "Attackers add +4 to attack rolls because of the beast’s size."
			},
			{
				name: "Size +7",
				description: "Shredders weigh over 6000 pounds and stand about 20’ tall"
			}
		),
		book: currentBook,
		page: "p93"
	},{
		name: "Space Leviathan",
		wildcard: 1,
		image: "",
		tags: "",
		blurb: "Few know what horrors lurk in the dark, cold recesses of space. Space leviathans are one such monster. The kraken-like things thrive in the vacuum, but periodically dip into atmosphere to devour planet-bound prey.",
		attributes: {
			agility: "d6",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12+12",
			vigor: "d12"
		}
		skills: {
			'Fighting': "d10",
			'Notice': "d8"
		}
		charisma: "0",
		pace: "100",
		parry: "7",
		toughness: "32",
		armor: "0",
		abilities: Array(
			{
				name: "Crush",
				description: "A leviathan makes a single attack each round by pitting its Fighting against a target spacecraft’s Piloting (or Agility if the target is a creature big enough to catch the monster’s attention). If successful against a creature, the leviathan lashes out with its massive tentacles for Strength +d12 damage. Against ships and the like, a successful hit allows to grapple its prey. It automatically inflicts a Critical Hit each round as its tentacles seek out and crush sensitive parts of the ship. Once grappled, the target vessel continues to move at –4 to its Piloting rolls, and may only attack the creature Reaction Fire weapons, or by crew members exiting the ship to attack from outside. (Of course other ships may attack it normally.)"
			},
			{
				name: "Flight",
				description: "Leviathans can’t fly faster than light, but can match all but the fastest insystem ships with a Top Speed of 700."
			},
			{
				name: "Gargantuan",
				description: "Heavy Armor. Attacks against the leviathan are +4. A leviathan’s tentacles are Heavy Weapons. Add Size to Strength damage when crushing."
			},
			{
				name: "Hardy",
				description: "A second Shaken result does not cause a wound."
			},
			{
				name: "Size +24",
				description: "Leviathans are 1000’ in length."
			}
		),
		book: currentBook,
		page: "p93"
	},{
		name: "Spear Tree",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Spear trees are intelligent, ambulatory trees with numerous barbed thorns set within their trunks. The thorns are the size of spear heads, and are connected by strong vines. The tree tries to kill its victims with these spears, then drains the nutrients from the corpse.",
		attributes: {
			agility: "d4",
			smarts: "d10(A)",
			spirit: "d6",
			strength: "d12+4",
			vigor: "d12"
		}
		skills: {
			'Fighting': "d4",
			'Notice': "d8",
			'Shooting': "d8",
			'Stealth': "d6"
		}
		charisma: "0",
		pace: "4",
		parry: "4",
		toughness: "16 (4)",
		armor: "4",
		abilities: Array(
			{
				name: "Armor (+4)",
				description: "The spear tree has a 6” thick layer of bark."
			},
			{
				name: "Size +4",
				description: "The spear tree is nearly 24 feet tall."
			},
			{
				name: "Spears",
				description: "The tree can shoot 1d6 spears each round, Range 3/6/12. Subtract one from this roll for each victim it currently has speared. A victim hit by a spear suffers Str+d6 AP2 damage. If the attack causes a wound, the victim is impaled as well. Budding roots begin to grow into the victim, draining nutrients back to the tree through the specialized vines, and causing an additional Str+d4 damage per round, ignoring any bonuses to Toughness from Armor. Once the victim is drained, the vine detaches. Attached vines have a Toughness of 10."
			}
		),
		book: currentBook,
		page: "p93"
	},{
		name: "Spit Worm",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "In deep forests of primeval worlds lurks the spit worm, large and territorial centipedelike creatures. The arthropods measure 5’ in length and are covered in soft, flexible, chitinous plates. They scuttle about on 40 clawed legs. Although it has mandibles, the spit worm’s primary mode of attack is to spit paralyzing venom. In order to do this, the worm rears up on its hind segments and curls itself into a “S” shape. It then uncoils, firing a glob of sticky, green venom, which can reach distances of 24 yards. Spit worms are tenacious creatures, willing to face down larger predators. Their distinctive rearing “S” shape serves as a warning to predators fancying it as a meal.",
		attributes: {
			agility: "d6",
			smarts: "d4(A)",
			spirit: "d10",
			strength: "d8",
			vigor: "d8"
		}
		skills: {
			'Climbing': "d6",
			'Fighting': "d6",
			'Intimidation': "d8",
			'Notice': "d8",
			'Shooting': "d6",
			'Stealth': "d4"
		}
		charisma: "0",
		pace: "6",
		parry: "5",
		toughness: "6",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d6."
			},
			{
				name: "Infravision",
				description: "Spit worms halve darkness penalties against heat-producing targets."
			},
			{
				name: "Spit",
				description: "Range 3/6/12. Anyone not wearing a sealed body suit struck by the poison  must make a Vigor roll or be paralyzed for 2d6 rounds."
			}
		),
		book: currentBook,
		page: "p94"
	},{
		name: "Springtail",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Despite their innocuous name, springtails are fierce, man-sized reptilian predators that hunt in packs of 2d6. Their four vestigial limbs end in a single curved claw designed to latch onto prey rather than provide locomotion. As their name implies, springtails have a powerful tail, which they coil up and release to leap forward. When hunting, they latch onto prey and gnash at it with their powerful bite. Unlike many animals, springtails do not have individual teeth, but instead have serrated jawbones.",
		attributes: {
			agility: "d8",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d6",
			'Notice': "d6",
			'Stealth': "d6"
		}
		charisma: "0",
		pace: "0",
		parry: "5",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Bite / Claw",
				description: "Str+d6."
			},
			{
				name: "Fearless",
				description: "Immune to Fear and Intimidation."
			},
			{
				name: "Leap",
				description: "This creature doubles jumping distances."
			},
			{
				name: "Maul",
				description: "A springtail scoring a raise on a Fighting roll has attached itself to its opponent. Each round it remains attached, it gains +2 to bite attack rolls. Removing it requires an opposed Strength roll."
			},
			{
				name: "Pounce",
				description: "The beast can make a special Wild Attack if it can jump at least 2” to the target, adding +4 to attack and damage instead of +2 (Parry is still just -2)."
			}
		),
		book: currentBook,
		page: "p94"
	},{
		name: "Stomper",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Stompers are bipedal carnivores with thick, elephant-like legs, no arms, a short neck, and a small mouth. Unable to bite prey effectively, they attack by stomping it to death and then chewing on the tenderized flesh. Stompers signal each other by stomping the ground.",
		attributes: {
			agility: "d6",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12+3",
			vigor: "d10"
		}
		skills: {
			'Fighting': "d8",
			'Intimidation': "d8",
			'Notice': "d6"
		}
		charisma: "0",
		pace: "8",
		parry: "6",
		toughness: "13 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick hide."
			},
			{
				name: "Large",
				description: "Attackers add +2 to attack rolls because of the beast’s size."
			},
			{
				name: "Size +4",
				description: "Stompers are nearly 20 feet tall with feet the size of large tree trunks."
			},
			{
				name: "Stomp",
				description: "Strength+d10. Non-rigid armor (leather, spacesuits) offers no protection against the stomp."
			}
		),
		book: currentBook,
		page: "p94"
	},{
		name: "Stryder",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Stryders are docile, two-legged, herbivorous lizards used as mounts by many species. They have no arms. Although they stand upright when walking or trotting, they lower their heads and extend their tails when running so that their head, back, and tail form a straight line.",
		attributes: {
			agility: "d8",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d12",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d4",
			'Notice': "d6"
		}
		charisma: "0",
		pace: "8",
		parry: "4",
		toughness: "7",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Endurance",
				description: "Stryders can maintain a full run for 30 minutes without difficulty. Each 10 minutes after this, they must make a Vigor roll or suffer Fatigue. One level of Fatigue is recovered for every 30 minutes of rest."
			},
			{
				name: "Fast",
				description: "Stryders roll a d10 running die."
			},
			{
				name: "Size +1",
				description: "Stryders stand 8’ tall."
			}
		),
		book: currentBook,
		page: "p95"
	}	,{
		name: "Umbrella Beast",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Large bony “arms” connected by fleshy skin and tipped with multi-pronged horns rise from the body of this aptly-named xeno. Umbrella beasts are opportunists, lying just beneath the surface of soft soil or sand and waiting for prey to walk across them. When attacking, the “arms” burst through the light covering, enveloping the unsuspecting quarry in the fleshy folds. The horns are not used to attack, but interlock to prevent the prey from easily escaping. Trapped creatures are then subjected to powerful enzymes, which dissolves their flesh. The resultant goo flows down the skin flaps into the beast’s waiting mouth.",
		attributes: {
			agility: "d4",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12+5",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d6",
			'Notice': "d6",
			'Stealth': "d6"
		}
		charisma: "0",
		pace: "2",
		parry: "5",
		toughness: "13",
		armor: "0",
		abilities: Array(
			{
				name: "Burrow",
				description: "Umbrella beasts are not true burrowers, but conceal themselves beneath soft earth, leaving only their eye stalks just above the surface."
			},
			{
				name: "Grapple",
				description: "The umbrella beast tries to catch prey in its flesh folds, binding them tight before dissolving them. On each round after a successful grapple, victims suffer 2d6 damage from digestive enzymes."
			},
			{
				name: "Huge",
				description: "Attackers are +4 to attack rolls because of the beast’s size."
			},
			{
				name: "Size +8",
				description: "Umbrella beasts measure 25’ across."
			}
		),
		book: currentBook,
		page: "p95"
	},{
		name: "Wire Rat",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Wire rats are rodents that have developed a taste for electrical wiring. Once on board a vehicle or starship, they waste no time in chewing through any wiring they can find.",
		attributes: {
			agility: "d10",
			smarts: "d8(A)",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d6",
			'Notice': "d6",
			'Stealth': "d10"
		}
		charisma: "0",
		pace: "6",
		parry: "5",
		toughness: "3",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Leap",
				description: "The creature doubles jumping distances."
			},
			{
				name: "Size –2",
				description: "Wire rats are similar in size to rats but are much stockier."
			},
			{
				name: "Small",
				description: "Opponents are at –2 to attack rolls against a wire rat due to its size."
			}
		),
		book: currentBook,
		page: "p95"
	},{
		name: "Zombie (Horrornaut)",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Zombies don’t have to be supernatural in origin. Even in a hard scifi campaign, they might be victims of a strange alien force that reanimates the dead, a virus, or they might even be inhabited by parasitic aliens that somehow tap into the corpse’s neural system.",
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d4",
			strength: "d6",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d6",
			'Intimidation': "d6",
			'Notice': "d4",
			'Piloting': "d6",
			'Shooting': "d6"
		}
		charisma: "0",
		pace: "4",
		parry: "5",
		toughness: "8 (1) Gear",
		armor: "0",
		abilities: Array(
			{
				name: "Claws",
				description: "Str."
			},
			{
				name: "Fearless",
				description: "Zombies are immune to Fear and Intimidation."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; called shots do no extra damage; ignores one level of wound modifier; does not breathe; immune to disease and poison."
			},
			{
				name: "Weakness (Head)",
				description: "Shots to a zombie’s head are +2 damage."
			}
		),
		book: currentBook,
		page: "p95"
	} 
));