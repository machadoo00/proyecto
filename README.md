# Proyecto laravel with inertiajs React

A demo application to illustrate how [Inertia.js](https://inertiajs.com/) works with [Laravel](https://laravel.com/) and [React](https://reactjs.org/).

## Requirements

```sh
PHP > 8
```

## Installation

Clone the repo locally:

```sh
git clone https://github.com/machadoo00/proyecto.git
cd proyecto
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
npm install
```

Build assets:

```sh
npm run dev
```

Setup configuration:

```sh
cp .env.example .env
```

Configure .env conection mysql database

Generate application key:

```sh
php artisan key:generate
```

Run database migrations:

```sh
php artisan migrate
```

Run artisan server:

```sh
php artisan serve
```

You're ready to go! [Proyecto](http://127.0.0.1:8000/) in your browser.

Realizar una consulta que permita conocer cuál es el producto que más stock tiene.
```sh
SELECT producto_nombre, MAX(producto_stock) FROM `productos`;
```

Realizar una consulta que permita conocer cuál es el producto más vendido.
```sh
SELECT producto_ventas_producto, COUNT(*) as ventas FROM `producto_ventas` GROUP BY producto_ventas_producto ORDER BY ventas DESC;
```
