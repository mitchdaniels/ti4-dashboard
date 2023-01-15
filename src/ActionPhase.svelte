<script>	
	import Card from './Card.svelte'
	import { strategies } from './data.js'
	import { flip } from 'svelte/animate'
	import { quintInOut } from 'svelte/easing'	

	export let players
	// import testPlayers from './data.js'

	let round = 0
	let activePlayer
	let phase = "Strategy"

	const newRound = () => {
		players.sort((a, b) => a.seat - b.seat)

		arrayRotate(players, players.findIndex(player => player.speaker));

		players.map(function(player) {
			player.passed = false
			player.strategicCompleted = false
			player.strategy = ''
		})

		phase = "Strategy"
		++round
	}

	function arrayRotate(arr, count) {
		const len = arr.length
		arr.push(...arr.splice(0, (-count % len + len) % len))
		return arr
	}
		
	const advancePlayer = () => {

		let remaining = players.filter(player => player.passed === false)
		let passed = players.filter(player => player.passed === true)

		// shift current active player to end and update activePlayer

		// Move active player to end of remaining players
		if (!activePlayer.passed) {
			remaining.push(remaining.shift())
		}
	
		activePlayer = remaining[0]

		players = remaining.concat(passed)

	}
	
	// Start new round if all players passed
	$: if (players.every(player => player.passed === true)) {
		newRound()
	}

	const strategySort = (a, b) => {
		if (a.passed < b.passed) {
			return -1;
		}
		if (a.passed > b.passed) {
			return 1;
		}
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

<!-- <h1>{phase} Phase</h1>
<h2>Round {round}</h2> -->
<div class="faction-list">
	{#each players as player, i (player.seat)}
		<div class="animate" animate:flip={{ easing: quintInOut, duration: 1000 }} >
			<Card 
				bind:player
				{phase}
				active={player === activePlayer}
				on:action={advancePlayer}
			/>
		</div> 
	{/each}
	{#if phase === "Strategy" && players.every(player => player.strategy)}
		<button on:click={startActionPhase}>Action Phase</button>
	{/if}
</div>


<style>

	.faction-list {
		margin: 0;
		width: 800px;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.faction-list * {
		display: flex;
		flex-direction: column;
		margin: auto;
	}
</style>