import axios from 'axios';
// import config from '../config/index'

const createInstance = (req) => axios.create({
	baseURL: 'http://10.104.97.152:8089/wechat',
	headers: {
		cookie: req.get('cookie') || ''
	},
	params: {
		// secret: config.secret
	}
});

export default createInstance;