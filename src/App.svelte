<script>
	import Setup from './Setup.svelte'
	import StrategyPhase from './StrategyPhase.svelte'
	import ActionPhase from './ActionPhase.svelte'
	
	export let phase = "Action";
</script>

{#if phase === "Setup"}
	<Setup bind:phase />
{:else if phase === "Strategy"}
	<StrategyPhase bind:phase />
{:else if phase === "Action"}
	<ActionPhase />
{/if}

<svelte:head>
	<title>TI4 Dashboard</title>
</svelte:head>

<style>
	 @import url('https://fonts.googleapis.com/css2?family=Material+Icons');

</style>