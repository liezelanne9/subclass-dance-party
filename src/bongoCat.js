var BongoCat = function(top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('bongo');
    // console.log(top);
    // console.log(left);
  }
  
  BongoCat.prototype = Object.create(makeDancer.prototype);
  BongoCat.prototype.constructor = BongoCat;
  
  BongoCat.prototype.step = function() {
    makeDancer.prototype.step.call(this);

  }

  BongoCat.prototype.lineUp = function () {
    this.$node.addClass("jump");
  }