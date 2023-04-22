export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c2481f25.js","imports":["_app/immutable/entry/start.c2481f25.js","_app/immutable/chunks/index.a91d4893.js","_app/immutable/chunks/singletons.53bb7a5e.js","_app/immutable/chunks/index.19627f6c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.41de8b58.js","imports":["_app/immutable/entry/app.41de8b58.js","_app/immutable/chunks/index.a91d4893.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/sources",
				pattern: /^\/sources\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
