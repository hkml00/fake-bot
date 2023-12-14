const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
    return [
        "Halo, perkenalkan saya hi-bot. Siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Ohhh ${data?.usia}, hobi kamu apa yaa?`,
        `Wawww sama dong aku juga hobi ${data?.hobi}, btw punya pacar nggak?`,
        `Ohhhh ${data?.pacar}, ya udah kalau gitu. udahan yaaa`
    ];
}

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
    init++
    if(init === 1) {
        botDelay({nama: jawaban.value});
    } else if(init === 2) {
        botDelay({usia: jawaban.value});
    } else if(init === 3) {
        botDelay({hobi: jawaban.value});
    } else if(init === 4) {
        botDelay({pacar: jawaban.value});
    } else if(init === 5) {
        finishing();
    } else {
        botEnd();
    }
}

function botDelay(jawabanUser) {
    console.log({usersData: usersData});
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, 500);
    usersData.push(jawaban.value);
    jawaban.value = "";
}

function finishing() {
    pertanyaan.innerHTML = `Thank u ${usersData[0]} sudah mampir ke web ini, kapan kapan kita ${usersData[2]} yaa:)`;
    jawaban.value = "Siap thanks juga!";
}

function botEnd() {
    window.location.reload();
}