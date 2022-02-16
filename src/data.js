export const colors = [
	'red', //'2D9CDB', // blue
	'BB6BD9', // purple
	'000000', // black
	'F2C94C', // yellow
	'EB5757', // red
	'27AE60' // green
]

export const strategies = [
	'Leadership',
	'Diplomacy',
	'Politics',
	'Construction',
	'Trade',
	'Warfare',
	'Technology',
	'Imperial'
]

export const factions = {
	base: [
		'Arborec',
		'Barony of Letnev',
		'Clan of Saar',
		'Embers of Muaat',
		'Emirates of Hacan',
		'Federation of Sol',
		'Ghosts of Creuss',
		'L1Z1X Mindnet',
		'Mentak Coalition',
		'Naalu Collective',
		'Nekro Virus',
		'Sardakk N\'orr',
		'Universities of Jol-Nar',
		'Winnu',
		'Xxcha Kingdom',
		'Yin Brotherhood',
		'Yssaril Tribes'
	]
}

const players = [
	{
		seat: 1,
		color: '#2D9CDB',
		faction: 'Federation of Sol',
		passed: false,
		strategy: 'Leadership',
		points: 3
	},
	{
		seat: 2,
		color: '#BB6BD9',
		faction: 'Barony of Letnev',
		passed: false,
		strategy: 'Politics',
		speaker: true,
		points: 3
	},
	{
		seat: 3,
		color: '#000000',
		faction: 'Sardakk N\'orr',
		passed: false,
		strategy: 'Warfare',
		points: 7
	},
	{
		seat: 4,
		color: '#F2C94C',
		faction: 'Universities of Jol-Nar',
		passed: false,
		strategy: 'Diplomacy',
		points: 3
	},
	{
		seat: 5,
		color: '#EB5757',
		faction: 'Emirates of Hacan',
		passed: false,
		strategy: 'Construction',
		points: 5
	},
  {
		seat: 6,
		color: '#27AE60',
		faction: 'Xxcha Kingdom',
		passed: false,
		strategy: 'Trade',
		points: 4
	}
];

export default players;