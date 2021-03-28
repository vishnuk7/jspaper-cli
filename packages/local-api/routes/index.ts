import express from 'express';
import fs from 'fs/promises';
import path from 'path';

interface Cells {
	id: string;
	content: string;
	type: 'text' | 'code';
}

export const createCellRouter = (filename: string, dir: string) => {
	const router = express.Router();
	router.use(express.json());

	const fullPath = path.join(dir, filename);

	router.get('/cells', async (req, res) => {
		try {
			const result = await fs.readFile(fullPath, { encoding: 'utf-8' });

			res.json(JSON.parse(result));
		} catch (err) {
			if (err.code === 'ENOENT') {
				await fs.writeFile(fullPath, '[]', 'utf-8');

				res.json([]);
			} else {
				throw err;
			}
		}
	});

	router.post('/cells', async (req, res) => {
		const { cells }: { cells: Cells } = req.body;

		await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

		res.send({ status: 'ok' });
	});

	return router;
};
