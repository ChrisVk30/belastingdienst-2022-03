import type {Route} from 'svelte-router-spa/types/components/router';
import NewGamePage from './pages/HighScores.svelte';
import HighScoresPage from './pages/NewGame.svelte';
import WelcomePage from './pages/Welcome.svelte';

const routes: Route[] = [
	{name: '/', redirectTo: 'welcome'},
	{name: '/welcome', component: WelcomePage },
	{name: 'new-game', component: NewGamePage},
	{name: 'high-scores', component: HighScoresPage},
];

export {routes};
