module.exports = {
	all: {
		files: [{
			expand: true,
			cwd: 'src/',
			src: ['image/*.{png,jpg,gif}'],
			dest: 'dist/'
		}]
	}
};