import { OrxeRatings } from '../';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);
describe('orxe-ratings-axe', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
    let Ratings;
    beforeEach(async () => {
        OrxeRatings;
        document.body.appendChild(document.createElement('Ratings'));
        Ratings = document.querySelector('Ratings');
    });
    afterEach(() => {
        Ratings.remove();
    });
    it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
        const result = await axe(Ratings);
        expect(result).toHaveNoViolations();
    });
});
