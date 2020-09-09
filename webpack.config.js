const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // aca vamos a configurar cada uno de los elementos que necesitamos
  //partiendo por la entrada referenciando a nuestro archivo principal
  entry: './src/index.js',
  //output donde vamos a guardar nuestros archivos resultantes cuando hagamos la complilacion
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: { // resolver las extenciones que vamos a utilizar
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // regla principal identificar los archivos
        exclude: /node_modules/, //exclusion ed la carpeta node_modules
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/, // nos va a permitir trabajar con los archivos de HTML
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filname: './index.html',
    }),
    new MiniCssExtractPlugin({
      //el primero es como voy a llamar el archivo resultante
      filename: 'assets/[name].css',
    }),
  ],
};
