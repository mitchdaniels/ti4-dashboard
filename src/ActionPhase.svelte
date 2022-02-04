<script>	
	import Card from './Card.svelte'
	// import dummyPlayers from './data.js'
	import { flip } from 'svelte/animate'
	import { backInOut } from 'svelte/easing'

	export let players

	let round = 1
	let activePlayer
	let phase = "Strategy"

	const newRound = () => {
		++round
		players.sort((a, b) => a.seat - b.seat)
		activePlayer = players[0]

		players.map(function(player) {
			player.passed = false
			player.strategicCompleted = false
		})
	}
		
	const advancePlayer = () => {
		let remaining = players.filter(player => player.passed === false)
		let index = remaining.findIndex(player => player === activePlayer)
		activePlayer = remaining[ ++index % remaining.length ]
		players.sort((a, b) => a.passed - b.passed)
	}
	
	// Start new round if all players passed
	$: if (players.every(player => player.passed === true)) {
		newRound()
	}
	
	newRound()

</script>

<h1>{phase} Phase</h1>
<h2>Round {round}</h2>
<div class="faction-list">
	{#each players as player, i (player.seat)}
		<div animate:flip={{ easing: backInOut }}>
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
	<button on:click={() => phase = "Action"}>Action Phase</button>
{/if}

<style>	
	.faction-list * {
		max-width: 800px;
		display: flex;
		flex-direction: column;
		margin: auto;
	}
</style>