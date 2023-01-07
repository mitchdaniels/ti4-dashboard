<script>

    export let text
    export let pend = false
    import { Moon } from 'svelte-loading-spinners'

    let pending = false

    function handleClick() {
        console.log(pend, pending)
        if (pend && !pending) {
            pending = true
        }
        else {
            // dispatchAction
        }
        // change state to pending
        // if click outside while pending, cancel pending
    }

</script>

<button on:click={handleClick}>
    {#if pending}
        <Moon size="24" color="#ffffff" unit="px" duration="2s"></Moon>
    {/if}
    {text}
</button>

<style>
    button {
        display: flex;
        background-color: hsl(210, 80%, 20%);
        color: hsl(210, 20%, 90%);
        flex-direction: row;
        align-items: center;
        gap: 16px;
        height: 48px;
        font-size:  16px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        padding:  12px 24px;
        border-radius:  8px;
        border:  none;
        margin-right: 8px;
    }
</style>