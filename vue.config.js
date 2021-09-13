module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('fork-ts-checker')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].tsconfig = process.env.NODE_ENV === 'production' ? './tsconfig.build.json' : './tsconfig.json';
        return args;
      });
  },
};
