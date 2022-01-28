<script>
	import { colors } from './data.js'
	
	export let players = [
		{
			seat: 1,
// 			faction: ''
		},
		{
			seat: 2,
// 			faction: ''
		},
		{
			seat: 3,
// 			faction: ''
		}
	]
	
	console.log(colors);
	
	export let phase;
</script>

<div class="player-list">
	{#each players as player, i}
		<div class="player-info">
			<div class="circle" style="background-color: {player.color}">
				{#each colors as color}
					<div class={color} value="Blue" />
				{/each}
			</div>
			<input bind:value={player.faction} on:blur={ e => console.log(e.target.value)}/>
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

<button on:click={() => {phase = "Strategy", players.map((player, i) => player.seat = i + 1) }}>
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

