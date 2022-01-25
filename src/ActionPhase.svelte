

<script>	
	import Card from './Card.svelte'
	import players from './data.js'
	import { flip } from 'svelte/animate'
	import { backInOut } from 'svelte/easing'

	
	let round = 1;
	let activePlayer = 0;

	const advancePlayer = () => {
		players.sort((a, b) => a.passed - b.passed);
		let remaining = players.filter((player) => player.passed === false).length;
		activePlayer = activePlayer >= remaining - 1 ? 0 : activePlayer + 1;
	}
	
	// Start new round if all players passed
	$: if (players.every(player => player.passed === true)) {
		round = round + 1;
		players.map(function(player) {
			player.passed = false;
			player.strategicCompleted = false;
			return;
		});
	}

</script>

<h1>Action Phase</h1>
<h2>Round {round}</h2>
<div class="faction-list">
	{#each players as player, i (player.id)}
		<div animate:flip={{ easing: backInOut }}>
			<Card 
				bind:player
				activePlayer={activePlayer === i}
				on:action={advancePlayer}
			/>
	</div>
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200..900&display=swap');
	
	:global(body) {
		font-family: 'Urbanist', sans-serif;
		background: #1E1F21;
		color:  #F7F9EE;
		text-align: center;
	}
	
	:global(h1) {
		text-transform: uppercase;
		letter-spacing: 1em;
		text-indent: 0.5em;
		margin:  80px 0px 40px 0px;
	}

	:global(h2) {
		margin-bottom:  40px;
	}

	:global(p) {
		margin-block-start:  0px;
		margin-block-end: 0px;
	}
	
	.faction-list * {
		width: 800px;
		display: flex;
		flex-direction: column;
		margin: auto;
	}
</style>