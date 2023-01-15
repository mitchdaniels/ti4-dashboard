<script>
  	import ColorPicker from './ColorPicker.svelte';
	import { factions } from './data.js'
	
	export let players, phase

	function setSpeaker(i) {
		players.map(player => player.speaker = false);
		players[i].speaker = true;
		players = players;
		console.log(players[i].speaker);
	}

</script>

<div class="player-list">
	{#each players as player, i}
		<div class="player-info">
			<ColorPicker bind:color={player.color}></ColorPicker>
			<input 
				type="text"
				name="faction"
				list="factionList"
				spellcheck=false
				bind:value={player.faction}>
			<datalist id="factionList">
				{#each factions.base as faction}
					<option value={faction}>  
				{/each}
			</datalist>
			{#if i > 4}
				<span class="material-icons close" on:click={() => {players.splice(i, 1), players = players;}}>close</span>
			{/if}
			<!-- <span class="material-icons" class:speaker={player.speaker} on:click={() => setSpeaker(i)}>star</span> -->
		</div>
	{/each}
</div>

{#if players.length <= 7}
	<button on:click={() => { players = [...players, {seat: players.length + 1, faction: ''}]}}>
		Add Player
	</button>
{:else }
	8 players max
{/if}

<button on:click={() => {phase = "Strategy", players.map((player, i) => {player.seat = i + 1; player.strategy = ''}) }}>
	Start Game
</button>

<style>

	.player-info {
		display: flex;
		align-items: center;
		column-gap: 8px;
		margin-bottom: 16px;
	}
	
	.player-info input {
		margin-bottom: 0px;
	}

	.close {
		cursor:  pointer;
	}

	input::-webkit-calendar-picker-indicator {
		opacity: 0;
	}

	button {
		background:  hsl(210, 80%, 20%);
		color:  hsl(210, 20%, 80%);
	}
/* 
	.player-info .material-icons {
		color: hsl(210 20% 90%);
	}

	.player-info .material-icons:hover {
		color: hsl(210, 20%, 80%);
		cursor: pointer;
	}
	
	.player-info .speaker {
		color: goldenrod;
	} */

</style>

