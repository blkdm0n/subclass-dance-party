var fredDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fred');
  this.$node.prepend('<img src="michaeljackson.gif" height="250" width="350">');
};

fredDancer.prototype = Object.create(makeDancer.prototype);
fredDancer.prototype.constructor = fredDancer;

fredDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // var rotate = function(degree) {
  //   $elie
  // }
  var animation = function(targetElement, speed) {
    $(targetElement).animate({ marginLeft: '+=20px'},
      {
        duration: speed,
        complete: function () {
          targetElement.animate({ marginLeft: '-=20px' },
            {
              duration: speed,
              complete: function () {
                animation(targetElement, speed);
              }
            });
        }
      });
  };
  animation(this.$node, 100);
  //this.$node.animate({"left": "+=10px", "right": "+=10px"}, "fast");
};