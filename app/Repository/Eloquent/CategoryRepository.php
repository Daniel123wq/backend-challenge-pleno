<?php

namespace App\Repository\Eloquent;

use App\Mail\SendMailAfterCreateProd;
use App\Models\Category;
use App\Repository\CategoryRepositoryInterface;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;

class VeiculoRepository extends BaseRepository implements CategoryRepositoryInterface
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
    public function __construct(Category $model)
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
            'nome' => [Rule::unique('categories', 'nome'), 'required', 'nome']
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
            'nome' => [Rule::unique('categories', 'nome')->ignore($this->model->id), 'required', 'nome']
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