function execute() {
    const numeroUm = 1;
    const stringUm = '1';
    const numeroTrinta = 30;
    const stringTrinta = '30';
    const numeroDez = 10;
    const stringDez = '10';

    if (numeroUm == stringUm) {
        console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
    } else {
        console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
    }

    if (numeroTrinta == stringTrinta) {
        console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');
    } else {
        console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
    }

    if (numeroDez == stringDez) {
        console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
    } else {
        console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');
    }
}
