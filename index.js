const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
let tabsList = document.getElementById("tabs-list")
let urlArr = []
let titleArr = []
const urlsFromLocalStorage = localStorage.getItem(JSON.parse(urlList))

if (urlsFromLocalStorage) {
    urlArr = urlsFromLocalStorage
    render(urlArr, titleArr)
}

saveBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        urlArr.push(tabs[0].url)
        localStorage.setItem("urlArr", JSON.stringify(urlArr))
        render(urlArr, titleArr)
    })
})

function render(sitesArr, nameArr) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {

        listItems +=
    `
    <li>
        <div class="saved-tab">
            <a href="${sitesArr}" target="_blank">
                <h2>${nameArr}</h2>
            </a>
        </div>
    </li>
    `
    }
    tabsList.innerHTML = listItems
}