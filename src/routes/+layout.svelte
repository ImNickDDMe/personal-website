<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { Content } from 'carbon-components-svelte';
	import 'carbon-components-svelte/css/g10.css';
</script>

<svelte:head>
	<title>Nikolaos Papanastasis</title>
</svelte:head>

<Header />

<Content>
	<slot></slot>
</Content>
