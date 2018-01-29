
function Javabuzz() {

}

Javabuzz.prototype.says = function(first_argument) {
  console.log("this is running")
  if (first_argument % 3 == 0 && first_argument % 5 == 0 )
    { return "JavaBuzz" }
  else if (first_argument % 3 == 0)
    { return "Java" }
  else if (first_argument % 5 == 0)
    { return "Buzz" }
  else
    { return first_argument }
};

Javabuzz.prototype.output = function(first_argument) {
  for (var i = 1; i <= 100; i++) {
  console.log(this.says(i));
  }
};

var javaBuzz = new Javabuzz();

javaBuzz.output
