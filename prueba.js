function decryptPassword(s) {
    let number = ""
    let sepPas = s.split('');
    for (let i = 0; i < sepPas.length; i++) {
      if (!isNaN(Number(sepPas[i]))) {
        number += sepPas[i];
        sepPas[i] = 0;
      } else if (sepPas[i] === sepPas[i].toLowerCase() && sepPas[i + 1] >= 'A' && sepPas[i + 1] <= 'Z') {
        sepPas[i + 2] = "*"
      }
    }
    let newPassword = number + sepPas.join('');
    console.log(newPassword);
  }
  
  decryptPassword('iYas1hEn2ry');