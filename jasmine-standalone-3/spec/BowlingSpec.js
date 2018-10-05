describe("Bowling", function(){

  it("check score of rolls whern neither strike nor spare", function(){
    var bowling = new Bowling;
    bowling.roll(7);
    bowling.roll(2);
    expect(bowling.frame_score()).toEqual(9);
  });

  it("count the number of frames when not a strike", function(){
    var bowling = new Bowling;
    bowling.roll(3);
    bowling.roll(4);
    expect(bowling.frame_count()).toEqual(1);
  });

  it("counts the number of frames when a strike", function(){
    var bowling = new Bowling;
    bowling.roll(10);
    expect(bowling.frame_count()).toEqual(1);
  });





});
