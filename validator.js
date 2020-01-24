
const Validator = {
    letters: 4,
    main: function(dna){
        if(this.large(dna)){
            return false;
        }else{
            for(let x = 0; x < dna.length; x++) {
                if(this.large(dna[x].split(''))){
                    return false;
                }else{
                    let base = dna[x].split('');
                    for (let i = 0; i < base.length; i++) {
                        if(!this.regex(base[i])){
                            return false;
                        }
                    }
                }
            }
            return true;
        }
    },
    large: function(array){
        return array.length < this.letters;
    },
    regex: function(letter) {
        let val = /A|C|T|G/;
        return val.test(letter);
    }
}

module.exports = Validator;
