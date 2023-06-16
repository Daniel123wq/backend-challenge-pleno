# Dockerfile
FROM php:8.0-fpm

# Instala as dependências necessárias
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg-dev \
    libonig-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    nodejs \
    npm

# Instala extensões PHP necessárias
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl gd

# Instala o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Configuração do diretório de trabalho
WORKDIR /var/www/html

# Copia os arquivos do projeto
COPY . /var/www/html

# Instala as dependências do Composer
RUN composer install --no-interaction --optimize-autoloader

# Copia o arquivo de exemplo de configuração do ambiente
RUN cp .env.example .env

# Gera a chave do aplicativo
RUN php artisan key:generate

# Define as permissões corretas para os arquivos do Laravel
RUN chown -R www-data:www-data /var/www/html/storage

RUN cd daniel-frontend-dok

RUN npm i

RUN npm run serve

RUN cd ..
# Expor a porta do servidor web
EXPOSE 9000
EXPOSE 8080

# Comando para iniciar o servidor PHP-FPM
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=9000"]