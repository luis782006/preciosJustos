export class Libreria {

  // Funciones
  /*  
  // Funcion de prueba.
  saludar(elSaludo:string) {
    console.log('Hola estoy en la librería', elSaludo);
  }
  */
    
  
    cleaningProvinciaProduct(provinciaProduct: any) {
      delete provinciaProduct.range;
      delete provinciaProduct.majorDimension;
    }
    
    deleteTwoAtt(provinciasProduct: any) {
      for (let index = 0; index < 2; index++) {
        provinciasProduct.values.shift();
      }
    }

      pushProducts(provinciasProduct: any) {
        console.log(provinciasProduct);

        let arrayProduct: any[] = [];
        for (let index = 0; index < provinciasProduct.values.length; index++) {
          arrayProduct[index] = {
            code: provinciasProduct.values[index][0],
            nameProduct: provinciasProduct.values[index][1],
            price: provinciasProduct.values[index][2],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellendus laudantium vel quasi quibusdam dolore incidunt qui consectetur fuga cum"
          };
    
          arrayProduct.push(provinciasProduct.values[index]);
        }
        // provinciasProduct = arrayProduct;
       return arrayProduct;
        
        
      }

}   