import "/src/scss/style.scss";
import "bootstrap";
import $ from "jquery";


const btn = $("#btnBackToTop");

btn.click(() => {
    window.scrollTo(0, 0);
});