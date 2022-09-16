let player="";
let win = 0, lose = 0, draw = 0;

document.getElementById("win").innerHTML = win;
document.getElementById("lose").innerHTML = lose;
document.getElementById("draw").innerHTML = draw;

document.querySelector('.try').disabled = true;

function ko(){
    player = "ko";
    document.getElementById("kepPlayer").innerHTML = "<img src='ko.png' class='kepP'>";
    document.querySelector('.try').disabled = false;
    console.log(player);
};
function papir(){
    player = "papir";
    document.getElementById("kepPlayer").innerHTML = "<img src='papir.png' class='kepP'>";
    document.querySelector('.try').disabled = false;
    console.log(player);
};
function ollo(){
    player = "ollo";
    document.getElementById("kepPlayer").innerHTML = "<img src='ollo.png' class='kepP'>";
    document.querySelector('.try').disabled = false;
    console.log(player);
};

function randomChoice(){
    const kopapirollo = ["ko", "papir", "ollo"];
    return kopapirollo[Math.floor(Math.random()*3)];
};

function megH(){
    var RC = randomChoice();
    if(RC == "ko") document.getElementById("kepBot").innerHTML = "<img src='ko.png' class='kepB'>";
    else if(RC == "papir") document.getElementById("kepBot").innerHTML = "<img src='papir.png' class='kepB'>";
    else if(RC == "ollo") document.getElementById("kepBot").innerHTML = "<img src='ollo.png' class='kepB'>";
    document.querySelector('.try').disabled = true;
    document.querySelector('.ko').disabled = true;
    document.querySelector('.papir').disabled = true;
    document.querySelector('.ollo').disabled = true;
    switch(player) {
        case "ko":
            switch(RC) {
                case "ko":
                    draw++;
                  break;
                case "ollo":
                    win++;
                  break;
                case "papir":
                    lose++;
                  break;
                default:
                  console.warn("Baj van kűben!!%");
            }
          break;
        case "ollo":
            switch(RC) {
                case "ko":
                    lose++;
                  break;
                case "ollo":
                    draw++;
                  break;
                case "papir":
                    win++;
                  break;
                default:
                  console.warn("Baj van ollóban!!%");
            }
          break;
        case "papir":
            switch(RC) {
                case "ko":
                    win++;
                  break;
                case "ollo":
                    lose++;
                  break;
                case "papir":
                    draw++;
                  break;
                default:
                  console.warn("Baj van papírban!!%");
            }
            break;
        default:
          console.warn("Baj van!!%");
    }

    document.getElementById("win").innerHTML = win;
    document.getElementById("lose").innerHTML = lose;
    document.getElementById("draw").innerHTML = draw;
    funny69();
    setTimeout(function(){
        document.getElementById("kepPlayer").innerHTML = "";
        document.getElementById("kepBot").innerHTML = "";
        player = "";
        document.querySelector('.ko').disabled = false;
        document.querySelector('.papir').disabled = false;
        document.querySelector('.ollo').disabled = false;
    }, 3000);   

    /*
    console.log(RC);
    console.log("win:"+win);
    console.log("lose:"+lose);
    console.log("draw:"+draw);
    */
};

function funny69(){
    if(win == 69){
        document.getElementById("kepTheRock").innerHTML = "<img src='https://c.tenor.com/kHcmsxlKHEAAAAAC/rock-one-eyebrow-raised-rock-staring.gif' class='theRock'> ";
    }
};