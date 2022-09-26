let urlArr = []
let titleArr = []
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabsList = document.getElementById("tabs-list")
const urlsLocalStorage = JSON.parse( localStorage.getItem("urlArr") )
const titleLocalStorage = JSON.parse( localStorage.getItem("titleArr") )

if (urlsLocalStorage) {
    urlArr = urlsLocalStorage
    titleArr = titleLocalStorage
    render(urlArr, titleArr)
}

saveBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        urlArr.push(tabs[0].url)
        localStorage.setItem("urlArr", JSON.stringify(urlArr))
        titleArr.push(tabs[0].title)
        localStorage.setItem("titleArr", JSON.stringify(titleArr) )
        render(urlArr, titleArr)
    })

})

function render(site, title) {

    let listItems = ""
    for (let i = 0; i < site.length; i++) {
        listItems += `
        <li>
            <div class="saved-tab">
                <a href="${site[i]}" target="_blank">
                    <h2>${title[i]}</h2>
                </a>
            </div>
        </li>
        `
    }
    tabsList.innerHTML = listItems
}



deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    urlArr = []
    titleArr = []
    render(urlArr, titleArr)
})