import Vue from 'vue'
import Vuex from 'vuex'

import mask from './modules/mask.js'
import test from './modules/test.js'

Vue.use(Vuex)


const store = new Vuex.Store({
    strict: true,
    modules: {
        mask,
        test
    }
})

export default store