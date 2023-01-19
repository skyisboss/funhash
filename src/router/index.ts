import { RouteRecordRaw, createRouter, createWebHashHistory,createWebHistory } from 'vue-router';
// import Layout from "@/components/layout/Layout.vue";
import Home from "@/pages/home/Home.vue";
// import Game from "@/views/game/Game.vue";

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/bjl',
		name: 'bjl',
		component: () => import('../pages/game/Baccarat.vue'),
	},
	{
		path: '/mines',
		name: 'mines',
		component: () => import('../pages/game/Mines.vue'),
	},
	{
		path: '/rocket',
		name: 'rocket',
		component: () => import('../pages/game/rocket/Index.vue'),
	},
	{
		path: '/poker',
		name: 'poker',
		component: () => import('../pages/game/poker/Index.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	// history: createWebHashHistory(),
	routes,
	scrollBehavior(e) {
		window.scrollTo(0,0);
		if (e.path != '/') {}
	}
});

export default router;