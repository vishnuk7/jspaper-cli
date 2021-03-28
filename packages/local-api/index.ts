import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { createCellRouter } from './routes';

export const serve = (port: number, filename: string, dir: string, useProxy: boolean) => {
	const app = express();

	app.use(createCellRouter(filename, dir));

	if (useProxy) {
		app.use(
			createProxyMiddleware({
				target: 'http://localhost:3000',
				ws: true,
				logLevel: 'silent',
			})
		);
	} else {
		const packagePath = require.resolve('@notejs/local-client/build/index.html');
		app.use(express.static(path.dirname(packagePath)));
	}

	return new Promise<void>((resolve, reject) => {
		app.listen(port, resolve).on('error', reject);
	});
};
