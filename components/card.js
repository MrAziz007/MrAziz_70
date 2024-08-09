export function createCards(obj) {
    let gridElem = document.createElement('img');

    gridElem.setAttribute('src', obj.img);

    return gridElem
}