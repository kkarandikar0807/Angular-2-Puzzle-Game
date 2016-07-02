System.register(['@angular/core', './test.component'], function(exports_1, context_1) {
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
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = 'Kaushik';
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        templateUrl: '../templates/mycomponent.component.html',
                        styleUrls: ['../src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtnQkFVQSxDQUFDO2dCQU5HLHVDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7Z0JBQzFCLENBQUM7Z0JBakJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFdBQVcsRUFBRSx5Q0FBeUM7d0JBR3RELFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO3dCQUN6QyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUc5QixDQUFDOzt3Q0FBQTtnQkFZRiwyQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsdURBVUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtUZXN0Q29tcG9uZW50fSBmcm9tICcuL3Rlc3QuY29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4uL3RlbXBsYXRlcy9teWNvbXBvbmVudC5jb21wb25lbnQuaHRtbCdcclxuICAgICAgICAgIFxyXG4gICAgLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXHJcbiAgICBkaXJlY3RpdmVzOiBbVGVzdENvbXBvbmVudF0gXHJcblxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIG5hbWU6IHN0cmluZzsgXHJcblxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpOiBhbnl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ0thdXNoaWsnO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
