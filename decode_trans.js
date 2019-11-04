(function() {
  String.prototype.half2full = function() {
    var temp = '';
    for (var i = 0; i < this.toString().length; i++) {
      var charCode = this.toString().charCodeAt(i);
      if (charCode <= 126 && charCode >= 33) {
        charCode += 65248;
      } else if (charCode == 32) { // 半形空白轉全形
        charCode = 12288;
      }
      temp = temp + String.fromCharCode(charCode);
    }
    return temp;
  };

  String.prototype.full2half = function() {
    var temp = '';
    for (var i = 0; i < this.toString().length; i++) {
      var charCode = this.toString().charCodeAt(i);
      if (charCode >= 65281 && 65374 >= charCode) {
        charCode -= 65248;
      } else if (charCode == 12288) { // 全形空白轉半形
        charCode = 32;
      }
      temp = temp + String.fromCharCode(charCode);
    }
    return temp;
  };

  Number.prototype.dec2bin = function() {
    return parseInt(parseInt(this, 10).toString(2), 10);
  }

  String.prototype.dec2bin = function() {
    return parseInt(this, 10).toString(2);
  }

  Number.prototype.bin2dec = function() {
    return parseInt(this, 2);
  }

  String.prototype.bin2dec = function() {
    return parseInt(this, 2).toString();
  }

  Number.prototype.dec2hex = function() {
    return parseInt(parseInt(this, 10).toString(16), 10);
  }

  String.prototype.dec2hex = function() {
    return parseInt(this, 10).toString(16);
  }

  Number.prototype.hex2dec = function() {
    return parseInt(this, 16);
  }

  String.prototype.hex2dec = function() {
    return parseInt(this, 16).toString();
  }

  String.prototype.char2dec = function() {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      arr.push(this[i].charCodeAt(0));
    };
    return arr;
  }

  Number.prototype.bin2char = function() {
    return String.fromCharCode(parseInt(this.toString(), 2));
  }

  String.prototype.bin2char = function() {
    return String.fromCharCode(parseInt(this, 2));
  }

  String.prototype.hex2char = function() {
    return String.fromCharCode(parseInt(this, 16));
  }

})();