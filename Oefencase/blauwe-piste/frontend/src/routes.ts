import type {Route} from 'svelte-router-spa/types/components/router';
import HighScoresPage from './pages/HighScores.svelte';
import NewGamePage from './pages/NewGame.svelte';
import WelcomePage from './pages/Welcome.svelte';
import GamePage from './pages/Game.svelte';

const routes: Route[] = [
	{name: '/', redirectTo: 'welcome'},
	{name: '/welcome', component: WelcomePage },
	{name: '/new-game', component: NewGamePage},
	{name: '/game/:id', component: GamePage},
	{name: '/high-scores', component: HighScoresPage},
];

export {routes};
