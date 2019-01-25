import React from 'react';
import { renderRoutes } from 'react-router-config';
import styles from './style.css'
import withStyle from './withStyle'

const App = (props) => {
	return (
		<div>
			{renderRoutes(props.route.routes)}
		</div>
	)
}

export default withStyle(App, styles);
