# Stage 1: Build the Angular app
FROM node:18 AS build
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod 

# Stage 2: Serve the app
FROM nginx:alpine
COPY --from=build /app/dist/memoteca/browser /usr/share/nginx/html
EXPOSE 80
