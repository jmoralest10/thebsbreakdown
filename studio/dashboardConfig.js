export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6249c194efc61d58898731c4',
                  title: 'Sanity Studio',
                  name: 'thebsbreakdown-studio',
                  apiId: 'bb29b1eb-d458-47f7-b943-d7b9aaf48f7d'
                },
                {
                  buildHookId: '6249c194efc61d5a81873160',
                  title: 'Blog Website',
                  name: 'thebsbreakdown',
                  apiId: 'b100db6b-aa9b-493f-b5be-508025925946'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmoralest10/thebsbreakdown',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://thebsbreakdown.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
