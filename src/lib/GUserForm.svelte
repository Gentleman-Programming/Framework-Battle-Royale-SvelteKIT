<script lang="ts">
	import GButton from '$lib/GButton.svelte';
	import { ButtonTypes, type User } from '../models';
	import { dialogState, userState } from '../shared-state';

	let formState: User = {
		name: ''
	};

	const submit = () => {
		userState.set(formState);
		dialogState.set(false);
	};
</script>

<form class="form">
	<label for="name">Name</label>
	<input type="text" name="name" id="name" bind:value={formState.name} />
	<GButton type={ButtonTypes.SUBMIT} on:click={submit}>Save</GButton>
</form>

<style>
	.form {
		display: flex;
		flex-flow: row;
		gap: 1rem;
		align-items: center;
	}
</style>
