import { readFile, writeFile, mkdir } from 'fs/promises';
import crypto from 'crypto';
import path from 'path';
import { Router } from 'express';

const router = Router();
const DATA_FILE = path.join('data', 'links.json');

const loadLinks = async () => {
    try {
        const data = await readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await mkdir('data', { recursive: true });
            await writeFile(DATA_FILE, JSON.stringify({}));
            return {};
        }
        throw error;
    }
};

const saveLinks = async (links) => {
    await mkdir('data', { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify(links, null, 2));
};

router.get('/', async (req, res) => {
    try {
        const file = await readFile(path.join('views', 'index.html'), 'utf-8');
        const links = await loadLinks();
        const host = req.get('host'); // Port number (3002) include karega

        const shortenedUrlsHTML = Object.entries(links)
            .map(([shortCode, url]) => `<li><a href=${url} target='_blank'>${shortCode}</a> - ${url}</li>`)
            .join('');

        const content = file.replaceAll('{{shortened_urls}}', shortenedUrlsHTML);
        return res.send(content);
    } catch (error) {
        console.error('Error on GET /:', error);
        return res.status(500).send('Internal server error');
    }
});

router.post('/', async (req, res) => {
    try {
        let { url, shortCode } = req.body;

        // if (!url.startsWith('http://') && !url.startsWith('https://')) {
        //     url = `https://${url}`;
        // }

        const finalShortCode = shortCode || crypto.randomBytes(4).toString('hex');
        const links = await loadLinks();

        if (links[finalShortCode]) {
            return res.status(400).send('Short code already exists. Please choose another.');
        }

        links[finalShortCode] = url;
        await saveLinks(links);
        return res.redirect('/');
    } catch (error) {
        console.error('Error on POST /:', error);
        return res.status(500).send('Internal server error');
    }
});

router.get('/:shortCode', async (req, res) => {
    try {
        const { shortCode } = req.params;
        const links = await loadLinks();

        if (!links[shortCode]) {
            return res.status(404).send('404 error occurred: Short link not found');
        }

        return res.redirect(links[shortCode]);
    } catch (error) {
        console.error('Error on GET /:shortCode:', error);
        return res.status(500).send('Internal server error');
    }
});

// export default router; // default export
export const shortenedRoutes = router; // name export