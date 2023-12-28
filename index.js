var bookmarkName = document.getElementById("bookmarkName");
var bookmarkURL = document.getElementById("bookmarkURL");
var urlContainer;
if (localStorage.getItem("urlContainer") !== null) {
  urlContainer = JSON.parse(localStorage.getItem("urlContainer"));
  displayUrl();
} else {
  urlContainer = [];
}
function addUrl() {
  if (validateUrl(bookmarkURL.value) && validateName(bookmarkName.value)) {
    sit = {
      name: bookmarkName.value,
      url: bookmarkURL.value,
    };

    urlContainer.push(sit);
    localStorage.setItem("urlContainer", JSON.stringify(urlContainer));
    displayUrl();
    clearInputs();
  } else {
  }
}
function clearInputs() {
  bookmarkName.value = "";
  bookmarkURL.value = "";
}
function displayUrl() {
  var trs = "";
  for (var i = 0; i < urlContainer.length; i++) {
    trs += `<tr>
                 <td>${i + 1}</td>
                  <td>${urlContainer[i].name}</td>              
                  <td>
                      <a href="https://${
                        urlContainer[i].url
                      }" target = "_blank" style="text-decoration: none; color: white;" class="btn btn-visit"> <i class="fa-solid fa-eye pe-2"></i>Visit</a>
                    
                  </td>
                  <td>
                    <button  onclick="deletUrl(${i})" class="btn btn-delete pe-2" data-index="0">
                      <i class="fa-solid fa-trash-can"></i>
                      Delete
                    </button>
                  </td>
              </tr>`;
  }
  document.getElementById("tableContent").innerHTML = trs;
}
// function visit(index2){
//   open(urlContainer[index2].url ,"blank")

// }
function deletUrl(index) {
  urlContainer.splice(index, 1);
  localStorage.setItem("urlContainer", JSON.stringify(urlContainer));
  displayUrl();
}
function validateUrl(bookmarkURL) {
  var bookmarkURLRegex = /^www\.[a-z0-9]{2,}\.com$/;
  return bookmarkURLRegex.test(bookmarkURL);
}
function validateName(bookmarkName) {
  var bookmarkNameRgex = /\w{2,20}/;
  return bookmarkNameRgex.test(bookmarkName);
}
