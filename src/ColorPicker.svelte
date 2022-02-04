<script>
	let open = false

</script>

<div class="circle colorPicker" style="background-color: red" on:click={open = !open}>
	{#if open}
        <p>It's Open</p>
		{#each ["red", "green", "orange"] as color}
			<div class="circle" style:background-color={color}/>
		{/each}
	{/if}
		<!-- {#each colors as color}
		<div class={color} bind:value={player.color} value="Blue" />
	{/each} -->
</div>

<style>
	
	.circle {
		width: 24px;
		height: 24px;
		background-color: red;
		border-radius: 12px
	}

</style>

