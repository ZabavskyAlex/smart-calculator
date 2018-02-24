class SmartCalculator {
  constructor(initialValue) {
      this.arr = [];
      this.arr.push(initialValue);
      return this;
  }


  add(number) {
    this.arr.push('+', number);
    return this;
  }
  
  subtract(number) {
    this.arr.push('-', number);
    return this;
  }

  multiply(number) {
    this.arr.push('*', number);
    return this;
  }

  devide(number) {
    this.arr.push('/', number);
    return this;
  }

  pow(number) {
      this.arr.push('^', number);
    return this;
  }

  valueOf(){
    let buf_arr = this.arr;
    let num;

    for(let i = buf_arr.length - 1; i >= 0; i--){
        if (buf_arr[i] == '^'){
            buf_arr[i - 1] = Math.pow(buf_arr[i - 1], num);
            buf_arr.splice(i, 2);
            num = buf_arr[i - 1];
            if(buf_arr[i - 2] != '^'){
                i--;
            }
        }
        else{
            num = buf_arr[i];
        }
    }

    for(let i = buf_arr.length - 1; i >= 0; i--){
        if (buf_arr[i] == '*' || buf_arr[i] == '/'){
            buf_arr[i - 1] = (buf_arr[i] == '*') ? buf_arr[i - 1] * num: buf_arr[i - 1] / num;
            buf_arr.splice(i, 2);
            num = buf_arr[i - 1];
            i--;
        }
        else{
            num = buf_arr[i];
        }
    }

    for(let i = buf_arr.length - 1; i >= 0; i--){
        if (buf_arr[i] == '+' || buf_arr[i] == '-'){
            if(buf_arr[i - 2] != '-'){
                buf_arr[i - 1] = (buf_arr[i] == '+') ? buf_arr[i - 1] + num: buf_arr[i - 1] - num;
                buf_arr.splice(i, 2);
                num = buf_arr[i - 1];
                i--;
            }
            else {
                buf_arr[i - 1] = (buf_arr[i] == '+') ? (buf_arr[i - 1] * -1) + num: (buf_arr[i - 1] * -1) - num;
                buf_arr[i - 2] = '+';
                buf_arr.splice(i, 2);
                num = buf_arr[i - 1];
                i--;
            }
        }
        else{
            num = buf_arr[i];
        }
    }

    return buf_arr[0];
  }
}
module.exports = SmartCalculator;
