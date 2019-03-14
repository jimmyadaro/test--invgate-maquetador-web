//Styles
import '../scss/styles.scss';

//Get images
import Bg_Img from '../img/index/bioware.jpg';

//Apply images
document.getElementsByClassName("image-background")[0].style.backgroundImage = `url('${Bg_Img}')`;

//Apply cards container column class
var Cards_Containers = document.querySelectorAll(".col-container");
Cards_Containers.forEach(function (Card) {
  Card.className += " col-xl-4 col-md-6";
});
