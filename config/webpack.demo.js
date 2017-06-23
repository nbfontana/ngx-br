const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  /**
   * Arquivo inicial para o bundle do webpack.
   * O bundle é feito a partir das dependencias e imports dentro desse arquivo.
   */
  entry: {
    'main': './demo/main.ts'
  },

  resolve: {
    /*
     * An array of extensions that should be used to resolve modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
     */
    extensions: ['.ts', '.js', '.json']
  },

  /**
   * Destino final para o bundle feito pelo webpack.
   */
  output: {
    path: '/public',
    filename: './bundle.js'
  },

  /**
   * Configurações do webServer para testes, deve ser apontado uma porta e a pasta com o conteudo.
   * Para levantar o servidor: webpack-dev-server --progress --colors --inline --hot (Colocar em um script do npm)
   */
  devServer: {
    port: 3000,
    contentBase: './public'
  },

  /**
   * Plugins utilizados pelo webpack
   */
  plugins: [
    new ExtractTextPlugin('app.css')
  ],

  /**
   * Configuração do módulo do webpack, nele configuramos os loaders necessários para rodar um aplicação.
   * O loader são colocados de acordo com a necessidade do projeto.
   */
  module: {
    loaders: [

      /**
       * Typescript loader support for .ts
       *
       * Component Template/Style integration using `angular2-template-loader`
       *
       * See: https://github.com/s-panferov/awesome-typescript-loader
       * See: https://github.com/TheLarkInn/angular2-template-loader
       * See: https://github.com/shlomiassaf/ng-router-loader
       */
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.webpack.json'
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },

      /**
       * Babel Loader
       *
       * Faz o transpile do ES6 ou es2016 e também do React.
       * O plugin ---- plugins: ['transform-object-rest-spread'] --- faz a tradução do operador [...] que serve
       * para clonar objetos.
       */
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }

      },

      /**
       * CSS Loader
       *
       * Realiza o load dos arquivos .css para o bundle.
       */
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})

      },

      /**
       * SCSS - SASS Loader
       *
       * Traduz os arquivos .scss para CSS para ser adicionado ao bundle.
       */
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }]
  }
};
