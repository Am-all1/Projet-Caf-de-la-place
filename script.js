let tableau1;

// SAUVEGARDE DU TABLEAU DANS LE LOCAL STORAGE

function sauvJson() {
  let sensjson = JSON.stringify(tableau1);
  localStorage.setItem("jsontableau1", sensjson);

  console.log(localStorage);
}

if (!localStorage.getItem("jsontableau1")) {
  //localStorage.getItem("jsontableau1")==0

  tableau1 = [];
} else {
  let localstorgeparse = JSON.parse(localStorage.getItem("jsontableau1"));

  tableau1 = localstorgeparse;
}

// IMPORTATION DES ELEMENTS

let suprButton = document.querySelectorAll(".btnSupr");
let ModiButton = document.querySelectorAll(".btnModi");
let formulaire = document.getElementById("inscriptions");
let formulaire1 = document.querySelector("inscriptions");
let formulaireE = document.getElementById("inscriptionsedit");
let qrcodejason = document.getElementById("qrcodeid");
let typeselect = document.querySelector("Type");
let degreealdisp = document.querySelector("degres");
let tableaujson = [];

// FONCTION BOUTON SUPPRIMER

function suprButton1(ele, index) {
  suprButton = document.querySelectorAll(".btnSupr");

  suprButton.forEach((ele, index) =>
    ele.addEventListener("click", function (ele) {
      tableau1.slice(index);
      populateTableList();
      //  suprButton = document.querySelectorAll(".btnSupr");
      suprButton1(ele, index);
    })
  );
}

function populateTableList() {
  let listOfName = "";

  console.log(tableau1);
  tableau1.map((ele, index) => {
    listOfName += ` 
    <tr class="text-center ">
      <td class="w-10 align-middle" >${ele.Type}</td>      
      <td class="w-10 align-middle">${ele.nom}</td>
      <td class="w-10 align-middle">${ele.quantite}</td>
      <td class="w-10 align-middle">${ele.prixAchatHT}</td>
      <td class="w-10 align-middle">${ele.prixVenteHT}</td>
      <td class="w-10 align-middle">${ele.margeHT}</td>
      <td class="w-10 align-middle">${ele.prixVenteTTC}</td>
      
      <td class="w-10 align-middle" >${
        ele.Type == "alcool" ? ele.degres : ""
      }</th>
      
      <td class="w-10 align-middle"><button id="${tableau1.indexOf(
        ele
      )}" class="btnSupr" onclick='SuprTableList(${index})'>Suprimer</button></td>
      
    <td class="w-5 align-middle"><button id="${tableau1.indexOf(
      ele
    )}" class="btnModi" onclick='ModiTableList(${index})'>Modifier</button></td>

    </tr>
    `;
  });

  document.getElementById("NameList").innerHTML = listOfName;
  suprButton1();
  ModiButton1();
  sauvJson();
}

function SuprTableList(index) {
  console.log(index);
  tableau1.splice(index, 1);
  populateTableList();
}

// FONCTION BOUTON MODIFIER

function ModiButton1(ele, index) {
  ModiButton = document.querySelectorAll(".btnModi");

  ModiButton.forEach((ele, index) =>
    ele.addEventListener("click", function (ele) {
      $("#modalEdit").modal("show");
      alert(ele);
      populateTableList();
      //  suprButton = document.querySelectorAll(".btnSupr");
      alert("fonction modibutton1 327");
    })
  );
}

// Création du prototype general PRODUIT

function Produit(Type, nom, quantite, prixAchatHT, prixVenteHT, margeHT) {
  this.Type = Type;
  this.nom = nom;
  this.quantite = quantite;
  this.prixAchatHT = prixAchatHT;
  this.prixVenteHT = prixVenteHT;
  this.margeHT = margeHT;
  this.prixVenteTTC = prixVenteHT;

  margeHT = prixVenteHT - prixAchatHT;
}

// Création du prototype BOISSON ALCOOLISEE

function BoissonAlcoolisee(
  Type,
  nom,
  quantite,
  prixAchatHT,
  prixVenteHT,
  margeHT,
  prixVenteTTC,
  degres
) {
  Produit.call(
    this,
    Type,
    nom,
    quantite,
    prixAchatHT,
    prixVenteHT,
    margeHT,
    prixVenteTTC
  );
  this.degres = degres;
}

// Création du prototype BOISSON NON ALCOOLISEE

function BoissonNonAlcoolisee(
  Type,
  nom,
  quantite,
  prixAchatHT,
  prixVenteHT,
  margeHT,
  prixVenteTTC
) {
  Produit.call(
    this,
    Type,
    nom,
    quantite,
    prixAchatHT,
    prixVenteHT,
    margeHT,
    prixVenteTTC
  );
}

// CREATION du prototype AUTRES

function AutresChoix(
  Type,
  nom,
  quantite,
  prixAchatHT,
  prixVenteHT,
  margeHT,
  prixVenteTTC
) {
  Produit.call(
    this,
    Type,
    nom,
    quantite,
    prixAchatHT,
    prixVenteHT,
    margeHT,
    prixVenteTTC
  );
}

// FONCTION QR CODE

function valideqr() {
  alert("233");
  tableaujson.push(
    formulaire[2].value,
    formulaire[3].value,
    formulaire[4].value,
    formulaire[5].value,
    formulaire[6].value,
    formulaire[7].value,
    formulaire[8].value
  );

  // formulaire.forEach((ele)=>

  //  tableaujson.push(ele.input.value),
  // )

  let jsonqrcode = JSON.stringify(tableaujson);
  alert(jsonqrcode);
  qrcodejason.value = jsonqrcode;
  makeCode();

  var divContents = document.getElementById("qrcode").innerHTML;
  var a = window.open("", "", "height=500, width=500");
  a.document.write("<html><body >");
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
}

// -------------------------------------------------------------------------------------------
// submission modal

// -------------------------------------------------------------------------------------------
document
  .getElementById("inscriptions")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("formulaire envoyé129");

    let formData = new FormData(formulaire);

    let Type = formData.get("Type");
    let nom = formData.get("nom");
    let quantite = formData.get("quantite");
    let prixAchatHT = formData.get("prixAchatHT");
    let prixVenteHT = formData.get("prixVenteHT");
    let margeHT = formData.get("margeHT");
    let prixVenteTTC = formData.get("PrixVenteTTC");
    let degres = formData.get("degres");

    // Création de l'objet produit
    console.log(Type);
    if (Type == "alcool") {
      let ventePrixTTC = prixVenteHT + (20 / 100) * prixVenteHT;

      let produit = new BoissonAlcoolisee(
        Type,
        nom,
        quantite,
        prixAchatHT,
        prixVenteHT,
        margeHT,
        ventePrixTTC,
        degres
      );
      console.log("ligne 145", produit);
      tableau1.push(produit);
      alert("alcool");
    } else if (Type == "nonAlcool") {
      let ventePrixTTC = prixVenteHT + (5.5 / 100) * prixVenteHT;

      let produit = new BoissonNonAlcoolisee(
        Type,
        nom,
        quantite,
        prixAchatHT,
        prixVenteHT,
        margeHT,
        prixVenteTTC
      );
      tableau1.push(produit);
      alert("nonAlcool");
    } else if (Type == "autres") {
      let ventePrixTTC = prixVenteHT + (20 / 100) * prixVenteHT;

      let produit = new AutresChoix(
        Type,
        nom,
        quantite,
        prixAchatHT,
        prixVenteHT,
        margeHT,
        prixVenteTTC
      );
      tableau1.push(produit);
      alert("autres");
    } else alert("coucou");

    //  let produit= new PersonneGeneral(prenom,nom,mail,tel)

    populateTableList();
  });

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

function ModiTableList(index) {
  alert("functionmoditablelist 192");
  alert(tableau1[index].prenom);
  $("#modalEdit").modal("show");
  let prenommod1 = document.querySelectorAll("#prenommod");
  let mailmod1 = document.querySelectorAll("#mailmod");
  let nommod1 = document.querySelectorAll("#nommod");
  let telmod1 = document.querySelectorAll("#telmod");
  let NomEntreprisemod1 = document.querySelectorAll("#NomEntreprisemod");
  (prenommod1[0].value = tableau1[index].prenom),
    (mailmod1[0].value = tableau1[index].mail),
    (nommod1[0].value = tableau1[index].nom),
    (telmod1[0].value = tableau1[index].tel),
    (NomEntreprisemod1[0].value = tableau1[index].NomEntreprise),
    tableau1.splice(index, 1);
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

  document
    .getElementById("inscriptionsedit")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("formulaire envoyé 217");

      let formData = new FormData(formulaireE);

      let mail = formData.get("mailE");
      let nom = formData.get("nomE");
      let prenom = formData.get("prenomE");
      let tel = formData.get("telE");
      let adressepostale = formData.get("AdresseE");
      let Type = formData.get("Type");
      let NomEntreprise = formData.get("NomEntrepriseE");

      // Création de l'objet produit
      if (Type == "pro") {
        let produit = new PersonneProfessionel(
          prenom,
          nom,
          mail,
          tel,
          NomEntreprise
        );
        alert("245");
        tableau1.splice(index, 0, produit);
      } else {
        alert("248");

        let produit = new PersonnePersonnel(
          prenom,
          nom,
          mail,
          tel,
          adressepostale
        );
        tableau1.splice(index, 0, produit);
      }
      //  let produit= new PersonneGeneral(prenom,nom,mail,tel)

      populateTableList();
      $("#modalEdit").modal("hide");
    });
}
typeselect.addEventListener("change", function (e) {
  if (e.target.value !== "alcool") {
    degreealdisp.style.display = "none";
    degreealdisp.value = "none";
  } else if (e.target.value == "alcool") {
    degreealdisp.style.display = "block";
    degreealdisp.value = "";
  }
});
