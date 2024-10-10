let menu = ()=>{
    document.getElementById("menu").innerHTML= `
      <div class="container-fluid">
        <div class="container  ">
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand style-script-regular  col-1" href="./index.html">Menú Ribs Burger</a>

        </div>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Categorías
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./entradas.html">Entradas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./platos.html">Platos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./burger.html">Burger</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./bebidas.html">Bebidas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./cocteles.html">Cocteles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./postres.html">Postres</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./extras.html">Extras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./licores.html">Cervezas y Licores</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./cafes.html">Cafés</a>
              </li>
            </ul>
            
          </div>
        </div>

        
      </div>




    `


}

menu()