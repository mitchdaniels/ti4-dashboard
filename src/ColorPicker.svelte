<script>
	let open = false
    export let color

    const colors = [
        "#EB5757",  "#F2C94C", "#27AE60","#2D9CDB", "#BB6BD9", "#000000"
    ]

</script>

<div class="circle colorPicker" style:background-color={color} on:click={() => open = !open} />
{#if open}
    {#each colors as option}
        <div class="circle" style:background-color={option} on:click={() => {color = option; open = false}}/>
    {/each}
{/if}

<style>
	
	.circle {
		width: 24px;
		height: 24px;
		border-radius: 12px;
        background-color: gray;
	}

    .circle:hover {
        cursor: pointer;
    }

</style>

