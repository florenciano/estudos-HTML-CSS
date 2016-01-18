//  criando o módulo do gulp
var gulp = require('gulp');

// Compilando Sass + Compass (npm install gulp-ruby-sass)
var sass = require('gulp-ruby-sass');

var browserSync = require('browser-sync');

gulp.task('sass', function(){ // definindo o nome da tarefa 'sass'
	gulp.src('./src/scss/*.scss') // "./" = equivale ao diret. raiz do proejto. Todos os arquivos desta pasta
		.pipe(sass({compass: true})) // pipe: para processar os dados. Aqui vamos trabalhar com compass
		.on('error', function (err) { console.log(err.message); }) // informar erro gerado, se houver
		.pipe(gulp.dest('./src/css')); // onde deverá ser salvo o arquivo
});  

gulp.task('browser-sync', function() {
    browserSync.init(['./src/css/**', './index.html'], {
        server: {
            baseDir: './',
            index: './index.html'
        }
    });
});


// Watch task 
// Para que as opções de cima funcione precisamos
// observar nossa pasta
gulp.task('watch', ['sass', 'browser-sync'], function () { 
    gulp.watch('./src/scss/*.scss', ['sass']);
});
