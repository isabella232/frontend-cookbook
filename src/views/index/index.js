import Vue from 'vue'

import Feed from '../../components/Feed'
import Sidebar from '../../components/Sidebar'

import spinners from '../../resources/spinners'
import input from '../../resources/input'
import checkboxes from '../../resources/checkboxes'
import buttons from '../../resources/buttons'
import progressBars from '../../resources/progressBars'
import radioButtons from '../../resources/radioButtons'

import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  data: {
    componentsHTML: { spinners, input, checkboxes, buttons, progressBars, radioButtons },
    currentList: 'buttons',
    componentsList: spinners,
    componentTitle: 'Buttons'
  },
  methods: {
    changeCurrentList(newList) {
      this.currentList = newList.component
      this.componentsList = this.getComponentHTML(newList.component)
      this.componentTitle = newList.title
    },
    getComponentHTML(component) {
      return this.componentsHTML[component]
    }
  },
  components: { Feed, Sidebar }
})
