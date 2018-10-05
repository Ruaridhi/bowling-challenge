function Bowling() {
  this._frame_score = []
  this._frame_count = 0
};

  Bowling.prototype.roll = function(pins){
    if (pins === 10){
      this._frame_score.push(pins);
      this._frame_count += 1;
    } else {
      this._frame_score.push(pins);
      this._frame_count += 0.5;
    };

  };

  Bowling.prototype.frame_score = function(){
    function getSum(total, num){
      return total + num
    }
    return this._frame_score.reduce(getSum);
  };

  Bowling.prototype.frame_count = function(num){
    return this._frame_count;
  }
