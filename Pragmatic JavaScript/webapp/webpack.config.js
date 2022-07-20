const path = require('path');

module.exports = {
    // code
    // plaatjes: webp jpg gif png svg tif bmp
    // stylesheets
    // videos
    // html
    // fonts
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"), // string (default)
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "[name]-bundled.js", // string (default
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpeg|jpg|gif|png)$/i,
                type: 'asset/resource'
            }
        ]
    }
};
