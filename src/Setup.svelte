<script>
  	import ColorPicker from './ColorPicker.svelte';

	import Button from './Button.svelte'
	import { colors, factions } from './data.js'
	
	export let players, phase

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

</style>

