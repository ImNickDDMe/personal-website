<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.pcss';
</script>

<svelte:head>
	<title>Nikolaos Papanastasis</title>
</svelte:head>

<header class="flex sticky top-0">
	<Navbar />
</header>

<main class="flex sticky right-0">
	<slot></slot>
</main>
