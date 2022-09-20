class launcher {

    constructor(bodyA,pointB){

         var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.03,
            length:10

         } 
       this.pointB = pointB;
      this.launcher = Constraint.create(options);
      World.add(world,this.launcher);

     

    }

     fly(){

      this.launcher.bodyA = null;

     }

    display(){

      

     if (this.launcher.bodyA){
    var pontoA = this.launcher.bodyA.position;
    var pontoB = this.pointB;

    push();
    if(pontoA.x < 220){

    stroke('#54270F');
    strokeWeight(10);
    line(pontoA.x - 20,pontoA.y,pontoB.x - 15,pontoB.y + 5);
    line(pontoA.x + 20,pontoA.y,pontoB.x + 18,pontoB.y + 5);
    

    }else{

    stroke('#54270F');
    strokeWeight(10);
    line(pontoA.x + 20,pontoA.y,pontoB.x - 15,pontoB.y + 5);
    line(pontoA.x + 20,pontoA.y,pontoB.x + 18,pontoB.y + 5);
   

    }

    pop(); 
  }
   }
   prender(body){

    this.launcher.bodyA = body;
   }



}