<script>
	let open = false
    export let color

    const colors = [
        "hsl(0, 80%, 65%)", // red
        "hsl(30, 80%, 65%)", // orange
        "hsl(57, 90%, 60%)", // yellow
        "hsl(130, 80%, 50%)", // green
        "hsl(200, 80%, 60%)", // blue
        "hsl(270, 80%, 65%)", // purple
        "hsl(340, 100%, 75%)", // pink
        "hsl(0, 0%, 0%)" // black

    ]

</script>

<div class="circle" style:background-color={color} on:click={() => open = !open} />
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
        background-color: hsl(0, 0%, 50%);
	}

    .circle:hover {
        cursor: pointer;
    }

</style>

