module.exports = {
  apps: [
    {
      name: 'wayneBlog',
      script: './server.js',
      'cwd': './',
      env: {
        'PORT': 8010,
        'NODE_ENV': 'development'
      },
      env_production: {
        'PORT': 8020,
        'NODE_ENV': 'production'
      },
      env_test: {
        'PORT': 8030,
        'NODE_ENV': 'test'
      }
    }
  ]
}
