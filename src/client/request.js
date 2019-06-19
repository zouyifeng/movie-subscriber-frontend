import axios from 'axios';

const createInstance = axios.create({
	// baseURL: 'http://m.zouyifeng.xyz/wechat',
	baseURL: 'http://localhost:8089/',
	// headers: {
	// 	cookie: req.get('cookie') || ''
	// },
	// params: {
		// secret: config.secret
	// }
});


export default createInstance;