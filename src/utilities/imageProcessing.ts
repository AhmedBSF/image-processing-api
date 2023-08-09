import { Request, RequestHandler, Response } from 'express';
import path from 'path';
import * as fileSys from 'fs';
import fs from 'fs/promises';

import sharp from 'sharp';

const IMAGE_INPUT_PATH = '../../public/assets/imageInput';
const IMAGE_OUTPUT_PATH = '../../public/assets/imageOutput';

export const resizeImage: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  const file = req.query.file;

  const inputPath = path.join(__dirname, IMAGE_INPUT_PATH, `${file}.jpg`);
  const outputPath = path.join(
    __dirname,
    IMAGE_OUTPUT_PATH,
    `${file}(${width}X${height}).jpg`
  );

  if (!width || !height || !file) {
    return res.send(
      'Invalid query! Make sure to add file name, width and height'
    );
  }

  try {
    if (fileSys.existsSync(outputPath)) {
      return res.sendFile(outputPath);
    } else {
      await fs.stat(inputPath);
      await sharp(inputPath).resize(width, height).toFile(outputPath);
    }
    try {
      await fs.stat(outputPath);
      return res.sendFile(outputPath);
    } catch {
      return res.status(500).send('Failed to resize the image!');
    }
  } catch {
    return res.status(404).send('Image was not found!');
  }
};

export default resizeImage;
