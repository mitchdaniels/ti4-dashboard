const colors = {
	'blue': '#2D9CDB',
	'purple': '#BB6BD9',
	'black': '#000000',
	'yellow': '#F2C94C',
	'red': '#EB5757',
	'green': '#27AE60'
}

const players = [
	{
		seat: 1,
		color: colors['blue'],
		faction: 'Federation of Sol',
		passed: false,
		strategy: 'Leadership'
	},
	{
		seat: 2,
		color: colors['black'],
		faction: 'Barony of Letnev',
		passed: false,
		strategy: 'Politics',
		speaker: true
	},
	{
		seat: 3,
		color: colors['red'],
		faction: 'Sardakk N\'orr',
		passed: false,
		strategy: 'Warfare'
	},
	{
		seat: 4,
		color: colors['purple'],
		faction: 'Universities of Jol-Nar',
		passed: false,
		strategy: 'Diplomacy'
	},
	{
		seat: 5,
		color: colors['yellow'],
		faction: 'Emirates of Hacan',
		passed: false,
		strategy: 'Construction'
	},
  	{
		seat: 6,
		color: colors['green'],
		faction: 'Xxcha Kingdom',
		passed: false,
		strategy: 'Trade'
	}
];

export default players;