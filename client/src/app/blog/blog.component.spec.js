/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var blog_component_1 = require('./blog.component');
describe('App: MEAN2', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                blog_component_1.BlogComponent
            ],
        });
    });
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(blog_component_1.BlogComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have as title 'app works!'", testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(blog_component_1.BlogComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app works!');
    }));
    it('should render title in a h1 tag', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(blog_component_1.BlogComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('app works!');
    }));
});
