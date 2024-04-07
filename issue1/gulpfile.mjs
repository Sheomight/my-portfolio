import gulp from 'gulp'
import browSync from 'browser-sync'
import { deleteAsync } from 'del'

import fonts from './gulp-tasks/fonts.mjs'
import images from './gulp-tasks/images.mjs'
import html from './gulp-tasks/html.mjs'
import scss from './gulp-tasks/sass.mjs'
import scripts from './gulp-tasks/scripts.mjs'
import ghPages from './gulp-tasks/gh-pages.mjs'

const sync = browSync.create()

function clear() {
  return deleteAsync(['dist'])
}
 
const watchChanges = () => {
  sync.init({
    server: './dist'
  })

  gulp.watch('src/**.html', gulp.series(html)).on('change', sync.reload)
  gulp.watch('src/assets/images/', gulp.series(images)).on('change', sync.reload)
  gulp.watch('src/sass/', gulp.series(scss)).on('change', sync.reload)
  gulp.watch('src/js/**.js', gulp.series(scripts)).on('change', sync.reload)
}

export const serve = gulp.task('serve', gulp.series(clear, fonts, images, html, scss, scripts, watchChanges))
export const build = gulp.task('build', gulp.series(clear, fonts, images, html, scss, scripts))