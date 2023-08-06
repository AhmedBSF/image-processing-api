# Image Processing API

Resize image using Sharp

## Getting Started

### Running

+ `npm install`
+ `npm run build`
+ `npm run start`

### Test build

+ `npm run build`

### Lint & prettier

+ `npm run lint`
+ `npm run prettier`

### Run tests

+ `npm run test`

### Resize image

+ `npm install`
+ Add your image to `public/imageInput` before building the project.
+ `npm run build`
+ `npm run start`
+ Open browser and add your image file name and desired width & height to the URL. Example: <http://localhost:3000/main/image?file=rock-bridge&width=500&height=400>
  + `file=` the image file name here
  + `width=` new image width here
  + `height=` new image height here
+ hit Enter and your image will be viewed and saved in `public/imageOutput`

## Folder structure

```bash
 .
 ├── spec                    # Unit tests configuration
 ├── public                  # Assets (Images)
 ├── src                     # Source files
 │   ├── routes
 │   ├── utilities
 ├── tests                   # Unit tests
 └── README.md
```

## Dependencies

+ express
+ sharp
+ eslint
+ jasmine
+ supertest
+ nodemon
+ prettier
+ rimraf
+ ts-node
+ typescript
