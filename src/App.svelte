<script>

	import Setup from './Setup.svelte'
	// import StrategyPhase from './StrategyPhase.svelte'
	import ActionPhase from './ActionPhase.svelte'
	
	export let players = [
		{
			seat: 1		},
		{
			seat: 2		},
		{
			seat: 3		},
		{
			seat: 4		},
		{
			seat: 5,
		}
	]

	export let phase = "Setup";

</script>

{#if phase === "Setup"}
	<Setup bind:phase bind:players/>
{:else}
	<ActionPhase bind:players/>
{/if}

<svelte:head>
	<title>TI4 Dashboard Example</title>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200..900&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=Material+Icons');
	</style>
</svelte:head>

<style>

	:global(body) {
		font-family: 'Urbanist', sans-serif;
		background: hsl(210, 20%, 98%);
		color:  hsl(210, 20%, 20%);
		text-align: center;
	}
	
	:global(h1) {
		text-transform: uppercase;
		letter-spacing: 1rem;
		text-indent: 0.5rem;
		margin:  80px 0px 40px 0px;
	}

	:global(h2) {
		margin-bottom:  40px;
	}

	:global(p) {
		margin-block-start:  0px;
		margin-block-end: 0px;
	}

	:global(*:focus) {
    	outline: none;
	}

	:global(button, .strategy, select) {
		font-size:  16px;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.15rem;
	}

	:global(button, select, input[type="text"]) {
		padding:  12px 24px;
		border-radius:  8px;
		border:  none;	
		margin-right: 8px;
	}

	:global(select, input[type="text"]) {
		background:  hsl(210, 20%, 90%);
		color:  hsl(210, 20%, 20%);
	}

	:global(button:hover, select:hover) {
		/* background: hsl(210, 20%, 80%); */
		cursor: pointer;
	}

</style>