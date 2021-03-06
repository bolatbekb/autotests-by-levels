import {protractor} from 'protractor';
import {HomePage} from '../../po/pages/home/HomePage';
import {DocsPage} from '../../po/pages/docs/DocsPage';

const homePage = new HomePage(protractor);
const docsPage = new DocsPage(protractor);

describe('Hero section.', () => {

    beforeEach(async () => {
        await homePage.open();
    });

    it('Verification that hero section is displayed', async () => {
        await homePage.infoBlock.asserts.displayed();
    });

    it('Verification redirecting to Docs page', async () => {
        await homePage.infoBlock.startedBtn.click();
        await docsPage.asserts.opened();

        // await homePage.asserts.not.opened(); // example of a negative assert
    });
});
