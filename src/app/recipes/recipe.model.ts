import { Ingredient } from '../shared/ingredient.model';
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string = 'Some recipe', desc: string = 'Some Recipe',
            imagePath: string = 'http://www.ipa.co.uk/write/imageportfolio/recipe_logo.jpg',
            ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
