// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'BlogPost',
      path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        // 接口地址
        apiURL: process.env.GRIDSOME_API_URL,
        // 查询数据长度
        queryLimit: 1000,
        // 查询数据类型
        contentTypes: ['post', 'tag'],
        // 单个节点
        singleTypes: ['general'],
        // 登录信息
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    // 需与集合名字一致
    // 名字为  typeName(默认为strapi) + contentTypes   因此为StrapiPost
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ],
  }
}
