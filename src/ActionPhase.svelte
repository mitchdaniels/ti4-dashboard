<script>	
	import Card from './Card.svelte'
	import { strategies } from './data.js'
	import { flip } from 'svelte/animate'
	import { backInOut } from 'svelte/easing'

	export let players

	let round = 0
	let activePlayer
	let phase = "Strategy"

	const newRound = () => {
		players.sort((a, b) => a.seat - b.seat)

		players.map(function(player) {
			player.passed = false
			player.strategicCompleted = false
			player.strategy = ''
		})

		phase = "Strategy"
		++round
	}

	const sortByStrategy = (players) => {
		return players;
	}
		
	const advancePlayer = () => {
		let remaining = players.filter(player => player.passed === false)
		let index = remaining.findIndex(player => player === activePlayer)
		activePlayer = remaining[ ++index % remaining.length ]
		console.log(players, activePlayer)
		players.sort((a, b) => a.passed - b.passed)
	}
	
	// Start new round if all players passed
	$: if (players.every(player => player.passed === true)) {
		newRound()
	}

	const strategySort = (a, b) => {
		if ( a.faction === "Naalu Collective" ) {
			return -1;
		}
		if ( b.faction === "Naalu Collective" ) {
			return 1;
		}
		if ( strategies.indexOf(a.strategy) < strategies.indexOf(b.strategy) ){
			return -1;
		}
		if ( strategies.indexOf(a.strategy) > strategies.indexOf(b.strategy) ){
			return 1;
		}
		return 0;
	}

	function startActionPhase() {
		phase = "Action"
		players.sort(strategySort)
		activePlayer = players[0]
	}
	
	newRound()

</script>

<h1>{phase} Phase</h1>
<h2>Round {round}</h2>
<div class="faction-list">
	{#each players as player, i (player.seat)}
		<div animate:flip={{ easing: backInOut, duration: 750 }}>
			<Card 
				bind:player
				{phase}
				active={player === activePlayer}
				on:action={advancePlayer}
			/>
	</div>
	{/each}
</div>
{#if phase === "Strategy" && players.every(player => player.strategy)}
	<button on:click={startActionPhase}>Action Phase</button>
{/if}

<style>	
	.faction-list * {
		max-width: 800px;
		display: flex;
		flex-direction: column;
		margin: auto;
	}
</style>