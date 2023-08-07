<script lang="ts">
	import { ButtonTypes } from '../models';

	export const type: ButtonTypes = ButtonTypes.BUTTON;
</script>

<button class="button" {type}>
	<slot />
</button>

<style>
	.button {
		padding: 0.5rem 1rem;
		background-color: var(--secondary);
		color: var(--text-dark);
	}
</style>
