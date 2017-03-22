//gulp-connect:创建本地服务器
//gulp-browserify:以让你使用类似于node的require()的方式来组织浏览器端的js代码、解决js依赖
//gulp-concat:合并js文件
//gulp-minify-css:压缩css
//gulp-imagemin:图片压缩
var gulp = require('gulp'),
	connect = require('gulp-connect'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	minifycss = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),//图片压缩
	pngcrush = require('imagemin-pngcrush'),
	port = process.env.port || 5000;

//解决js的require、依赖关系
gulp.task('browserify',function(){
	gulp.src('./app/js/main.js')
	.pipe(browserify({
		transform: 'reactify'
	}))
	//输出路径
	.pipe(gulp.dest('./dist/js'))
});

// 创建本地服务器
gulp.task('connect',function(){
	connect.server({
		// root:'./',
		port: port,
		livereload: true
	})
});

//压缩图片,函数名称可以自定义
gulp.task('imagemin', function() {
	return gulp.src('./app/images/*.{png,jpg,gif,ico}')
		.pipe(imagemin({
			optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
			progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
			interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
			multipass: true ,//类型：Boolean 默认：false 多次优化svg直到完全优化
			svgoPlugins: [{removeViewBox: false}],
			use: [pngcrush()]
		}))
		.pipe(gulp.dest('./dist/images'));
});


//压缩css
gulp.task('minifycss', function() {
	return gulp.src('./app/**/*.css') //执行压缩的文件
		.pipe(concat('main.css'))//合并css
		.pipe(minifycss())   //执行压缩
		.pipe(gulp.dest('./dist/css')); //输出文件夹
});

// 输入压缩js
gulp.task('js',function(){
	gulp.src('./dist/**/*.js')
	.pipe( connect.reload() )
});

gulp.task('css',function(){
	gulp.src('./dist/**/*.css')
	.pipe( connect.reload() )
});

gulp.task('images',function(){
	gulp.src('./dist/images/*')
		.pipe( connect.reload() )
});

gulp.task('html',function(){
	gulp.src('./app/**/*.html')
	.pipe( connect.reload() )
});

////监听
gulp.task('watch',function(){
	gulp.watch('./dist/**/*.js',['js']);
	gulp.watch('./dist/**/*.css',['css']);
	gulp.watch('./dist/images/*',['images']);
	//gulp.watch('./app/**/*.html',['html']);
	gulp.watch('./app/js/**/*.js',['browserify']);
});

//默认执行
//gulp.task('default',['imagemin','browserify','minifycss']);
gulp.task('default',['browserify','watch']);


gulp.task('serve',['browserify','watch','connect']);
