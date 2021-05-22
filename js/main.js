$(document).ready(function () {
    var frontEnd = 0, backEnd = 0;

// ÜZERİNE GELİNCE ÇALIŞAN FONKSİYON
    function devHover(section) {
        for(let i = 1; i <= $(section + " .skill").length; i++) {
            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hover(function () {
                    // over
                    for(let j = 1; j <= 1; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").addClass("hover-1");
                    }
                    for(let j = 2; j <= 5; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").addClass("hover-0");
                    }
                    $(section + " .skill:nth-child(" + i + ") .logo-item").addClass("color-hover-1");
                    $(section + " .skill:nth-child(" + i + ") .title").addClass("color-hover-1");
                    $(section + " .skill:nth-child(" + i + ") .arrow-item").addClass("arrow-hover-1");
                }, function () {
                    // out
                    for(let j = 1; j <= 1; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("hover-1");
                    }
                    for(let j = 2; j <= 5; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("hover-0");
                    }
                    $(section + " .skill:nth-child(" + i + ") .logo-item").removeClass("color-hover-1");
                    $(section + " .skill:nth-child(" + i + ") .title").removeClass("color-hover-1");
                    $(section + " .skill:nth-child(" + i + ") .arrow-item").removeClass("arrow-hover-1");
                }
            );
            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(2)").hover(function () {
                    // over
                    for(let j = 1; j <= 2; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").addClass("hover-2");
                    }
                    for(let j = 3; j <= 5; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").addClass("hover-0");
                    }
                    $(section + " .skill:nth-child(" + i + ") .logo-item").addClass("color-hover-2");
                    $(section + " .skill:nth-child(" + i + ") .title").addClass("color-hover-2");
                    $(section + " .skill:nth-child(" + i + ") .arrow-item").addClass("arrow-hover-2");
                }, function () {
                    // out
                    for(let j = 1; j <= 2; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("hover-2");
                    }
                    for(let j = 3; j <= 5; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("hover-0");
                    }
                    $(section + " .skill:nth-child(" + i + ") .logo-item").removeClass("color-hover-2");
                    $(section + " .skill:nth-child(" + i + ") .title").removeClass("color-hover-2");
                    $(section + " .skill:nth-child(" + i + ") .arrow-item").removeClass("arrow-hover-2");
                }
            );
            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(3)").hover(function () {
                    // over
                    for(let j = 1; j <= 3; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").addClass("hover-3");
                    }
                    for(let j = 4; j <= 5; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").addClass("hover-0");
                    }
                    $(section + " .skill:nth-child(" + i + ") .logo-item").addClass("color-hover-3");
                    $(section + " .skill:nth-child(" + i + ") .title").addClass("color-hover-3");
                    $(section + " .skill:nth-child(" + i + ") .arrow-item").addClass("arrow-hover-3");
                }, function () {
                    // out
                    for(let j = 1; j <= 3; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("hover-3");
                    }
                    for(let j = 4; j <= 5; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("hover-0");
                    }
                    $(section + " .skill:nth-child(" + i + ") .logo-item").removeClass("color-hover-3");
                    $(section + " .skill:nth-child(" + i + ") .title").removeClass("color-hover-3");
                    $(section + " .skill:nth-child(" + i + ") .arrow-item").removeClass("arrow-hover-3");
                }
            );
            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(4)").hover(function () {
                    // over
                    for(let j = 1; j <= 4; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").addClass("hover-4");
                    }
                    for(let j = 5; j <= 5; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").addClass("hover-0");
                    }
                    $(section + " .skill:nth-child(" + i + ") .logo-item").addClass("color-hover-4");
                    $(section + " .skill:nth-child(" + i + ") .title").addClass("color-hover-4");
                    $(section + " .skill:nth-child(" + i + ") .arrow-item").addClass("arrow-hover-4");
                }, function () {
                    // out
                    for(let j = 1; j <= 4; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("hover-4");
                    }
                    for(let j = 5; j <= 5; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("hover-0");
                    }
                    $(section + " .skill:nth-child(" + i + ") .logo-item").removeClass("color-hover-4");
                    $(section + " .skill:nth-child(" + i + ") .title").removeClass("color-hover-4");
                    $(section + " .skill:nth-child(" + i + ") .arrow-item").removeClass("arrow-hover-4");
                }
            );
            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(5)").hover(function () {
                    // over
                    for(let j = 1; j <= 5; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").addClass("hover-5");
                    }
                    $(section + " .skill:nth-child(" + i + ") .logo-item").addClass("color-hover-5");
                    $(section + " .skill:nth-child(" + i + ") .title").addClass("color-hover-5");
                    $(section + " .skill:nth-child(" + i + ") .arrow-item").addClass("arrow-hover-5");
                }, function () {
                    // out
                    for(let j = 1; j <= 5; j++) {
                        $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("hover-5");
                    }
                    $(section + " .skill:nth-child(" + i + ") .logo-item").removeClass("color-hover-5");
                    $(section + " .skill:nth-child(" + i + ") .title").removeClass("color-hover-5");
                    $(section + " .skill:nth-child(" + i + ") .arrow-item").removeClass("arrow-hover-5");
                }
            );
        }    
    }

// TIKLANDIĞINDA ÇALIŞAN FONKSİYON
    function devClick(section) {
        for(let i = 1; i <= $(section + " .skill").length; i++) {
            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").click(function() {
                if(section == ".front-end") {
                    if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-5")) {
                        $(".note-1").html(frontEnd += -4);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-4")) {
                        $(".note-1").html(frontEnd += -3);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-3")) {
                        $(".note-1").html(frontEnd += -2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-2")) {
                        $(".note-1").html(frontEnd += -1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-1")) {
                        $(".note-1").html(frontEnd += -1);
                    }
                    else {
                        $(".note-1").html(frontEnd += 1);
                    }
                }
                else {
                    if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-5")) {
                        $(".note-2").html(backEnd += -4);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-4")) {
                        $(".note-2").html(backEnd += -3);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-3")) {
                        $(".note-2").html(backEnd += -2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-2")) {
                        $(".note-2").html(backEnd += -1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-1")) {
                        $(".note-2").html(backEnd += -1);
                    }
                    else {
                        $(".note-2").html(backEnd += 1);
                    }
                }
                $(".note-3").html(frontEnd + backEnd);
                for(let j = 1; j <= 5; j++) {
                    if(j != 1) {
                        $(section + " .skill:nth-child(" + i + ") .logo-item").removeClass("color-select-" + j);
                        $(section + " .skill:nth-child(" + i + ") .title").removeClass("color-select-" + j);
                        $(section + " .skill:nth-child(" + i + ") .arrow-item").removeClass("arrow-select-" + j);
                    }
                    for(let k = 1; k <= 5; k++) {
                        if(k != 1) {
                            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("select-" + k);
                        }
                    }
                }
                for(let j = 1; j <= 1; j++) {
                    $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").toggleClass("select-1");
                }
                $(section + " .skill:nth-child(" + i + ") .logo-item").toggleClass("color-select-1");
                $(section + " .skill:nth-child(" + i + ") .title").toggleClass("color-select-1");
                $(section + " .skill:nth-child(" + i + ") .arrow-item").toggleClass("arrow-select-1");
            });
            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(2)").click(function() {
                if(section == ".front-end") {
                    if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-5")) {
                        $(".note-1").html(frontEnd += -3);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-4")) {
                        $(".note-1").html(frontEnd += -2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-3")) {
                        $(".note-1").html(frontEnd += -1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-2")) {
                        $(".note-1").html(frontEnd += -2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-1")) {
                        $(".note-1").html(frontEnd += 1);
                    }
                    else {
                        $(".note-1").html(frontEnd += 2);
                    }
                }
                else {
                    if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-5")) {
                        $(".note-2").html(backEnd += -3);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-4")) {
                        $(".note-2").html(backEnd += -2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-3")) {
                        $(".note-2").html(backEnd += -1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-2")) {
                        $(".note-2").html(backEnd += -2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-1")) {
                        $(".note-2").html(backEnd += 1);
                    }
                    else {
                        $(".note-2").html(backEnd += 2);
                    }
                }
                $(".note-3").html(frontEnd + backEnd);
                for(let j = 1; j <= 5; j++) {
                    if(j != 2) {
                        $(section + " .skill:nth-child(" + i + ") .logo-item").removeClass("color-select-" + j);
                        $(section + " .skill:nth-child(" + i + ") .title").removeClass("color-select-" + j);
                        $(section + " .skill:nth-child(" + i + ") .arrow-item").removeClass("arrow-select-" + j);
                    }
                    for(let k = 1; k <= 5; k++) {
                        if(k != 2) {
                            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("select-" + k);
                        }
                    }
                }
                for(let j = 1; j <= 2; j++) {
                    $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").toggleClass("select-2");
                }
                $(section + " .skill:nth-child(" + i + ") .logo-item").toggleClass("color-select-2");
                $(section + " .skill:nth-child(" + i + ") .title").toggleClass("color-select-2");
                $(section + " .skill:nth-child(" + i + ") .arrow-item").toggleClass("arrow-select-2");
                
            });
            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(3)").click(function() {
                if(section == ".front-end") {
                    if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-5")) {
                        $(".note-1").html(frontEnd += -2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-4")) {
                        $(".note-1").html(frontEnd += -1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-3")) {
                        $(".note-1").html(frontEnd += -3);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-2")) {
                        $(".note-1").html(frontEnd += 1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-1")) {
                        $(".note-1").html(frontEnd += -2);
                    }
                    else {
                        $(".note-1").html(frontEnd += 3);
                    }
                }
                else {
                    if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-5")) {
                        $(".note-2").html(backEnd += -2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-4")) {
                        $(".note-2").html(backEnd += -1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-3")) {
                        $(".note-2").html(backEnd += -3);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-2")) {
                        $(".note-2").html(backEnd += 1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-1")) {
                        $(".note-2").html(backEnd += -2);
                    }
                    else {
                        $(".note-2").html(backEnd += 3);
                    }
                }
                $(".note-3").html(frontEnd + backEnd);
                for(let j = 1; j <= 5; j++) {
                    if(j != 3) {
                        $(section + " .skill:nth-child(" + i + ") .logo-item").removeClass("color-select-" + j);
                        $(section + " .skill:nth-child(" + i + ") .title").removeClass("color-select-" + j);
                        $(section + " .skill:nth-child(" + i + ") .arrow-item").removeClass("arrow-select-" + j);
                    }
                    for(let k = 1; k <= 5; k++) {
                        if(k != 3) {
                            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("select-" + k);
                        }
                    }
                }
                for(let j = 1; j <= 3; j++) {
                    $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").toggleClass("select-3");
                }
                $(section + " .skill:nth-child(" + i + ") .logo-item").toggleClass("color-select-3");
                $(section + " .skill:nth-child(" + i + ") .title").toggleClass("color-select-3");
                $(section + " .skill:nth-child(" + i + ") .arrow-item").toggleClass("arrow-select-3");
            });
            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(4)").click(function() {
                if(section == ".front-end") {
                    if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-5")) {
                        $(".note-1").html(frontEnd += -1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-4")) {
                        $(".note-1").html(frontEnd += -4);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-3")) {
                        $(".note-1").html(frontEnd += 1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-2")) {
                        $(".note-1").html(frontEnd += 2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-1")) {
                        $(".note-1").html(frontEnd += 3);
                    }
                    else {
                        $(".note-1").html(frontEnd += 4);
                    }
                }
                else {
                    if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-5")) {
                        $(".note-2").html(backEnd += -1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-4")) {
                        $(".note-2").html(backEnd += -4);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-3")) {
                        $(".note-2").html(backEnd += 1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-2")) {
                        $(".note-2").html(backEnd += 2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-1")) {
                        $(".note-2").html(backEnd += 3);
                    }
                    else {
                        $(".note-2").html(backEnd += 4);
                    }
                }
                $(".note-3").html(frontEnd + backEnd);
                for(let j = 1; j <= 5; j++) {
                    if(j != 4) {
                        $(section + " .skill:nth-child(" + i + ") .logo-item").removeClass("color-select-" + j);
                        $(section + " .skill:nth-child(" + i + ") .title").removeClass("color-select-" + j);
                        $(section + " .skill:nth-child(" + i + ") .arrow-item").removeClass("arrow-select-" + j);
                    }
                    for(let k = 1; k <= 5; k++) {
                        if(k != 4) {
                            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("select-" + k);
                        }
                    }
                }
                for(let j = 1; j <= 4; j++) {
                    $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").toggleClass("select-4");
                }
                $(section + " .skill:nth-child(" + i + ") .logo-item").toggleClass("color-select-4");
                $(section + " .skill:nth-child(" + i + ") .title").toggleClass("color-select-4");
                $(section + " .skill:nth-child(" + i + ") .arrow-item").toggleClass("arrow-select-4");
            });
            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(5)").click(function() {
                if(section == ".front-end") {
                    if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-5")) {
                        $(".note-1").html(frontEnd += -5);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-4")) {
                        $(".note-1").html(frontEnd += 1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-3")) {
                        $(".note-1").html(frontEnd += 2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-2")) {
                        $(".note-1").html(frontEnd += 3);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-1")) {
                        $(".note-1").html(frontEnd += 4);
                    }
                    else {
                        $(".note-1").html(frontEnd += 5);
                    }
                }
                else {
                    if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-5")) {
                        $(".note-2").html(backEnd += -5);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-4")) {
                        $(".note-2").html(backEnd += 1);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-3")) {
                        $(".note-2").html(backEnd += 2);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-2")) {
                        $(".note-2").html(backEnd += 3);
                    }
                    else if($(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(1)").hasClass("select-1")) {
                        $(".note-2").html(backEnd += 4);
                    }
                    else {
                        $(".note-2").html(backEnd += 5);
                    }
                }
                $(".note-3").html(frontEnd + backEnd);
                for(let j = 1; j <= 5; j++) {
                    if(j != 5) {
                        $(section + " .skill:nth-child(" + i + ") .logo-item").removeClass("color-select-" + j);
                        $(section + " .skill:nth-child(" + i + ") .title").removeClass("color-select-" + j);
                        $(section + " .skill:nth-child(" + i + ") .arrow-item").removeClass("arrow-select-" + j);
                    }
                    for(let k = 1; k <= 5; k++) {
                        if(k != 5) {
                            $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").removeClass("select-" + k);
                        }
                    }
                }
                for(let j = 1; j <= 5; j++) {
                    $(section + " .skill:nth-child(" + i + ") .bar-link:nth-child(" + j + ")").toggleClass("select-5");
                }
                $(section + " .skill:nth-child(" + i + ") .logo-item").toggleClass("color-select-5");
                $(section + " .skill:nth-child(" + i + ") .title").toggleClass("color-select-5");
                $(section + " .skill:nth-child(" + i + ") .arrow-item").toggleClass("arrow-select-5");
            });
        }
    }
    
    devHover(".front-end");
    devHover(".back-end");
    devClick(".front-end");
    devClick(".back-end");

    $(".share").hide();
    $(".console-btn").click(function () { 
        $(".share").fadeIn(600);
    });
    $(".share-close").click(function () { 
        $(".share").fadeOut(300);
    });
    
});