1. Shop: <DONE>
    - 1.1 fetchear los productos. SOLO EN MOUNT. <DONE>
    - 1.2 Para las categorias => array de product.categories => tiene que quedar un array donde no haya
          repeticiones de category. <DONE>
    - 1.3 Hacer un map para que muestre todas las categorias. <DONE>
        handleCategoryChosen => recibir el category => cambia el state categoryChosen
        el state se envia como prop a la MainShop.
    - 1.4 En cada ShopCard => product.image, product.title, product.price => necesario tambien sin 
          mostrar: id, category. <DONE>
    - 1.5 Hacer un map para que muestre todos los productos en ShopCards. <DONE>
    - 1.6 Filtrado por categoria onClick de cada category de los ShopCard. <DONE>
    - 1.7 Styling <DONE>

2. Suma productos al carrito y total a pagar. <DONE>
    - 2.1 Un estado cartProducts (array de obj productos). <done>
    - 2.2 handleAddProductsToCart => recibe un producto y lo agrega con setCartProducts. <done>
    - 2.3 onClick de cada CardProduct => handleAddProductsToCart. <done>
    - 2.4 En el carrito de Header cambiar el numero con el cartProducts.length + 1. <done>
    - 2.5 Un estado totalPrice (numero). <done>
    - 2.6 handleAddPriceToTotal => recibe el cartProducts, filtra por product.price y suma. <done>
    - 2.7 Se activa con el onClick de cada CardProduct (o en el handleAdd, pero creo que va a tomar el state anterior.) AL FINAL USE USEEFFECT <done>
    - 2.8 En el subtotal del Header cambiar el numero por el estado totalPrice. <done>

3. CheckOut Page:
    - 3.1 Hacer un array con todos los productos de cartProducts pero sin repeticiones. <done>
    - 3.2 Mostrarlos en una Card <done>
    - 3.3 En la Card tiene que haber un input(number. con valor inicial = length de productos del mismo ID).
    - 3.4 El input tiene que permitir sumar o restar (productos con el mismo ID) al cartProducts.
    - 3.5 A la derecha del Card tiene que mostrarse el precio total a pagar y un fake boton de Payout.

4. Product Page...



