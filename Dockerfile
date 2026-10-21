FROM nginx:alpine

# Copiar configuracion optimizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar todos los archivos de la pagina web
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
