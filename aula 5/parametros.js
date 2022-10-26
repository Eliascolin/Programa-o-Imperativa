function calculoImc(nome,idade,altura,peso){
    const imc = peso/(altura**2);
    console.log(nome +    ' tem '  + idade +  ' e seu índice de massa corporal é de '  + imc  )
}


calculoImc('Carlos de sousa',28,80.1,1.76);
calculoImc('Aliane Ferreirs',33,63.7,1.53);
calculoImc('Ana Paula',26,55.0,1.63);