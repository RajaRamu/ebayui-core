const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes, testEventsMigrator } = require('../../../common/test-utils/server');
const template = require('..');

use(require('chai-dom'));

it('renders default radio', async() => {
    const { getByRole } = await render(template);
    const radioControl = getByRole('radio');
    expect(radioControl).to.have.class('radio__control');
    expect(radioControl.parentElement).to.have.class('radio');
    expect(radioControl.nextElementSibling).to.have.class('radio__icon');
    expect(radioControl).to.have.property('disabled', false);
});

it('renders disabled radio', async() => {
    const { getByRole } = await render(template, { disabled: true });
    const radioControl = getByRole('radio');
    expect(radioControl).to.have.property('disabled', true);
});

testPassThroughAttributes(template, {
    getClassAndStyleEl(component) {
        return component.getByRole('radio').parentElement;
    }
});

testEventsMigrator(require('../migrator'), 'radio',
    ['focus', 'change'], '../index.marko');
