<?php

namespace App\Repository\Eloquent;

use App\Models\Product;
use App\Repository\ProductRepositoryInterface;
use Illuminate\Validation\Rule;

class ProductRepository extends BaseRepository implements ProductRepositoryInterface
{
    /**
     * @var Model
     */
    protected $model;

    /**
     * BaseRepository construct
     * 
     * @param Veiculo $model
     */
    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    
    /**
     * Get rules for validation model in create
     * 
     * @return array $rules
     */
    public function getRulesCreate(): array
    {
        return [
            'nome' => [Rule::unique('categories', 'nome'), 'required'],
        ];
    }

    /**
     * Get rules for validation model in Update
     * 
     * @return array $rules
     */
    public function getRulesUpdate(): array
    {
        return [
            'nome' => [Rule::unique('categories', 'nome')->ignore($this->model->id), 'required']
        ];
    }

    /**
     * Handle the Model "created" event.
     *
     * @return void
     */
    public function created(): void
    {
    }

}