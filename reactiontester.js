  var time = new Date().getTime();
        
        //var start = get the starting time here
            
            function getRandomColor() {
                //stuff here
                var color = ["cyan", "fuchsia", "LawnGreen", "orange", "DeepPink"];
                var actualColor = color[Math.floor (Math.random()*5)];
                document.getElementById("shape").style.backgroundColor = actualColor;
            }
            
            getRandomColor();
            
            function makeShapeAppear() {
                //some variables
                var top = Math.random() * 300;
                var bottom = Math.random() * 300;
                var left = Math.random() * 400;
                var right = Math.random() * 400;
                
                document.getElementById("shape").style.top = top + "px";
                document.getElementById("shape").style.bottom = bottom + "px";
                document.getElementById("shape").style.left = left + "px";
                document.getElementById("shape").style.right = right + "px";
                
                if (Math.random() > .5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0%";
               
                }
                 document.getElementById("shape").style.display = "block";
               
                
               //bunch of stuff here changing the style of the shape
                
                time = new Date().getTime();
            
            getRandomColor();
            
            }
            
            function appearAfterDelay(){
                
                setTimeout(makeShapeAppear, Math.random() * 2000);
            }
            
            appearAfterDelay();
            
            document.getElementById("shape").onclick = function(){
                
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                var timetaken = (end - time)/1000;
                
                document.getElementById("timeTaken").innerHTML = timetaken + " seconds";
                
                //var timeTaken =calculate how long it took here (subtraction)
                
                // display time taken here document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                appearAfterDelay();
            }
            
