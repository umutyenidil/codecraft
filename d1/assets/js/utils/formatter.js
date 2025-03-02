document.getElementById('phone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
  
    if (value.startsWith("0")) {
      value = value.substring(1);
    }
  
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
  
    let formattedValue = value;
    if (value.length > 0) formattedValue = "(" + value.substring(0, 3);
    if (value.length > 3) formattedValue += ") " + value.substring(3, 6);
    if (value.length > 6) formattedValue += " " + value.substring(6, 8);
    if (value.length > 8) formattedValue += " " + value.substring(8, 10);
  
    e.target.value = formattedValue;
  });