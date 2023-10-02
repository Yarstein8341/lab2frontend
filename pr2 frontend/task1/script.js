window.onload = function () {

    var cells = document.querySelectorAll('table td');


    cells.forEach(function (cell, index) {
        var row = Math.floor(index / 5) + 1;
        var col = index % 5 + 1;


        if ((row % 2 === 1 && col % 2 === 1) || (row % 2 === 0 && col % 2 === 0)) {
            cell.classList.add('selected');
        }
    });
};
