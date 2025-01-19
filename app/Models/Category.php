<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    /**
     * Các thuộc tính có thể gán hàng loạt.
     */
    protected $fillable = [
        'name',
        'slug',
        'description',
        'parent_id',
        'is_active',
    ];

    /**
     * Danh mục con (quan hệ 1-n: cha-con).
     */
    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    /**
     * Danh mục cha (quan hệ n-1: con-cha).
     */
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }
}
