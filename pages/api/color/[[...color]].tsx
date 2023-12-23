import { NextApiRequest, NextApiResponse } from 'next';
import { createCanvas } from 'canvas';

const defaultColor = '#0face0';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const text = req.query.text === '1';

    const canvas = createCanvas(500, 300);
    const context = canvas.getContext('2d');

    let color = Array.isArray(req.query.color) ? req.query.color[0] : req.query.color || defaultColor;
    color = color.replace(/^([^#])/g, '#$1');
    let alpha = 1;
    let r = 0;
    let g = 0;
    let b = 0;

    switch (color.length - 1) {
        case 3: // #RGB
        case 4: // #RGBA
            color = color.replace(/([^#])/g, '$1$1');
            break;
        case 6: // #RRGGBB
        case 8: // #RRGGBBAA
            break;
        default:
            color = defaultColor;
    }

    if (color.length === 9) {
        alpha = parseInt(color.slice(7), 16) / 255;
    }

    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);

    context.globalAlpha = alpha;
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);

    if (text) {
        context.font = '75px "Helvetica Neue", Helvetica, sans-serif';
        context.fillStyle = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#ffffff';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.translate(canvas.width / 2, canvas.height / 2);
        context.fillText(color, 0, 0);
    }

    const buffer = canvas.toBuffer('image/png');
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(buffer);
}
