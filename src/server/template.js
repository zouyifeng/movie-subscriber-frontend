import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';


export const template = (store, routes, req, context) => {
		const content = renderToString((
			<Provider store={store}>
				<StaticRouter location={req.path} context={context}>
					<div>
						{renderRoutes(routes)}
	    		</div>
				</StaticRouter>
			</Provider>
		));
		const helmet  = Helmet.renderStatic()
		
		const cssStr = context.css.length ? context.css.join('\n').trim() : ''
		// const cssStr = ''
		return `
			<html>
				<head>
					${helmet.meta.toString()}
					<title>最新电影</title>
					<style>${cssStr}</style>
					<meta name="viewport" content="user-scalable=no" />
				</head>
				<body>
					<div id="root">${content}</div>
					<script>
						window.context = {
							state: ${JSON.stringify(store.getState())}
						}
					</script>
					<script src="index.js"></script>
				</body>
			</html>
	  `;
	
}