import axios from 'axios';
// import config from '../config/index'

const createInstance = (req) => axios.create({
	baseURL: 'http://m.zouyifeng.cn/wechat',
	// baseURL: 'http://localhost:8089',
	headers: {
		cookie: req.get('cookie') || ''
	},
	params: {
		// secret: config.secret
	}
});

export default createInstance;