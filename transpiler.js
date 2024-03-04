function transpile(code) {
    let vars = [];
    this.code = code.split("\n")
    for (let i = 0; i < this.code.length; i++) {
        const line = this.code[i];
        if (!line.find("->") === -1) {
            const name = line.split("->")[0]
            const value = line.split("->")[1]
        }
    }
}

/*
a->12
repeter 12 fois {
    afficher résultat 4
}
a->?
*/

//Var : {name: "a", value: 45}