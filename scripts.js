/*Possivelmente isso aqui deve ser considerado uma GAMBIARRA*/ 

const GetItems = (item) => {
    return document.getElementById(item);
}

const removeStyle = (id, className) => {
  GetItems(id).classList.remove(className);
};

const addStyle =(id, className) => {
  GetItems(id).classList.add(className);
};

function cssStyle(){
  const body = document.getElementsByTagName("BODY")[0];
  body.classList.add("body");

  removeStyle("id-h1", "h1");
  removeStyle("img", "hide");
  removeStyle("job", "hide");
  removeStyle("info", "p");
  removeStyle("h3Wish", "hide");
  removeStyle("form","formBasic");
  removeStyle("btnClear", "btn-green");
  removeStyle("btnSubmit", "btn-green");

  addStyle("container", "container");
  addStyle("title","title");
  addStyle("underline","underline");
  addStyle("img","img-container");
  addStyle("author","author");
  addStyle("job", "job");
  addStyle("info", "info");
  addStyle("oList", "oList");
  addStyle("spanWish", "hide");
  addStyle("btn-area", "btn-area");

  GetItems("review").classList.add("article-card", "review");
  GetItems("wish").classList.add("article-card", "wish");
  GetItems("article-form").classList.add("article-card", "form");
  GetItems("btnClear").classList.add("btn", "resetBtn");
  GetItems("btnSubmit").classList.add("btn", "resetBtn");
  GetItems("checklist").classList.add("article-card", "checklist");
  GetItems("btnBasico").classList.add("btn", "resetBtn");
  GetItems("btnCss").classList.add("btn", "resetBtn");
  
  checkListItens();
}

function basicStyle(){
  const body = document.getElementsByTagName("BODY")[0];
  body.classList.remove("body");

  removeStyle("container", "container");
  removeStyle("title","title");
  removeStyle("underline","underline");
  removeStyle("img","img-container");
  removeStyle("author","author");
  removeStyle("job", "job");
  removeStyle("info", "info");
  removeStyle("oList", "oList");
  removeStyle("spanWish", "hide");
  removeStyle("btn-area", "btn-area");

  GetItems("review").classList.remove("article-card", "review");
  GetItems("wish").classList.remove("article-card", "wish");
  GetItems("article-form").classList.remove("article-card", "form");
  GetItems("btnClear").classList.remove("btn", "resetBtn");
  GetItems("btnSubmit").classList.remove("btn", "resetBtn");
  GetItems("checklist").classList.remove("article-card", "checklist");
  GetItems("btnBasico").classList.remove("btn", "resetBtn");
  GetItems("btnCss").classList.remove("btn", "resetBtn");

  addStyle("id-h1", "h1");
  addStyle("img", "hide");
  addStyle("job", "hide");
  addStyle("info", "p");
  addStyle("h3Wish", "hide");
  addStyle("form", "formBasic");
  addStyle("btnClear", "btn-green");
  addStyle("btnSubmit", "btn-green");

  checkListItens();
}  

function validateForm() {
  var user = document.forms["form"]["usuario"].value;
  var password = document.forms["form"]["senha"].value;
  if (user == "" || user == null || password == "" || password == null) {
    alert("Usuário ou senha inválidos");
    return false;
  }
}

/* CheckList */
/* Bug: Quando os btns mudam de stylo o valor do color continuar sendo o mesmo*/
const checkListItens = () => {    
  const checkListSection = GetItems("checklist");
  let checkboxesItems = checkListSection.querySelectorAll("input");

  const h1 = GetItems("id-h1");
  const info = GetItems("info");
  const form = GetItems("form");

  const btnClear = GetItems("btnClear");
  const btnSubmit = GetItems("btnSubmit");  

  checkboxesItems.forEach((element) => {
    if (element.getAttribute('id') == "h1Check") {
      console.log();
      element.checked = getComputedStyle(h1).color == "rgb(255, 0, 0)" ? true : false;
    }

    if (element.getAttribute('id') == "paragBlueCheck") {          
      element.checked = getComputedStyle(info).color == "rgb(0, 0, 255)" ? true : false;
    }

    if (element.getAttribute('id') == "formPaddingCheck") {          
      element.checked = getComputedStyle(form).padding == "20px" ? true : false;
    }
    
    if (element.getAttribute('id') == "btnGreenCheck") {
      element.checked = (
        getComputedStyle(btnClear).color == "rgb(46, 139, 87)" 
        && 
        getComputedStyle(btnSubmit).color == "rgb(46, 139, 87)" 
      ) ? true : false;
    }
  });
}
  
window.onload = checkListItens();
