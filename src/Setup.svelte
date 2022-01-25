<script>
	import { colors } from './data.js'
	
	let players = [
		{
			id: 1,
// 			faction: ''
		},
		{
			id: 2,
// 			faction: ''
		},
		{
			id: 3,
// 			faction: ''
		}
	]
	
	console.log(colors);
	
	export let phase;
</script>

{#each players as player, i}
	<div class="player-info">
		<div class="circle" style="background-color: {player.color}">
			{#each colors as color}
				<div class={color} value="Blue" />
			{/each}
		</div>
		<input bind:value={player.faction} on:blur={ e => console.log(e.target.value)}/>
		<span class="material-icons" 
					on:click={() => {
					players.splice(i, 1)
		players = players;}}>close</span>
</div>
{/each}
<button on:click={() => { players = [...players, {faction: ''}]}}>
	Add Player
</button>
<button on:click={() => phase = "Strategy" }>
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
</style>
<!-- {#each Array(playerCount) as player, i}
	<label>Player {i+1}
		<input list="browsers" name="myBrowser" /></label>
	<datalist id="browsers">
		<option value="Emirates of Hacan">
		<option value="Sardakk Norr">
		<option value="Federation of Sol">
		<option value="Universities of Jol-nar">
		<option value="Xxcha Kingdom">
		<option value="Barony of Letnev">
	</datalist>
{/each} -->

