<script>

	import { colors, factions } from './data.js'
	
	export let players, phase

</script>

<div class="player-list">
	{#each players as player, i}
		<div class="player-info">
			<div class="circle" style="background-color: {player.color}">
				<!-- {#each colors as color}
					<div class={color} bind:value={player.color} value="Blue" />
				{/each} -->
			</div>
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
			{#if i > 2}
				<span class="material-icons close" on:click={() => {players.splice(i, 1), players = players;}}>close</span>
			{/if}
		</div>
	{/each}
</div>

{#if players.length <= 8}
	<button on:click={() => { players = [...players, {seat: players.length + 1, faction: ''}]}}>
		Add Player
	</button>
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
	
	.circle {
		width: 24px;
		height: 24px;
		background-color: red;
		border-radius: 12px
	}

	.close {
		cursor:  pointer;
	}

</style>

