# udacity-image-processing-api
This repo is created for Udacity Full Stack Developer course

To start application:
1. Install NPM packages `npm i`
2. Transpile TS to JS `npm run build`
3. Start application `npm start`
4. Access URL http://localhost:3000/api/image?fileName=<string>&width=<number>&height=<number>

Available image names can be found in /src/data/image folder. E.g. http://localhost:3000/api/image?fileName=icelandwaterfall&height=300&width=300

Cases to test:
1. When endpoint are missing any one of the GET parameter 
   1. http://localhost:3000/api/image
   2. http://localhost:3000/api/image?fileName=fjord
2. When file name is not found
   1. http://localhost:3000/api/image?fileName=fakefilenameprovided

To run test:
> npm run test

To run application in TS:
> npm run dev
