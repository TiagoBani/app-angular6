  const proxy = [
    {
      context: '/api',
      target: 'http://10.5.12.160/ws_codasp/',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;