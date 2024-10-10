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
      let precio=''
      if (e.lista) {
        precio =` 
         <div class="card-text text-white details" Style="display: none;"> 
          ${e.description}
         </div>

        `
      }else {
        precio = `
            <p class="card-text text-white details " Style="display: none;">
              ${e.description}
            </p>
            <p class="card-text text-white" >
            <p class=" text-white h5">${e.price}</p>
              ${ adicional}
            </p>
        `
      }
      
      document.getElementById("card-products").innerHTML+=`
      <div class="container col-10 g-6" onclick="toggleDetails(this)">
        <div class="card mb-3">
          ${insertHtml}
          <div class="card-body" style="background-color: black;">
            <h5 class="card-title text-white style-script-regular h1 animate__bounceIn">${e.title}</h5>
      
              ${precio}
          </div>
        </div>
      </div>
      `

    })
  }

  function toggleDetails(element) {
    const details = element.querySelector('.details');
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}


  