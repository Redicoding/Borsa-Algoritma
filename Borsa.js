var Kar = 0;
var HisseAdet = 0;
var i = 0;

// Gün Gün Hisse Değerleri

const array = [100, 50, 200, 400, 20, 60, 10, 90, 300, 200];
// const array = [20, 30, 40, 10, 5, 80, 100, 60];
// const array = [20, 10, 5, 30, 60, 90, 40, 50];
// const array = [20, 5, 15, 35, 10, 50, 80, 40];


// İLK HİSSE SENEDİ ALIMI 
for (i; i < array.length; i++) {

    if (array[i] < array[i + 1]) {
        HisseAdet += 1;
        Kar -= array[i];
        i++;
        break;
    }
}

for (let j = 0; i <= array.length; j++) {

    // ALIM İŞLEMLERİ
    if (HisseAdet == 0) {
        for (i; i <= array.length; i++) {

            if (array[i] < array[i + 1] && Kar > array[i]) {
                HisseAdet = Kar / array[i];
                Kar = 0;
                i++;
                break;
            }
        }
    }

    // SATIŞ İŞLEMLERİ
    if (HisseAdet > 0) {
        for (i; i <= array.length; i++) {

            if (array[i] > array[i + 1]) {

                Kar += HisseAdet * array[i];
                HisseAdet = 0;
                i++;
                break;
            }

            if (i == array.length) {
                Kar += HisseAdet * array[i - 1];
                HisseAdet = 0;
                break;
            }
        }
    }

}




console.log("Max Kar : " + Kar);
console.log("Hisse Adedi : " + HisseAdet);

