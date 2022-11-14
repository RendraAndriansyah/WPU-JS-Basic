
function Angkot (supir,penumpang,trayek,kas){
    this.supir = supir
    this.penumpang =penumpang
    this.trayek=trayek
    this.kas = kas

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if (this.penumpang.length === 0){
            alert('penumpang masih kosong')
            return false
        }
        for (let i = 0;i<this.penumpang.length;i++){
            if (this.penumpang[i] == namaPenumpang){

                this.penumpang[i] = undefined
                this.kas += bayar
                return this.penumpang
            }
        }
    }
}

let angkot1 = new Angkot('Rendra',[],['Cilebut','Bojonggede'],0)
console.log(angkot1);

// Test
// let angkot2 =  new angkot('Andriansyah',[4],['Bojoggede','Pemda'],10000)
// console.log(angkot2);