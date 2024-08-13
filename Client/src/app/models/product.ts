export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id : any,name : any,description = '',price = 0,imageUrl = "https://static-01.daraz.lk/p/8cb48e3c4a43c91ec05e3694cae27696.jpg"){
        this.id = id,
        this.name = name,
        this.description = description,
        this.price = price,
        this.imageUrl = imageUrl
    }
}
