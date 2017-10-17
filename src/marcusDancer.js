var marcusDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('marcus');
  this.$node.prepend('<img src="carlton.gif" height="250" width="200">');
};

marcusDancer.prototype = Object.create(makeDancer.prototype);
marcusDancer.prototype.constructor = marcusDancer;

marcusDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this),
  this.$node.slideToggle();
};
