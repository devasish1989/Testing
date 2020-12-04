import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    // TODO:
     it('should ensure sure app loads', () => { 

      // const correctapp = AppPage.getTitleText();

      });

    // TODO:
    // it('should route to a random recipe, and ensure another route there is different than the first', () => { ... });

    // TODO: Add any additional you see fit
    // it('should ...', () => { ... });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(
            jasmine.objectContaining({
                level: logging.Level.SEVERE,
            } as logging.Entry)
        );
    });
});
