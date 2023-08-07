<script lang="ts">
	import '../global.css';
	import TopNav from '$lib/TopNav.svelte';
	import { userState } from '../shared-state';
</script>

<TopNav />
{JSON.stringify($userState)}
