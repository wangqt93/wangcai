import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagList: localStorage.getItem('tagList') ? localStorage.getItem('tagList').split(',') : ['衣','食','住','行'],
    setitem: localStorage.getItem('tagTitle') ? localStorage.getItem('tagTitle') : ''
  },
  mutations: {
    changeTag(state){
      let name = window.prompt('请输入标签名称')
      if (name === '' || state.tagList.indexOf(name)>=0 ) {
        window.alert('标签名错误')
      } else {
        state.tagList.push(name)
        localStorage.setItem('tagList',state.tagList)
        console.log(localStorage)
      }
    },
    setdata(state,name){      
      state.setitem = name
      localStorage.setItem('tagTitle',state.setitem)
    },
    changeTitle(state,value){
      let index = state.tagList.indexOf(state.setitem)
      state.tagList.splice(index,1,value)
      state.setitem = value
      localStorage.tagList = state.tagList
    },
    removeitem(state){
      let index = state.tagList.indexOf(state.setitem)
      state.tagList.splice(index, 1)
      localStorage.tagList = state.tagList
    }

  },
  actions: {
  },
  modules: {
  }
})
