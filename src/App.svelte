<script>

	import Setup from './Setup.svelte'
	// import StrategyPhase from './StrategyPhase.svelte'
	import ActionPhase from './ActionPhase.svelte'
	
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
		},
		{
			seat: 4,
// 			faction: ''
		},
		{
			seat: 5,
// 			faction: ''
		}
	]

	export let phase = "Setup"

</script>

{#if phase === "Setup"}
	<Setup bind:phase bind:players/>
{:else}
	<ActionPhase bind:players/>
{/if}

<svelte:head>
	<title>TI4 Dashboard</title>
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

</style>