const run = (name) => {
    let ans ="";
    name = name.trim();

    for(let i in name) {
        if(!Number(name[i])) {
            if(!(name[i] === " " && name[i-1]==" ")) {
                if(name[i] != " " && name[i-1] == " ");
                ans += name[i].toUpperCase(); 
            }
        }
    }
    return ans;
}

const case1 = "    hOang Bui   ";
console.log(run(case1));

const case2 = " hOANG      BUI   hOang     ";
console.log(run(case2));

const case3 = "23traN    dUOng23     ";
console.log(run(case3));