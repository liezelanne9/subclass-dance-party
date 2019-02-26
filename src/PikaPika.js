var PikaPika = function(top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('pika-pika');
  }
  
  PikaPika.prototype = Object.create(makeDancer.prototype);
  PikaPika.prototype.constructor = PikaPika;
  

  PikaPika.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    
  }

  PikaPika.prototype.lineUp = function () {
    this.$node.addClass("loading")
  }