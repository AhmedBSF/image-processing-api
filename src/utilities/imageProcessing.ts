import { Request, RequestHandler, Response } from 'express';
import path from 'path';
import * as fileSys from 'fs';
import fs from 'fs/promises';

import sharp from 'sharp';

const IMAGE_INPUT_PATH = '../../public/assets/imageInput';
const IMAGE_OUTPUT_PATH = '../../public/assets/imageOutput';

export function resizeImage(
  inputPath: string,
  outputPath: string,
  width: number,
  height: number
) {
  return sharp(inputPath).resize(width, height).toFile(outputPath);
}

export const processImage: RequestHandler = async (
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
    return res
      .status(400)
      .send('Invalid query! Make sure to add file name, width and height');
  }

  try {
    if (fileSys.existsSync(outputPath)) {
      return res.status(409).sendFile(outputPath);
    } else {
      await fs.stat(inputPath);
      await resizeImage(inputPath, outputPath, width, height);
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

export default processImage;
