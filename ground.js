class ground{
constructor(x,y,width,height){
    var options={
    isStatic:true
    }
this.x=x
this.y=y
this.width=width
this.height=height
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
}
display(){
    var pos=this.body.position
     var angle=this.body.angle.Bodies
     push()
     translate(pos.x,pos.y)
     fill(200)
     stroke(200)
     rotate(angle)
     rectMode(CENTER)
     rect(0,0,this.width,this.height)
     pop()


}











}