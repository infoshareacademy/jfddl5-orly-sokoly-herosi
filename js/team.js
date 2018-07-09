

document.querySelector('.box__Magda').addEventListener("mouseover", function () {
    this.children[1].style.bottom = '-58px';
}
);

document.querySelector('.box__Magda').addEventListener("mouseout", function () {
    this.children[1].style.bottom = '0';
}
);
document.querySelector('.box__Mateusz').addEventListener("mouseover", function () {
    this.children[1].style.bottom = '-58px';
}
);

document.querySelector('.box__Mateusz').addEventListener("mouseout", function () {
    this.children[1].style.bottom = '0';
}
);
document.querySelector('.box__Kacper').addEventListener("mouseover", function () {
    this.children[1].style.bottom = '-58px';
}
);

document.querySelector('.box__Kacper').addEventListener("mouseout", function () {
    this.children[1].style.bottom = '0';
}
);

document.querySelector('.box__Arek').addEventListener("mouseover", function () {
    this.children[1].style.bottom = '-58px';
}
);

document.querySelector('.box__Arek').addEventListener("mouseout", function () {
    this.children[1].style.bottom = '0';
}
);

let $team_container = $(' .team_container');

$team_container.waypoint(function () {
    $team_container.addClass('js-team_container-animate')

}, {offset: '60%'});
