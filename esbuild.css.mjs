import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

esbuild.build({
    entryPoints: ['src/scss/app.scss'],
    outdir: 'dist/css',
    bundle: true,
    minify: true,
    plugins: [sassPlugin()],
}).catch(() => process.exit(1))
