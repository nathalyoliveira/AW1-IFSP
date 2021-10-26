const button = document.getElementById('button')

function validaCPF(varCPF) {
    varCPF = varCPF.replace(/\D+/g, '')
    var Soma
    var Resto
    Soma = 0
    var i
    if (varCPF == '00000000000') return false
    if (varCPF == '99999999999') return false
    if (varCPF == '88888888888') return false
    if (varCPF == '77777777777') return false
    if (varCPF == '66666666666') return false
    if (varCPF == '55555555555') return false
    if (varCPF == '44444444444') return false
    if (varCPF == '33333333333') return false
    if (varCPF == '22222222222') return false
    if (varCPF == '11111111111') return false

    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(varCPF.substring(i - 1, i)) * (11 - i)
    Resto = (Soma * 10) % 11
  
    if (Resto == 10 || Resto == 11) Resto = 0
    if (Resto != parseInt(varCPF.substring(9, 10))) return false
  
    Soma = 0
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(varCPF.substring(i - 1, i)) * (12 - i)
    Resto = (Soma * 10) % 11
  
    if (Resto == 10 || Resto == 11) Resto = 0
    if (Resto != parseInt(varCPF.substring(10, 11))) return false
    return true
  }

    button.addEventListener('click', (event) => {
    event.preventDefault()

    const email = document.getElementById('email')
    const password = document.getElementById('password')

    //--------------------------------------------------------------------------------------------------

    const name = document.getElementById('name')
    const phone = document.getElementById('phone')
    const cpf = document.getElementById('cpf')

    if (name.value == '') {
        name.classList.add("errorInput")
    } else {
        name.classList.remove("errorInput")
    }

    if (phone.value == '' || phone.value.length < 14) {
        phone.classList.add("errorInput")
    } else {
        phone.classList.remove("errorInput")
    }

    if (cpf.value == '' || cpf.value.length != 14 || !validaCPF(cpf.value)) {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    
    }

    // -------------------------------------------------------------------------------------------------

    if (email.value == '') {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (password.value == '') {
        password.classList.add("errorInput")
    } else {
        password.classList.remove("errorInput")
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (password.value.length <= 5) {
        password.classList.add("errorInput")
    } else {
        password.classList.remove("errorInput")
    }
})

const masks = {

    phone (value) {
        return value
          .replace(/\D+/g, '')
          .replace(/(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{4})(\d)/, '$1-$2')
          .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
          .replace(/(-\d{4})\d+?$/, '$1')
      },

    cpf (value) {
      return value
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },
}

document.querySelectorAll('input').forEach($input => {
    const field = $input.dataset.js
  
    $input.addEventListener('input', e => {
      e.target.value = masks[field](e.target.value)
    }, false)
  })