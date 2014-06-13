'use strict';

describe('ngStorage', function () {
    var expect = chai.expect;

    beforeEach(module('ngStorage'));

    it('should contain a $localStorage service', inject(function(
        $localStorage
    ){
        expect($localStorage).not.to.equal(null);
    }));

    it('should contain a $sessionStorage service', inject(function(
        $sessionStorage
    ){
        expect($sessionStorage).not.to.equal(null);
    }));
});
