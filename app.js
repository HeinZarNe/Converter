$(".topound").click(function() {
    $(".shell").toggleClass("switch")


});

$(".tokg").click(function() {
    $(".shell").toggleClass("switch")


});


$(".convert-to-kg").click(_ => {
    let input = document.getElementById("lbinput")
    let output = document.getElementById("lboutput")
    output.value = (input.value / 2.205).toFixed(2) + "kg"
    console.log(input)

})

$(".convert-to-pound").click(_ => {
    let input = document.getElementById("kginput")
    let output = document.getElementById("kgoutput")
    output.value = (input.value * 2.205).toFixed(2) + "lb"
    console.log(input)

})