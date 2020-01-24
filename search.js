const countConsecutives = 3;
let foundConsecutives = 1;

Search = {
    foundSecuences: 0,
    searchX: function (array) {
        for (let x = 0; x < array.length; x++) {
            foundConsecutives = 1;
            let i = 1;
            while (!this.checkConsecutive() && i < array[x].length) {
                if (array[x][i-1] == array[x][i]) {
                    foundConsecutives++;
                } else {
                    foundConsecutives = 1;
                }
                i++;
            }
            if (this.checkConsecutive()) {
                this.foundSecuences++;
            }
        }
        return this.foundSecuences > 3;
    },
    searchY:function(array){        
        for (let i = 0; i < array.length; i++) {
            foundConsecutives = 1;
            let x = 1;
            while(!this.checkConsecutive() && x< array.length){
                if (array[x-1][i] ==  array[x][i]) {
                    foundConsecutives++;
                }else{
                    foundConsecutives = 1;
                }
                x++;    
            }
            if (this.checkConsecutive()) {
                this.foundSecuences++;
            }
        }
        return this.foundSecuences > 3;
    },
    searchZ: function(array){
        let x = 1;
        foundConsecutives = 1;
        while(!this.checkConsecutive() && x< array.length){              
            if (array[x-1][x-1] ==  array[x][x]) {
                foundConsecutives++;
            }else{
                foundConsecutives = 1;
            }
            x++;
        }
        if (this.checkConsecutive()) {
            this.foundSecuences++;
        }
        return this.foundSecuences > 3;
    },
    checkConsecutive: function (){
        return foundConsecutives > countConsecutives;
    }
}

module.exports = Search;
