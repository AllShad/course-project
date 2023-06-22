import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('Receita de Teste', 'Descrição da receita', 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg'),
    new Recipe('Receita Teste 1', 'Descricao Receita teste 2', 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg')
  ]

}
