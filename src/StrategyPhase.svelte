<script>
	import dummyPlayers from './data.js'

	export let phase, players

	players = players ? players : dummyPlayers
</script>

<p>
	In clockwise table order starting with Speaker, players pick their strategy cards
</p>

{#each players as player, i (player.seat)}
	<div animate:flip={{ easing: backInOut }}>
		<Card 
			bind:player
			active={player === activePlayer}
			on:action={advancePlayer}
		/>
	</div>
{/each}

<button on:click={() => phase = "Action"}>
	End Phase
</button>