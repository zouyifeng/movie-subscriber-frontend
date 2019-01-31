import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NotFind extends Component {

    componentWillMount() {
        const { staticContext } = this.props
        // 这段只在服务端适用 如果staticContext存在  继续向下执行
        staticContext && (staticContext.notFind = true)
    }
    render() {

        return (
            <div>
                not find <Link to={`/wechat-page/list`}>去列表页</Link>
			</div>
        )
    }
}


export default NotFind
