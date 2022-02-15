var list = document.getElementById("list");
var aday = document.getElementById("aday");
var x = 0
var localList = [];

if (localStorage.length != 0) {
    localList = localStorage.getItem('localList').replace(/[\[\]"']/g, '').split(',')

    console.log(localList)
    console.log(localList[0])
    console.log(localList.length)
    for (let i = localList[0]; i <= localList[localList.length-1]; i++) {
        if (localStorage.getItem(i) != null) {
            list.innerHTML = list.innerHTML + localStorage.getItem(i);
        }
        x = i + 1
    }
}

function addItem() {
    x++;
    var icon = document.createElement("i");
    var li = document.createElement("li");
    var a = document.createElement("a");


    icon.className = 'fas fa-times';
    a.className = 'delete-item float-right';

    a.setAttribute('href', '#');
    li.setAttribute('id', x);
    li.setAttribute('class', 'list-group-item list-group-item-secondary');

    a.appendChild(icon);
    li.appendChild(document.createTextNode(aday.value));
    li.appendChild(a);
    list.appendChild(li);

    localList.push(x);
    localStorage.setItem(x, li.outerHTML);

    const deleteItems = document.querySelectorAll('.fa-times');

    deleteItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            let onay = confirm("Silmek istediğinize emin misiniz?")
            if (onay === true) {
                li = e.target.closest('li')
                console.log(e.target)
                console.log(li.id)
                li.remove();
                localStorage.removeItem(li.id)
                localList = localList.filter(item => !(item = li.id))
                console.log(localList);
            }
        })
    });

    localStorage.setItem("localList", JSON.stringify(localList))
};

function removeAll() {

    var onay = confirm("Silmek istediğinize emin misiniz?");

    if (onay === true) {
        var sil = document.querySelectorAll('li');

        for (let i = 0; i < sil.length; i++) {

            sil.item(i).remove();

        }
        x=0;
        localStorage.clear();
    }
};