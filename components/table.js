export function createTable(obj) {
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdKoshel = document.createElement('td');
    let tdCategory = document.createElement('td');
    let tdSumma = document.createElement('td');
    let tdTime = document.createElement('td');

    tdId.textContent = obj.id;
    tdKoshel.textContent = obj.koshelok;
    tdCategory.textContent = obj.category;
    tdSumma.textContent = obj.summa;
    tdTime.textContent = obj.when;    

    tdId.classList.add('q');
    tdKoshel.classList.add('w');
    tdCategory.classList.add('e');
    tdSumma.classList.add('r');
    tdTime.classList.add('t');

    tr.append(tdId, tdKoshel, tdCategory, tdSumma, tdTime);

    return tr
}