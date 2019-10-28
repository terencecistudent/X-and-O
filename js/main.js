$(document).ready(function() {
    $(function() {

        var player = 1;
        var table = $("table");
        var messages = $(".victoryMessage");
        var turn = $(".turn");

        // Will become a function
        showNextPlayer = (turn, player);

        // Check box status
        $("td").click(function() {
            td = $(this);
            var status = getStatus(td);

            if(!status) {
                var pattern = patternForCurrentPlayer(player);
                changeStatus(td, pattern);

                if(checkPlayerWon(table, pattern)) {
                    messages.html("Player " + player + " has won!")

                    turn.html("");
                } else {
                    player = setNextPlayer(player);
                    displayNextPlayer(turn, player);
                }
            } else {
                messages.html("This box is already checked.");
            }
        });


        // Reset
        $(".reset").click(function() {
            player = 1;
            messages.html("");
            reset(table);
            displayNextPlayer(turn, player);
        });
    });


    /*---------------------------------------------Status-----*/
    function getStatus (td) {
        if(td.hasClass(".x") || (td.hasClass(".o"))) {
            return 1;
        } else {
            return 0;
        }
    }

    function changeStatus (td, pattern) {
        return td.addClass(pattern);
    }

    function patternForCurrentPlayer(player) {
        if(player == 1) {
            return "x";
        } else {
            return "o";
        }
    }


    /*---------------------------------------------Next Player-----*/
    function setNextPlayer(player) {
        if(player == 1) {
            return player = 2;
        } else {
            return player = 1;
        }
    }

    function displayNextPlayer(turn, player) {
        turn.html("Player turn : " + player);
    }


    /*---------------------------------------------Checks to see if player won-----*/
    function checkPlayerWon(table, pattern) {
        var won = 0;

        if(table.find("#box1").hasClass(pattern) && table.find("#box2").hasClass(pattern)
        && table.find("#box3").hasClass(pattern)) {
            won = 1;
        } else if (table.find("#box1").hasClass(pattern) && table.find("#box4").hasClass(pattern)
        && table.find("#box7").hasClass(pattern)) {
            won = 1;
        } else if (table.find("#box1").hasClass(pattern) && table.find("#box5").hasClass(pattern)
        && table.find("#box9").hasClass(pattern)) {
            won = 1;
        } else if (table.find("#box4").hasClass(pattern) && table.find("#box5").hasClass(pattern)
        && table.find("#box6").hasClass(pattern)) {
            won = 1;
        } else if (table.find("#box7").hasClass(pattern) && table.find("#box8").hasClass(pattern)
        && table.find("#box9").hasClass(pattern)) {
            won = 1;
        } else if (table.find("#box2").hasClass(pattern) && table.find("#box5").hasClass(pattern)
        && table.find("#box8").hasClass(pattern)) {
            won = 1;
        } else if (table.find("#box3").hasClass(pattern) && table.find("#box6").hasClass(pattern)
        && table.find("#box9").hasClass(pattern)) {
            won = 1;
        } else if (table.find("#box3").hasClass(pattern) && table.find("#box5").hasClass(pattern)
        && table.find("#box7").hasClass(pattern)) {
            won = 1;
        }

        return won;
    }

    /*---------------------------------------------Reset-----*/
    function reset(table) {
        table.find("td").each(function() {
            $(this).removeClass("x").removeClass("o");
        });
    }
});