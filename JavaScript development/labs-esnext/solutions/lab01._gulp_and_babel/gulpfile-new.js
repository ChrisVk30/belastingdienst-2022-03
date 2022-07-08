// https://gulpjs.com/docs/en/getting-started/creating-tasks

import gulp from 'gulp';              // gulp package only provides 1 default export
const { src, dest, series } = gulp;

// for the 'js' task
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import terser from 'gulp-terser';

// for the 'clean' task
import rimraf from 'rimraf';

// 👇 PRIVATE TASK. Add export to make change it to PUBLIC - and call it via 'gulp js'
const js = () => 
  src('./src/**/*.js')
    .pipe(concat('onefile.js'))
    .pipe(babel({ presets: ['@babel/preset-env']}))
    .pipe(terser())
    .pipe(dest('./lib'));

// 👇 PRIVATE TASK. Add export to make change it to PUBLIC - and call it via 'gulp clean'
const clean = (cb) => rimraf('./lib', cb);

// 👇 PUBLIC TASK, as it's the default export, call it via 'gulp'
export default series(clean, js);