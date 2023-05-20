// JavaScript Document<script>
 $(document).ready(function() {
     $(".addoncheck").hide();
     $(".productcheck").hide();
     $(".crustaddoncheck").hide();
     $(".sauceaddoncheck").hide();
     $("div[id*=addon]").click(function () {
        $(this).children(".addoncheck").toggle();
    });
     $("div[id*=product]").click(function () {
     	$(".productcheck").hide();
        $(this).children(".productcheck").toggle();
    });
     $("div[id*=crust]").click(function () {
     	$(".crustaddoncheck").hide();
        $(this).children(".crustaddoncheck").toggle();
    });
     $("div[id*=sauce]").click(function () {
     	$(".sauceaddoncheck").hide();
        $(this).children(".sauceaddoncheck").toggle();
    });
}); 