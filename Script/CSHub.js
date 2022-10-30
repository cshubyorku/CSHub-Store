var typing = function(x, rotate, period) {
    this.rotate = rotate;
    this.x = x;
    this.cnt = 0;
    this.period = parseInt(period, 9) || 500;
    this.txt = '';
    this.check();
    this.deleting = false;
  };
  
  typing.prototype.check = function() {
    var i = this.cnt % this.rotate.length;
    var full = this.rotate[i];
  
    if (this.deleting) {
      this.txt = full.substring(0, this.txt.length - 1);
    } else {
      this.txt = full.substring(0, this.txt.length + 1);
    }
  
    this.x.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var current = this;
    var dlt = 100 - Math.random() * 100;
  
    if (this.deleting) { dlt /= 6; }
  
    if (!this.deleting && this.txt === full) {
      dlt = this.period;
      this.deleting = true;
    } else if (this.deleting && this.txt === '') {
      this.deleting = false;
      this.cnt++;
      dlt = 500;
    }
  
    setTimeout(function() {
      current.check();
    }, dlt);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txxt');
    for (var i=0; i<elements.length; i++) {
      var rotate = elements[i].getAttribute('txt-rotate');
      var period = elements[i].getAttribute('txt-period');
      if (rotate) {
        new typing(elements[i], JSON.parse(rotate), period);
      }
    }
    
    var design = document.createElement("style");
    design.type = "text/css";
    design.innerHTML = ".txxt > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(design);
  };
