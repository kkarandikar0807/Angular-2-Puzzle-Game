System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1ShouldbeActive = Math.round(Math.random());
                    this.switch2ShouldbeActive = Math.round(Math.random());
                    this.switch3ShouldbeActive = Math.round(Math.random());
                    this.switch4ShouldbeActive = Math.round(Math.random());
                    console.log(this.switch1ShouldbeActive);
                    console.log(this.switch2ShouldbeActive);
                    console.log(this.switch3ShouldbeActive);
                    console.log(this.switch4ShouldbeActive);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        \n        <section class=\"setup\">\n             <h2>Game Setup</h2>    \n            Enter your name please: - \n            <input type=\"text\" #name (keyup)=\"0\" >\n        </section>            \n\n        <section\n         [ngClass]=\"{\n                puzzle:true,\n                solved: switch1.value == switch1ShouldbeActive &&  switch2.value == switch2ShouldbeActive && \n                         switch3.value == switch3ShouldbeActive &&  switch4.value == switch4ShouldbeActive        \n        }\" \n         [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n            <h2> Welcome to the puzzle |\n            \n            {{switch1.value == switch1ShouldbeActive &&  switch2.value == switch2ShouldbeActive && \n              switch3.value == switch3ShouldbeActive &&  switch4.value == switch4ShouldbeActive ? 'Solved'  :'Not Solved'\n                        \n            }}\n            \n             </h2>\n            <p>Ok, welcome <span class=\"name\">{{name.value}}</span></p>    \n            <br>\n            Switch 1:-\n            <input type=\"text\" #switch1 (keyup)=\"0\" value= Enter><br><br>\n            Switch 2:-\n            <input type=\"text\" #switch2 (keyup)=\"0\" value= Enter><br><br>\n            Switch 3:-\n            <input type=\"text\" #switch3 (keyup)=\"0\" value= Enter><br><br>\n            Switch 4:-\n            <input type=\"text\" #switch4 (keyup)=\"0\" value= Enter><br><br>\n            \n        </section>   \n\n        <h2 [hidden]=\"switch1.value != switch1ShouldbeActive ||  switch2.value != switch2ShouldbeActive || switch3.value != switch3ShouldbeActive ||  switch4.value != switch4ShouldbeActive\">\n        \n        \n        Congratulations {{name.value}}, you did it!!!\n        </h2>\n                \n    \n    \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbURBO2dCQUFBO2dCQXNCQSxDQUFDO2dCQWRHLGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRXZELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBbkVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRyxpeURBNENWO3FCQUNKLENBQUM7O21DQUFBO2dCQXdCRixzQkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsNkNBc0JDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXB1enpsZScsXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICBcclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNldHVwXCI+XHJcbiAgICAgICAgICAgICA8aDI+R2FtZSBTZXR1cDwvaDI+ICAgIFxyXG4gICAgICAgICAgICBFbnRlciB5b3VyIG5hbWUgcGxlYXNlOiAtIFxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmFtZSAoa2V5dXApPVwiMFwiID5cclxuICAgICAgICA8L3NlY3Rpb24+ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgIHB1enpsZTp0cnVlLFxyXG4gICAgICAgICAgICAgICAgc29sdmVkOiBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFTaG91bGRiZUFjdGl2ZSAmJiAgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyU2hvdWxkYmVBY3RpdmUgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNTaG91bGRiZUFjdGl2ZSAmJiAgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0U2hvdWxkYmVBY3RpdmUgICAgICAgIFxyXG4gICAgICAgIH1cIiBcclxuICAgICAgICAgW25nU3R5bGVdPVwie2Rpc3BsYXk6IG5hbWUudmFsdWUgPT09ICcnID8gJ25vbmUnIDogJ2Jsb2NrJ31cIj5cclxuICAgICAgICAgICAgPGgyPiBXZWxjb21lIHRvIHRoZSBwdXp6bGUgfFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3tzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFTaG91bGRiZUFjdGl2ZSAmJiAgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyU2hvdWxkYmVBY3RpdmUgJiYgXHJcbiAgICAgICAgICAgICAgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2gzU2hvdWxkYmVBY3RpdmUgJiYgIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNFNob3VsZGJlQWN0aXZlID8gJ1NvbHZlZCcgIDonTm90IFNvbHZlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHA+T2ssIHdlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+PC9wPiAgICBcclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICBTd2l0Y2ggMTotXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gxIChrZXl1cCk9XCIwXCIgdmFsdWU9IEVudGVyPjxicj48YnI+XHJcbiAgICAgICAgICAgIFN3aXRjaCAyOi1cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIiB2YWx1ZT0gRW50ZXI+PGJyPjxicj5cclxuICAgICAgICAgICAgU3dpdGNoIDM6LVxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiIHZhbHVlPSBFbnRlcj48YnI+PGJyPlxyXG4gICAgICAgICAgICBTd2l0Y2ggNDotXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2g0IChrZXl1cCk9XCIwXCIgdmFsdWU9IEVudGVyPjxicj48YnI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvc2VjdGlvbj4gICBcclxuXHJcbiAgICAgICAgPGgyIFtoaWRkZW5dPVwic3dpdGNoMS52YWx1ZSAhPSBzd2l0Y2gxU2hvdWxkYmVBY3RpdmUgfHwgIHN3aXRjaDIudmFsdWUgIT0gc3dpdGNoMlNob3VsZGJlQWN0aXZlIHx8IHN3aXRjaDMudmFsdWUgIT0gc3dpdGNoM1Nob3VsZGJlQWN0aXZlIHx8ICBzd2l0Y2g0LnZhbHVlICE9IHN3aXRjaDRTaG91bGRiZUFjdGl2ZVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIENvbmdyYXR1bGF0aW9ucyB7e25hbWUudmFsdWV9fSwgeW91IGRpZCBpdCEhIVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFB1enpsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBzd2l0Y2gxU2hvdWxkYmVBY3RpdmU6IG51bWJlcjtcclxuICAgIHN3aXRjaDJTaG91bGRiZUFjdGl2ZTogbnVtYmVyO1xyXG4gICAgc3dpdGNoM1Nob3VsZGJlQWN0aXZlOiBudW1iZXI7XHJcbiAgICBzd2l0Y2g0U2hvdWxkYmVBY3RpdmU6IG51bWJlcjtcclxuICAgXHJcbiAgICBcclxuICAgIG5nT25Jbml0KCk6IGFueXtcclxuICAgICAgICB0aGlzLnN3aXRjaDFTaG91bGRiZUFjdGl2ZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2gyU2hvdWxkYmVBY3RpdmUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoM1Nob3VsZGJlQWN0aXZlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLnN3aXRjaDRTaG91bGRiZUFjdGl2ZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMVNob3VsZGJlQWN0aXZlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDJTaG91bGRiZUFjdGl2ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gzU2hvdWxkYmVBY3RpdmUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoNFNob3VsZGJlQWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
