<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>



## Sobre esse projeto "# backend-challenge-pleno" 

Projeto criado no <i>pattern<i> repository, utilizando API RESTFULL JSON.
Esse projeto comtêm uma compilação do frontend para simular as chamadas nos endpoints, essa compilação foi feita em VUE 2
O objetivo da API é mostrar uma arquitetura de softwares onde é possivel a contrução Ágil no backend.
Isso permite não só trocar facilmente o banco de dados, mas toda a lógica de leitura e escrita de dados (log, cache, coordenação de transação e distribuição, autorização, etc.). O que também é ótimo para facilitar a criação de testes formais, se bem feito, esse é só um protótipo utilizando a ORM padrão do laravel.

# Requirements
PHP >= 7.3

# Usage
clone esse repositório e executa `composer install` para instalar todas depedências necessárias. Como administrador Renomeia o arquivo `.env.example` para  `.env` configura nele o DB e execute `php artisan key:generate` para gerar uma chave para aplicação desse projeto laravel.

Para executar a migration rode `php artisan migrate`
Para Iniciar o serve `php artisan serve`

# Help
Caso não consiga baixar as dependências, existe um branch serve nesse repository com todas dependências executada no modo DEV, mas não esqueça de fazer os passos acima e executar o `composer dump-autoload`.
