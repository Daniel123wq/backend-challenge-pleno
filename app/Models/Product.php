<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable  = [
        'nome',
        'ean',
        'cor',
        'marca',
        'forma',
        'category_id',
    ];
    
    protected $hidden = ['deleted_at'];

    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s'
    ];

    public function category()
    {
        return $this->hasOne(Category::class);
    }
}
