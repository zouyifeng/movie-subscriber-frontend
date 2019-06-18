import { CHANGE_LIST } from './constants';

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('lastest-movie')
      .then((res) => {
        const list = res.data
        dispatch(changeList(list))
      }).catch(e => {
        console.log('出错了')
        console.log(e)
      })
  }
}