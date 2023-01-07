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

<div class="card" class:passed={player.passed} class:active style:border-left={active ? "8px solid " + player.color : "none"}>
	<div class="header">
			<div class="faction">
			{#if !active}
				<div class="player-color" style="background: {player.color}"/>
			{/if}
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
		<div class="actions" transition:slide={{ duration: 500, easing: quintInOut, delay: 500 }} > 
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

	:root {
	--shadow-color: 217deg 7% 60%;
	--shadow-elevation-low:
		0px 0.3px 0.4px hsl(var(--shadow-color) / 0.18),
		0px 0.6px 0.8px -0.6px hsl(var(--shadow-color) / 0.29),
		0px 1.3px 1.7px -1.3px hsl(var(--shadow-color) / 0.4);
	--shadow-elevation-medium:
		0px 0.3px 0.4px hsl(var(--shadow-color) / 0.19),
		0px 1.4px 1.8px -0.4px hsl(var(--shadow-color) / 0.27),
		0px 3px 3.9px -0.9px hsl(var(--shadow-color) / 0.36),
		-0.1px 6.7px 8.7px -1.3px hsl(var(--shadow-color) / 0.45);
	--shadow-elevation-high:
		0px 0.3px 0.4px hsl(var(--shadow-color) / 0.17),
		0px 2.7px 3.5px -0.2px hsl(var(--shadow-color) / 0.21),
		-0.1px 4.9px 6.4px -0.4px hsl(var(--shadow-color) / 0.25),
		-0.1px 7.5px 9.8px -0.6px hsl(var(--shadow-color) / 0.29),
		-0.2px 11.1px 14.5px -0.7px hsl(var(--shadow-color) / 0.34),
		-0.2px 16.3px 21.3px -0.9px hsl(var(--shadow-color) / 0.38),
		-0.3px 23.6px 30.8px -1.1px hsl(var(--shadow-color) / 0.42),
		-0.5px 33.7px 44px -1.3px hsl(var(--shadow-color) / 0.46);
	}

	.card {
		padding: 2rem 2.5rem;
		background: white;
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
		display: inline-flex;
		flex-direction: column;
		justify-content: space-between;
		transition: 0.5s 0.5s, box-shadow 2s 0.5s;
		box-shadow: var(--shadow-elevation-low);
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.active {
		z-index: 1;
		box-shadow: var(--shadow-elevation-high);
		border-radius: 0 0.5rem 0.5rem 0;
	}

	.active .faction-name {
		margin-left: 16px;
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

	button {
		background-color: hsl(210, 20%, 90%);
		color: hsl(210, 20%, 20%);
	}

	button:hover {
		background-color: hsl(210, 20%, 85%);
	}

</style>