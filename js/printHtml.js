let printHtml = (array=[])=>{
    let adicionales =`
      <!-- Button trigger modal -->
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Puede agregar +
        </button>
      </div>

    `
    let video = (url)=>{
      return `
        <video  controls>
          <source src="${url}" type="video/mp4">
        </video>
      `
    }
    let image =(url)=>{
      return `
        <img src="${url}" class="card-img-top" alt="..." />
      `

    }
    array = array.sort((a, b) => Number(b.price.substring(11, 14)) - Number(a.price.substring(11, 14)));

    array.forEach(e =>{
      let adicional = e.adicional === true ? adicionales : ''
      let insertHtml = image(e.img)
      if (e.video){
        insertHtml = video (e.video)
      }
      
      document.getElementById("card-products").innerHTML+=`
        <div class="card mb-3">
          ${insertHtml}
          <div class="card-body" style="background-color: black;">
            <h5 class="card-title text-white style-script-regular h1">${e.title}</h5>
            <p class="card-text text-white">
              ${e.description}
            </p>
            <p class="card-text text-white">
              <p class=" text-white h5">${e.price}</p>
              ${ adicional}
            </p>
          </div>
        </div>
      `

    })
  }