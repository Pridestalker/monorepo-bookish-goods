const mix = require('laravel-mix');

mix
  .js('assets/scripts/main.js', 'scripts/main.js')
  .react()
  .extract()
  .webpackConfig({
    output: {
      chunkFilename: '[name].js?id=[chunkhash]',
    },
    resolve: {
      alias: {
        'react': 'preact/compat',
        'react-dom': 'preact/compat',
      },
    },
  })
  .disableNotifications();

mix
  .sass('assets/styles/main.scss', 'styles/main.css')
  .sass('assets/styles/mail/default/main.sass', 'styles/mail.css')
  .sass('assets/styles/admin/main.sass', 'styles/admin.css')
  .options({
    postCss: [require('tailwindcss'), require('autoprefixer')],
  });

mix.setPublicPath('dist');
mix.setResourceRoot('/wp-content/themes/bookish/dist/');

mix.browserSync({
  proxy: 'https://bookishgoods.lndo.site',
});
