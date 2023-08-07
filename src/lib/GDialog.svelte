<script lang="ts">
	import { dialogState } from '../shared-state';
	import GButton from './GButton.svelte';

	$: isOpen = `${$dialogState ? 'open' : ''} dialog-background`;

	const closeDialog = () => {
		dialogState.set(false);
	};
</script>

<div class={isOpen}>
	<dialog open={$dialogState} class="dialog-container">
		<slot />
		<GButton on:click={closeDialog}>Close</GButton>
	</dialog>
</div>

<style>
	.dialog-background {
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		z-index: 99999;
		position: absolute;
		display: flex;
		align-items: center;
		visibility: hidden;
		pointer-events: none;
		display: flex;
		align-items: center;
		transition: all 1s;
		scale: 0;
	}

	.dialog-background.open {
		visibility: visible;
		pointer-events: all;
		scale: 1;
		background: rgba(0, 0, 0, 0.5);
	}

	.dialog-background .dialog-container {
		background: var(--primary-light);
		padding: 1rem;
		display: flex;
		flex-flow: column;
		gap: 1rem;
		border-radius: 1rem;
	}
</style>
