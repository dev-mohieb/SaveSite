const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
let tabsList = document.getElementById("tabs-list")


let urlArr = []
let titlesArr = []
const urlsLocalStorage = localStorage.getItem(JSON.parse(urlArr))

if (urlsLocalStorage) {
    urlArr = urlsLocalStorage
    titlesArr = titlesLocalStorage
    render(urlArr, titlesArr)
}

saveBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        urlArr.push(tabs[0].url)
        localStorage.setItem("urlArr", JSON.stringify(urlArr))
        render(urlArr, titlesArr)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    urlArr = []
    titlesArr = []
    render(urlArr, titlesArr)
})

function render(site, title) {
    let listItems = ""

    for (let i = 0; i < site.length; i++) {

        listItems +=
    `
    <li>
        <div class="saved-tab">
            <a href="${site}" target="_blank">
                <h2>${title}</h2>
            </a>
        </div>
    </li>
    `
    }

    tabsList.innerHTML = listItems
}