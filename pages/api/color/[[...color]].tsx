import { NextApiRequest, NextApiResponse } from 'next';
import { createCanvas } from 'canvas';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const canvas = createCanvas(500, 300);
    const context = canvas.getContext('2d');

    // Set the background color
    let color = Array.isArray(req.query.color) ? req.query.color[0] : req.query.color || '#FF0000'; // Replace with your desired color
    
    // Validate color, adding a leading # if missing
    color = color.replace(/^([^#])/g, '#$1');
    // convert 3-digit hex to 6-digits, if needed
    color = color.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => '#' + r + r + g + g + b + b
    );
    if (!/^#[0-9A-F]{6}$/i.test(color)) {
        throw new Error('Invalid color');
        color = '#FF0000';
    }

    // Set the context background color
    context.fillStyle = color;

    // Fill the canvas with the background color
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Convert the canvas to a PNG buffer
    const buffer = canvas.toBuffer('image/png');

    // Set the response headers
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Optional caching

    // Send the PNG buffer as the response
    res.send(buffer);
}
