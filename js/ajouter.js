function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}


var newCommandForm = document.forms.newTaskF; 


function ajouter(){
    
    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const descriptTd = document.createElement('td')
    taskTd.textContent = document.newTaskF.tache.value
    descriptTd.textContent = document.newTaskF.description.value
    
    console.log(taskTd.textContent)
    console.log(descriptTd.textContent)

    if (!document.newTaskF.tache.checkValidity() ||
          !document.newTaskF.description.checkValidity()
         ) {
               return
        }
    
    //const table = document.querySelector('table')
    newItem.append(taskTd, descriptTd)

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    /*  Ex2)3)vi) */
    table.appendChild(newItem)

 }

 //supprimer toutes les lignes du tableau
function supprimer() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    
 }