<script>

    export let text
    let pending = false
    import { Moon } from 'svelte-loading-spinners'
    // import { slide } from 'svelte/transition'

    function handleClick() {
        // if pend
        // change state to pending
        // if click outside while pending, cancel pending
    }

</script>

<button on:click={() => pending = !pending} >
    {#if pending}
        <Moon size="24" color="#ffffff" unit="px" duration="2s"></Moon> {text}
    {:else}
        {text}
    {/if}
</button>

<style>
    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        font-size:  16px;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        padding:  12px 24px;
        border-radius:  8px;
        background:  #3C4E59;
        color:  #F7F9EE;
        border:  none;
        margin-right: 8px;
    }

    button:hover {
        background: #3d5E69;
        cursor: pointer;
    }
</style>