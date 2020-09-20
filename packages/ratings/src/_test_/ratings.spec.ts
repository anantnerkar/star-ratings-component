import { OrxeRatings } from '../';
import '@testing-library/jest-dom';

describe('orxe-ratings', () => {
  let ratings;

  beforeEach(async function() {
    OrxeRatings;
    ratings = (await document.body.appendChild(document.createElement('orxe-ratings'))) as OrxeRatings;
  });

  afterEach(async function() {
    await ratings.remove();
  });
 
   /**
   * Function that returns an element containing the testId data attribute.
   */
  function getByTestId(id: string): HTMLElement {
    return ratings.shadowRoot.querySelector(`[data-testid=${id}]`);
  }

  it('Should check default attribute', async () => {
    const ratingsMain = getByTestId('ratings-main');
    expect(ratingsMain).toHaveAttribute('class', 'main');
  });

  it('should function call render', () => {
    expect(ratings.render()).toBeTruthy();
  });
});
