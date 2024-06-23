function urutkanKarakter(kalimat) {
    const vokal = 'aiueo';
    let karakterVokal = '';
    let karakterKonsonan = '';

    for (let karakter of kalimat.toLowerCase()) {
        if (vokal.includes(karakter)) {
            karakterVokal += karakter;
        } else if (karakter >= 'a' && karakter <= 'z') {
            karakterKonsonan += karakter;
        }
    }

    return {
        karakterVokal: karakterVokal,
        karakterKonsonan: karakterKonsonan
    };
}

const input = "Sample Case";
const result = urutkanKarakter(input);
console.log("Karakter Vokal:", result.karakterVokal);
console.log("Karakter Konsonan:", result.karakterKonsonan);
