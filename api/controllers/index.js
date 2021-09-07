const home = (req, res) => {
    res.send('Success man')
};
const pagina1 = (req, res ) => {
    res.send('test with success man')
};
const calc = (req, res) => {    
    const {num1,num2} = req.query;
    if( num1 && num2 ){
        const plus = parseFloat(num1) + parseFloat(num2);
        console.log('A soma é: ' + plus)
        res.send('a soma é: ' + plus);
    }else{
        console.log('Não existem query´s')
        res.send('não existem query´s ');
    }   

};
const par = (req, res) => {
    const isPar = (req.params.num % 2) ===0
    if( isPar) {
        res.send('é par')
    } else {
        res.send('não é par')
    }
}

module.exports = {
    home,
    pagina1,
    calc,
    par
};