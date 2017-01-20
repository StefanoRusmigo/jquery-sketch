$(document).ready(function() {
    createDivs();
    drawOnCanvas("black");
    clearCanvas();
    changeColor();
});




// creates the 16 divs to use as squares
function createDivs() {
    $(".container").append("<table>");
    for(i=0; i<16; i++) {
        $(".container").append("<tr>");
        for(j=0; j <=15; j++) {
            $(".container").append("<td></td>");
        }
        $(".container").append("</tr>");
    }
    $(".container").append("</table>");
};

// allows user to draw on canvas
function drawOnCanvas(color) {
    $("td").hover(function() {
        $(this).css("background-color", color);
    });
};

// clears canvas when "Clear" button is clicked
function clearCanvas() {
    $("#clear").click(function() {
        $("td").css("background-color", "white");
    });
};

// allows user to select color to draw with
function changeColor() {
    $('select').on('change', function() {
        drawOnCanvas( this.value );
    }); 
};