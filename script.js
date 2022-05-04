
let tableau1 ;


function sauvJson(){
  let sensjson=JSON.stringify(tableau1);
  localStorage.setItem("jsontableau1", sensjson);
    
  console.log(localStorage)
  }

if(!localStorage.getItem("jsontableau1"))  //localStorage.getItem("jsontableau1")==0
 
 {
  tableau1=[];
 }
else{
let localstorgeparse=JSON.parse(localStorage.getItem("jsontableau1"));

  tableau1=localstorgeparse ;
}
let suprButton = document.querySelectorAll(".btnSupr");
let ModiButton = document.querySelectorAll(".btnModi");
let formulaire = document.getElementById("inscriptions");
let formulaire1 = document.querySelector("inscriptions");
let formulaireE = document.getElementById("inscriptionsedit");
let qrcodejason=document.getElementById("qrcodeid")
let tableaujson=[];

function suprButton1(ele,index){
  suprButton = document.querySelectorAll(".btnSupr");

  suprButton.forEach((ele,index)=>
 
 ele.addEventListener("click",function (ele) {
 
    tableau1.slice(index);
     populateTableList();
    //  suprButton = document.querySelectorAll(".btnSupr");
     suprButton1(ele,index);
 
  }) 
  )
}

function populateTableList(){
  let listOfName='';

console.log(tableau1);  
tableau1.map((ele,index)=> {
  listOfName += ` 
    <tr class="text-center ">
      <td class="w-25 align-middle" >${ele.Type}</td>      
      <td class="w-25 align-middle">${ele.prenom}</td>
      <td class="w-25 align-middle">${ele.nom}</td>
      <td class="w-25 align-middle">${ele.mail}</td>
      <td class="w-25 align-middle"><input type="text" id="telT" name="tel" placeholder="060000" value="${ele.tel}"/></td>
      <td class="w-25 align-middle" >${ele.Type=="Porfessionel" ? "" : ele.adressepostale}</th>
      <td class="w-25 align-middle">${ele.Type=="Personnel" ? "" : ele.NomEntreprise}</th> 
      <td class="w-25 align-middle"><button id="${tableau1.indexOf(ele)}" class="btnSupr" onclick='SuprTableList(${index})'>Suprimer ${tableau1.indexOf(ele)}</button></td>
      <td class="w-25 align-middle"><div class="text-center buttonEditWrapper">
      <button class="btn btn-info btn-rounded btn-sm buttonEdit" data-toggle="modal" data-target="#modalEdit"
        >Edit</a>
    </div></td>
    <td class="w-25 align-middle"><button id="${tableau1.indexOf(ele)}" class="btnModi" onclick='ModiTableList(${index})'>Modifier ${tableau1.indexOf(ele)}</button></td>

    </tr>
    `  
}
    )

document.getElementById('NameList').innerHTML = listOfName;
suprButton1();
ModiButton1()
sauvJson();
}

function SuprTableList(index){
  console.log(index);
  tableau1.splice(index, 1);
  populateTableList();
}
function ModiButton1(ele,index){
  ModiButton = document.querySelectorAll(".btnModi");

  ModiButton.forEach((ele,index)=>
 
 ele.addEventListener("click",function (ele) {
  $("#modalEdit").modal('show');
    alert(ele)
     populateTableList();
    //  suprButton = document.querySelectorAll(".btnSupr");
    alert("fonction modibutton1 327")
     
 
  }) 
  )
}

function PersonneGeneral(prenom, nom,mail,tel) {
  this.prenom = prenom;
  this.nom = nom;
  this.mail = mail;
  this.tel = tel;
  
};
function PersonnePersonnel(prenom, nom,mail,tel, adressepostale) {
PersonneGeneral.call(this, prenom, nom,mail,tel);
this.adressepostale = adressepostale; 
this.Type = "Personnel";
};
function PersonneProfessionel(prenom, nom,mail,tel, NomEntreprise) {
  PersonneGeneral.call(this, prenom, nom,mail,tel);
  this.NomEntreprise = NomEntreprise; 
  this.Type ="Porfessionel"
  };
function valideqr()  {alert("233");
tableaujson.push(formulaire[2].value,formulaire[3].value,formulaire[4].value,formulaire[5].value,formulaire[6].value,formulaire[7].value,formulaire[8].value,);



  // formulaire.forEach((ele)=>
 
  //  tableaujson.push(ele.input.value),
  // )


  let jsonqrcode = JSON.stringify(tableaujson) ;
  alert(jsonqrcode) ;
  qrcodejason.value=jsonqrcode;
  makeCode();


  var divContents = document.getElementById("qrcode").innerHTML;
  var a = window.open('', '', 'height=500, width=500');
  a.document.write('<html><body >');
  a.document.write(divContents);
  a.document.write('</body></html>');
  a.document.close();
  a.print();



}


  // -------------------------------------------------------------------------------------------
  // submission modal

  // -------------------------------------------------------------------------------------------
 document.getElementById("inscriptions").addEventListener("submit",function (e) {
   e.preventDefault();
   alert('formulaire envoyé129');
                 
   let formData = new FormData(formulaire);
 
   let mail = formData.get("mail");
   let nom = formData.get("nom");
   let prenom = formData.get("prenom");
   let tel = formData.get("tel");
   let adressepostale = formData.get("Adresse");
   let Type = formData.get("Type")
   let NomEntreprise = formData.get("NomEntreprise")
 
   // Création de l'objet contact
   if (Type=="pro")
   {let contact= new PersonneProfessionel(prenom, nom,mail,tel, NomEntreprise);
    console.log("ligne 145",contact);
    tableau1.push(contact);
  alert("pro") }
   else {
    let contact= new PersonnePersonnel(prenom, nom,mail,tel, adressepostale);
    tableau1.push(contact); }
  //  let contact= new PersonneGeneral(prenom,nom,mail,tel)


   
    populateTableList();
 
 })
 





// ---------------------------------------------------------------------------------------------------------------------------
//<button id="${tableau1.indexOf(ele)}" class="btnModi" onclick='ModiTableList(${index})'>Modifier ${tableau1.indexOf(ele)}</button>


// <div class="modal-footer d-flex justify-content-center editInsideWrapper">
//           <button class="btn btn-outline-secondary btn-block editInside" data-dismiss="modal">Edit
//             form
//             <i class="fas fa-paper-plane-o ml-1"></i>
//           </button>

// </div>          
//  bouton modal edit pour inserer au dessus
// -------------------------------------------------------------------------------------------------------------------




// const index = tableau1.findIndex( () => btnSupr.onclick);
// console.log(index);



  populateTableList();

 
 
 function ModiTableList(index){
  
  alert("functionmoditablelist 192");
  alert(tableau1[index].prenom);
  $("#modalEdit").modal('show');
  let prenommod1 = document.querySelectorAll  ('#prenommod');
  let mailmod1= document.querySelectorAll  ('#mailmod');
  let nommod1= document.querySelectorAll  ('#nommod');
  let telmod1= document.querySelectorAll  ('#telmod');
  let NomEntreprisemod1= document.querySelectorAll  ('#NomEntreprisemod');
prenommod1[0].value=tableau1[index].prenom,
mailmod1[0].value=tableau1[index].mail,
nommod1[0].value=tableau1[index].nom,
telmod1[0].value=tableau1[index].tel,
NomEntreprisemod1[0].value=tableau1[index].NomEntreprise,

tableau1.splice(index,1);
 populateTableList();




// ----------------------------------------------------------------
// json avec bouton go
// let boutongo= document.getElementsByClassName("testqrcodese");
//  boutongo.click(function() {

// alert ("click 168")
// //   alert(formulaire[2].values)
  
       
//      tableaujson.push(formulaire[2].value,formulaire[3].value,formulaire[4].value,formulaire[5].value,formulaire[6].value,formulaire[7].value,formulaire[8].value,)
//    alert(jsonqrcode) 
  
  
  
//      let jsonqrcode = JSON.stringify(tableaujson) ;
//    let qrcodeid=document.getElementById("qrcodeid");
//    qrcodejason.value=jsonqrcode;
//   //  alert(jsonqrcode);
//   //  makeCode();
//  })
// -----------------------------------------------------------------------


document.getElementById("inscriptionsedit").addEventListener("submit",function (e) {
  e.preventDefault();
  alert('formulaire envoyé 217');               
  
  let formData = new FormData(formulaireE);

  let mail = formData.get("mailE");
  let nom = formData.get("nomE");
  let prenom = formData.get("prenomE");
  let tel = formData.get("telE");
  let adressepostale = formData.get("AdresseE");
  let Type = formData.get("Type")
  let NomEntreprise = formData.get("NomEntrepriseE")

  // Création de l'objet contact
  if (Type=="pro")
  {let contact= new PersonneProfessionel(prenom, nom,mail,tel, NomEntreprise);
    alert("245");
    tableau1.splice(index,0, contact);
  }
  else { alert("248");
  
   let contact= new PersonnePersonnel(prenom, nom,mail,tel, adressepostale);
   tableau1.splice(index,0,contact); }
 //  let contact= new PersonneGeneral(prenom,nom,mail,tel)


  
   populateTableList();
   $("#modalEdit").modal('hide');

})

 
}







// Création du prototype BOISSON ALCOOLISEE

function BoissonAlcoolisee(
  nom,
  prixAchatHT,
  prixVenteHT,
  margeHT,
  prixVenteTTC,
  degres
) {
  Produit.call(this, nom, prixAchatHT, prixVenteHT, margeHT, prixVenteTTC);
  this.degres = degres;
}

// Création du prototype BOISSON NON ALCOOLISEE

function BoissonNonAlcoolisee(
  nom,
  prixAchatHT,
  prixVenteHT,
  margeHT,
  prixVenteTTC
) {
  Produit.call(this, nom, prixAchatHT, prixVenteHT, margeHT, prixVenteTTC);
}

// CREATION du prototype AUTRES

function AutresChoix(nom, prixAchatHT, prixVenteHT, margeHT, prixVenteTTC) {
  Produit.call(this, nom, prixAchatHT, prixVenteHT, margeHT, prixVenteTTC);
}
