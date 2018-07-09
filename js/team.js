
document.querySelector('.rectangle.magda').addEventListener("click", function () {
    this.style.bottom = '-58px';
}
);

document.querySelector('.rectangle.mateusz').addEventListener("click", function () {
    this.style.bottom = '-58px';
}
);

document.querySelector('.rectangle.kacper').addEventListener("click", function () {
    this.style.bottom = '-58px';
}
);

document.querySelector('.rectangle.arek').addEventListener("click", function () {
    this.style.bottom = '-58px';
}
);


// document.querySelector('.rectangle.team').addEventListener("mouseleave", function () {
//     this.style.bottom = '0';
// }
// );

// document.querySelector('.rectangle.team').addEventListener("mouseover", function () {
//     this.style.bottom = '-58px';
// });

// document.querySelector('.box4').addEventListener("mouseover", function () {
//     this.children[0].style.bottom = '-58px';
// });

// document.querySelector('.box4').addEventListener("mouseout", function () {
//     this.children[0].style.bottom = '0';
// });

let $team_container = $(' .team_container');

$team_container.waypoint(function () {
    $team_container.addClass('js-team_container-animate')

}, {offset: '60%'});
