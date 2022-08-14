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
		background: #1E1F21;
		color:  #F7F9EE;
		text-align: center;
	}
	
	:global(h1) {
		text-transform: uppercase;
		letter-spacing: 1em;
		text-indent: 0.5em;
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
		text-transform: uppercase;
		letter-spacing: 0.15em;
	}

	:global(button, select) {
		padding:  12px 24px;
		border-radius:  8px;
		background:  #3C4E59;
		color:  #F7F9EE;
		border:  none;	
		margin-right: 8px;
	}

	:global(button:hover) {
		background: #3d5E69;
		cursor: pointer;
	}

</style>