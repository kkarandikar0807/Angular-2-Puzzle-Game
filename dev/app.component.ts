import {Component} from '@angular/core';
import {PuzzleComponent} from './puzzle/puzzle.component';
@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!!</p>

        <my-puzzle></my-puzzle>
        
       
    `,
    directives: [PuzzleComponent] 
   
})
export class AppComponent {
    

}