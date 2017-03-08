"use strict";

var Car = function(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color || 'No Color Specified';

    this.GetColor = function() {
        return this.color;
    };

    this.GetMake = function() {
        return this.make;
    };

    this.GetYear = function() {
        return this.year;
    };
};

//Call this right away
(function() {
    var astroVan = new Car('Chevy', 'Astro', 1995, 'Maroon/Tan');

    //Let the user know what the Car's Color Is
    alert(astroVan.GetColor());

    //TODO: Let the User Know the Year's Make
    //TODO: Make a new Car
})();