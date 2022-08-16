<script lang="ts">
  import {Router} from 'svelte-router-spa';
  import {routes} from './routes';
</script>

<nav>
  <ol>
    <li><a href="/welcome">Welkom</a></li>
    <li><a href="/new-game">Nieuw spel</a></li>
    <li><a href="/high-scores">High scores</a></li>
  </ol>
</nav>

<main>
  <Router {routes} />
</main>

<style>

</style>