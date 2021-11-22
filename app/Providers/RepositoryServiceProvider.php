<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repository\Eloquent\BaseRepository;
use App\Repository\Eloquent\UsuarioRepository;
use App\Repository\Eloquent\CategoryRepository;
use App\Repository\Eloquent\ProductRepository;
use App\Repository\EloquentRepositoryInterface;
use App\Repository\CategoryRepositoryInterface;
use App\Repository\UsuarioRepositoryInterface;
use App\Repository\ProductRepositoryInterface;
use Illuminate\Auth\EloquentUserProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(EloquentRepositoryInterface::class, BaseRepository::class);
        $this->app->bind(UsuarioRepositoryInterface::class, UsuarioRepository::class);
        $this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
        $this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
