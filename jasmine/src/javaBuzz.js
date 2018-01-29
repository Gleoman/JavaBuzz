
function Javabuzz() {

}

Javabuzz.prototype.says = function(first_argument) {
  if (first_argument % 3 == 0 && first_argument % 5 == 0 )
    { return "JavaBuzz" }
  else if (first_argument % 3 == 0)
    { return "Java" }
  else if (first_argument % 5 == 0)
    { return "Buzz" }
  else
    { return first_argument }
};
