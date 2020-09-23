import { OrxeCheckbox } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-checkbox-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let Checkbox;

  beforeEach(async () => {
    OrxeCheckbox;
    document.body.appendChild(document.createElement('Checkbox'));
    Checkbox = document.querySelector('Checkbox') as OrxeCheckbox;
  });

  afterEach(() => {
    Checkbox.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(Checkbox);
    expect(result).toHaveNoViolations();
  });
});
