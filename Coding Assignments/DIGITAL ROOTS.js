function digital_root(n) {
    return n< 10 ? n : digital_root((n + '').split ('').reduce((acc, value) =>acc + +value, 0));
  }


  function digital_root(n){
    let result = 0;
    String(n).split('').map(num => {
      result += Number(num);
    });
    return result > 10 ? digital_root(result) : result;
  }