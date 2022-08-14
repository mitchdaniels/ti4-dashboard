<script>
	import { createEventDispatcher } from 'svelte'
	import { slide } from 'svelte/transition'
	import { quintInOut } from 'svelte/easing'
	import { strategies } from './data.js'
	import Button from './Button.svelte'
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

<div class="card" class:passed={player.passed} class:active>
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
		<div class="actions" in:slide={{ duration: 500, easing: quintInOut, delay: 300 }} > 
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
</div>

<style>
	
	.card {
		padding: 2em 2.5em;
		background: #273238;
		border-radius: 0.5em;
		margin-bottom: 0.5em;
		display: inline-flex;
		flex-direction: column;
		justify-content: space-between;
		transition: 0.5s 0.5s;
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
	/* transition: 0.5s 0.5s; */
}
</style>