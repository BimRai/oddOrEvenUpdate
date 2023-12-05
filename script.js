function oddOrEven(num) {
    if (num % 2 === 0){
        return "EVEN!";
    } else {
        return "ODD!";
    }
}

function onClick() {
    let inputNumber =  document.getElementById("inputNumber").value;

  if (!isNaN(inputNumber)) {
        const result = oddOrEven(parseInt(inputNumber));

    Swal.fire({
        title: 'Result',
        text: result,
        icon: 'success',
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#0771aa',
    });
  } else {
    Swal.fire({
        title: 'Ehh?',
        text: 'Please enter a valid number!',
        icon: 'question',
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#ff5050',
    })
  }
}

document.getElementById("btn").addEventListener("click", onClick);