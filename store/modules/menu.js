const state = {
  articles: require('@/data/articles.json'),
  items: [{
      text: '主页',
      to: '/'
    }
  ]
}

const getters = {
  categories: state => {
    const categories = []

    for (const article of state.articles) {
      if (
        !article.category ||
        categories.find(category => category.text === article.category)
      ) continue

      const text = article.category

      categories.push({
        text,
        to: `/category/${text}`
      })
    }

    return categories.sort().slice(0, 4)
  },
  links: (state, getters) => {
    return state.items.concat(getters.categories)
  }
}
const mutations = {

}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
