class   Plinko
{
//to store the natural and the physical properties
constructor(a,b,c)  // add all the unknown values of the propertes 
{
//the physical properties are isStatic,restitution(bounciness), friction, density
var options = {
isStatic: true,

}
//the natural proprties are x,y,width,height,radius
this.x = a;
this.y = b;
this.r = c;



//creating a sprite of the object which is called a body
this.body = Bodies.circle(a,b,c,options)
World.add(world,this.body)
}
//to display the characters in the browser
display()
{
var   plinko_position = this.body.position 
fill("white")
//stroke("ehite")
//strokeWeight(4)
// to maintain the order of the naural properties
ellipse(plinko_position.x,plinko_position.y,this.r)
}






}