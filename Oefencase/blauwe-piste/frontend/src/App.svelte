<script lang="ts">
	import { Router } from 'svelte-router-spa';
	import { routes } from './routes';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	const queryClient = new QueryClient();
</script>

<nav class="fixed">
	<div class="nav-brand">
		<h3><a href="/">Galgje</a></h3>
	</div>
	<div class="collapsible">
		<input id="collapsible1" type="checkbox" name="collapsible1" />
		<label for="collapsible1">
			<div class="bar1" />
			<div class="bar2" />
			<div class="bar3" />
		</label>
		<div class="collapsible-body">
			<ul class="inline">
				<li><a href="/welcome" class="paper-btn btn-secondary-outline">Welkom</a></li>
				<li><a href="/new-game" class="paper-btn btn-secondary-outline">Nieuw spel</a></li>
				<li><a href="/high-scores" class="paper-btn btn-secondary-outline">High scores</a></li>
			</ul>
		</div>
	</div>
</nav>

<main>
	<QueryClientProvider client={queryClient}>
		<Router {routes} />
	</QueryClientProvider>
</main>

<style>
	nav {
		margin-bottom: 1rem;
	}
	nav ol {
		display: flex;
		list-style: none;
	}

	nav a {
		display: block;
		margin: 1rem;
	}
</style>
