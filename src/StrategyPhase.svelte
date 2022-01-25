<script>
	export let phase;
</script>

<p>
	In clockwise table order starting with Speaker, players pick their strategy cards
</p>
<button on:click={() => phase = "Action"}>
	End Phase
</button>