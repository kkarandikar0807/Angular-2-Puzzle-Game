import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'my-puzzle',
    template : `
        
        <section class="setup">
             <h2>Game Setup</h2>    
            Enter your name please: - 
            <input type="text" #name (keyup)="0" >
        </section>            

        <section
         [ngClass]="{
                puzzle:true,
                solved: switch1.value == switch1ShouldbeActive &&  switch2.value == switch2ShouldbeActive && 
                         switch3.value == switch3ShouldbeActive &&  switch4.value == switch4ShouldbeActive        
        }" 
         [ngStyle]="{display: name.value === '' ? 'none' : 'block'}">
            <h2> Welcome to the puzzle |
            
            {{switch1.value == switch1ShouldbeActive &&  switch2.value == switch2ShouldbeActive && 
              switch3.value == switch3ShouldbeActive &&  switch4.value == switch4ShouldbeActive ? 'Solved'  :'Not Solved'
                        
            }}
            
             </h2>
            <p>Ok, welcome <span class="name">{{name.value}}</span></p>    
            <br>
            Switch 1:-
            <input type="text" #switch1 (keyup)="0" value= Enter><br><br>
            Switch 2:-
            <input type="text" #switch2 (keyup)="0" value= Enter><br><br>
            Switch 3:-
            <input type="text" #switch3 (keyup)="0" value= Enter><br><br>
            Switch 4:-
            <input type="text" #switch4 (keyup)="0" value= Enter><br><br>
            
        </section>   

        <h2 [hidden]="switch1.value != switch1ShouldbeActive ||  switch2.value != switch2ShouldbeActive || switch3.value != switch3ShouldbeActive ||  switch4.value != switch4ShouldbeActive">
        
        
        Congratulations {{name.value}}, you did it!!!
        </h2>
                
    
    
    ` 
})

export class PuzzleComponent implements OnInit{

    switch1ShouldbeActive: number;
    switch2ShouldbeActive: number;
    switch3ShouldbeActive: number;
    switch4ShouldbeActive: number;
   
    
    ngOnInit(): any{
        this.switch1ShouldbeActive = Math.round(Math.random());
        this.switch2ShouldbeActive = Math.round(Math.random());
        this.switch3ShouldbeActive = Math.round(Math.random());
        this.switch4ShouldbeActive = Math.round(Math.random());

        console.log(this.switch1ShouldbeActive);
        console.log(this.switch2ShouldbeActive);
        console.log(this.switch3ShouldbeActive);
        console.log(this.switch4ShouldbeActive);
    }

    

}