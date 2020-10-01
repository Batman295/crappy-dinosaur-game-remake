class Train{
  constructor(){
    this.x=width;
    this.r=100;
    this.y=height-this.r;
  }
  
  move(){
    this.x-=3
  }
  show(){
    image(tImg,this.x,this.y,this.r,this.r)
  }
}