describe('App screen', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have welcome screen', async () => {
        await expect(element(by.id('welcome'))).toBeVisible();
    });

    it('should count to 1 if pressed once', async () => {
        await expect(element(by.id('runningState'))).toHaveText('0');
        await element(by.id('startButton')).tap();
        await expect(element(by.id('runningState'))).toHaveText('1');

    })

    it('should count to 4 if pressed 4 times', async () => {
        await expect(element(by.id('runningState'))).toHaveText('0');
        await element(by.id('startButton')).multiTap(4);
        await expect(element(by.id('runningState'))).toHaveText('4');

    })


    it('should write into TextInputs', async () => {
        await element(by.id("input")).typeText("Detox Automation POC-Test for enter text and delete text");
        await element(by.id("input")).clearText();
        await element(by.id("input")).replaceText("Bye");


    })
    it('should scroll the name by 1', async () => {
        await element(by.id('list')).scroll(100, 'down')
    })
    it('should till the end', async () => {
        // await element(by.id('list')).scrollTo('bottom')
        await element(by.id('list')).swipe('up', 'slow')
    })
});