'use strict';

const assert = require('chai').assert;
const LinkedList = require('../LinkedList');



describe('LinkedList', () => {

    var list;
    beforeEach(() => {
        list = new LinkedList();
    });

    describe('Initially empty', () => {
        it('.getLength() returns 0.', () => {
            assert.equal(list.getLength(), 0);
        });
    });



});

