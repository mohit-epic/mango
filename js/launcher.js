
class launcher{
	constructor(body,anchor)
	{
		var options = {bodyA:body,
		pointB:anchor,
		stiffness:0.004,
		length:1,
	}
        this.bodyA = body
		this.pointb = anchor
        this.launcher = constraint.create(options)
		world.add(world,this.launcher)
}
    attach(body){
		this.launcher.bodyA = body;
	}

	fly()
	{
         this.launcher.bodyA = null;
	}

		
	
	
    display()
		{
			if(this.launcher.bodyA)
			{
				var pointA = this.bodyA.position;
				var pointB = this.pointB;

				strokeWeight(2);
				line(pointA.x,pointA.y,pointB.x,point.y);

			}
		}
	}		
				