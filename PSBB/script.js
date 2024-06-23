function minimalBus(jumlahKeluarga, anggotaKeluarga) {
    if (jumlahKeluarga !== anggotaKeluarga.length) {
        return "Jumlah input keluarga harus sama dengan jumlah anggota keluarga";
    }

    anggotaKeluarga.sort((a, b) => b - a);
    let bus = 0;
    let i = 0;
    let j = anggotaKeluarga.length - 1;

    while (i <= j) {
        if (anggotaKeluarga[i] + anggotaKeluarga[j] <= 4) {
            j--;
        }
        i++;
        bus++;
    }

    return `Bus minimal yang diperlukan adalah: ${bus}`;
}

const jumlahKeluarga = 5;
const anggotaKeluarga = [1, 2, 4, 3, 3];
console.log(minimalBus(jumlahKeluarga, anggotaKeluarga));
