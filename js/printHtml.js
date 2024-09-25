let printHtml = (array=[])=>{
    let adicionales =`
      <!-- Button trigger modal -->
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Puede agregar +
        </button>
      </div>

    `
    array.forEach(e =>{
      let adicional = e.adicional === true ? adicionales : ''
      document.getElementById("card-products").innerHTML+=`
        <div class="card mb-3">
          <img src="${e.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${e.title}</h5>
            <p class="card-text">
              ${e.description}
            </p>
            <p class="card-text">
              <small class="lead">${e.price}</small>
              ${ adicional}
            </p>
          </div>
        </div>
      `

    })
  }