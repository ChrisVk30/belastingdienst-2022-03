<script lang="ts">
import type { CurrentRoute } from "svelte-router-spa/types/components/route";


	// export let gameId: number;
	export let currentRoute: CurrentRoute;
</script>

<main>
	Game met id: {currentRoute.namedParams.id}
</main>