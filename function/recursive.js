function looping(n) {
    if (n===0) return;
    console.log(n) 
    return looping (n-1)
}

looping(10)