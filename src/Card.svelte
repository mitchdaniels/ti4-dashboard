<script>
	import { createEventDispatcher } from 'svelte'
	import { slide } from 'svelte/transition'
	import { backInOut } from 'svelte/easing'
	import { strategies } from './data.js'
	export let player, active, phase
	
	let dispatch = createEventDispatcher();
	
	function handleAction(action) {
		switch(action) {
			case 'strategic':
				player.strategicCompleted = true;
				break;
		 	case 'pass':
		 		player.passed = true;
		}
	  dispatch('action');
	}
</script>

<div class="card" class:passed={player.passed} class:active={active}>
	<div class="header">
			<div class="faction">
			<div class="player-color" style="background: {player.color}"/>
			<div class="faction-name">{player.faction}</div>
		  	{#if player.speaker}
				<span class="material-icons" style="color: yellow">person</span>
			{/if}
		</div>
		{#if phase === "Action"}
			<div class="strategy" class:used={player.strategicCompleted}>{player.strategy}</div>
		{/if}
		{#if phase === "Strategy"}
			<select name="strategy" id="strategy-select" bind:value={player.strategy} class:used={player.strategicCompleted}>
				{#each strategies as strategy}
					<option value={strategy}>{strategy}</option>
				{/each}
			</select>
		{/if}
	</div>
	{#if active && phase === "Action"}
		<div class="actions" transition:slide={{ duration: 500, easing: backInOut }}>
			{#if !player.passed}
				{#if !player.strategicCompleted}
					<button on:click={() => handleAction('strategic')}>Strategy</button>
				{/if}
				<button on:click={() => handleAction('tactical')}>Tactical</button>
				{#if player.strategicCompleted}
					<button on:click={() => handleAction('pass')}>Pass</button>
				{/if}
			{/if}
		</div>
	{/if}
	<!-- <div class="point-tracker">
		{#each Array(10) as e, i}
			<div class="point" class:active="{i+1 > player.points}" on:click={() => player.points = i + 1}>
			</div>
		{/each}
	</div> -->
</div>

<style>
	/* .point-tracker {
		display: flex;
		flex-direction: row-reverse;
		column-gap: 4px;
		margin-left: 40px;
	}

	.point-tracker:hover .point {
		background-color: #777;
	}
	
	.point-tracker .active, .point-tracker .point:hover, .point:hover ~ .point {
		background-color: white;
		box-shadow: 0px 0px 2px 0px white;
	}
	
	.point {
		height: 12px;
		width: 12px;
		border-radius: 2px;
		background-color: #777;
	} */
	
	.card {
		padding: 24px 32px;
		background: #273238;
		border-radius: 8px;
		margin-bottom: 8px;
		display: inline-flex;
		flex-direction: column;
		justify-content: space-between;
		transition: background-color 0.5s;
		transition: opacity 2s;
	}
	
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.active {
		background: #354550;
	}
	
 	.faction {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.player-color {
		width: 16px;
		height: 16px;
		border-radius: 8px;
	}
	
.actions {
	margin-top:  16px;
	margin-left:  48px;
	display: flex;
	justify-content: safe left;
}

.faction-name {
	font-weight: 500;
	padding-left: 32px;
	font-size: 32px;
}

.used, .passed {
	opacity: 20%;
	transition: opacity 0.5s;
}

button, .strategy, select {
	font-size:  16px;
	text-transform: uppercase;
	letter-spacing: 0.15em;
}

button, select {
	padding:  12px 24px;
	border-radius:  8px;
	background:  #3C4E59;
	color:  #F7F9EE;
	border:  none;
	margin-right: 8px;
}

button:hover {
	background: #3d5E69;
	cursor: pointer;
}
</style>