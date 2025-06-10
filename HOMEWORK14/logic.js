import webdriver from 'selenium-webdriver';
import assert from 'assert';

const { Builder, By, Key, until } = webdriver;

//task 1
(async function task1() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://the-internet.herokuapp.com/dropdown');
    const dropdown = await driver.findElement(By.id('dropdown'));
    const options = await dropdown.findElements(By.css('option'));

    const isFirstOptionEnabled = await options[0].isEnabled();
    const isSecondOptionEnabled = await options[1].isEnabled();

    assert.strictEqual(
      isFirstOptionEnabled,
      false,
      'Option 0 should be disabled'
    );
    assert.strictEqual(
      isSecondOptionEnabled,
      true,
      'Option 1 should be enabled'
    );

    console.log('Option 0 is: ', isFirstOptionEnabled);
    console.log('Option 1 is: ', isSecondOptionEnabled);

    console.log('Test case 1 passed');
  } catch (err) {
    console.error('Test case 1 Failed:', err.message);
  } finally {
    await driver.quit();
  }
})();

//task 2
(async function task2() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://the-internet.herokuapp.com/hovers');

    const avatar = await driver.findElement(By.css('.figure:nth-child(3) img'));
    await driver.actions({ async: true }).move({ origin: avatar }).perform();
    const text = await (
      await driver.findElement(By.css('.figure:nth-child(3) .figcaption h5'))
    ).getText();

    assert.strictEqual(text, 'name: user1');
    console.log('Test case 2 passed');
  } catch (err) {
    console.error('Test case 2 Failed:', err.message);
  } finally {
    await driver.quit();
  }
})();

//task 3
(async function task3() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://formy-project.herokuapp.com/form');

    await driver.findElement(By.id('first-name')).sendKeys('Peter');
    await driver.findElement(By.id('last-name')).sendKeys('Peterson');
    await driver.findElement(By.id('job-title')).sendKeys('tester');
    await driver.findElement(By.id('radio-button-1')).click();
    await driver.findElement(By.id('checkbox-1')).click();
    await driver.findElement(By.id('select-menu')).click();
    await driver.findElement(By.css('option[value="2"]')).click();
    await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');
    await driver.findElement(By.css('.btn.btn-lg.btn-primary')).click();

    const alert = await driver.wait(
      until.elementLocated(By.className('alert')),
      2000
    );

    assert.strictEqual(
      await alert.getText(),
      'The form was successfully submitted!'
    );
    console.log('Test case 3 passed');
  } catch (err) {
    console.error('Test case 3 Failed:', err.message);
  } finally {
    await driver.quit();
  }
})();

//task 4
(async function task4() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    const dueCellsXpath = './/tbody/tr/td[4]';
    await driver.get('http://the-internet.herokuapp.com/tables');

    const table = await driver.findElement(By.id('table2'));
    await driver.executeScript('arguments[0].scrollIntoView(true);', table);

    const dueHeader = await table.findElement(By.xpath('.//th[4]'));

    const dueCellsBefore = await table.findElements(By.xpath(dueCellsXpath));
    const dueTextsBefore = await Promise.all(
      dueCellsBefore.map(cell => cell.getText())
    );

    await dueHeader.click();

    await driver.wait(async () => {
      const dueCellsAfter = await table.findElements(By.xpath(dueCellsXpath));
      const dueTextsAfter = await Promise.all(
        dueCellsAfter.map(cell => cell.getText())
      );
      return dueTextsAfter.some((text, i) => text !== dueTextsBefore[i]);
    }, 2000);

    const dueCells = await table.findElements(By.xpath(dueCellsXpath));
    const dueValues = await Promise.all(
      dueCells.map(async cell => {
        const text = await cell.getText();
        return parseFloat(text.replace('$', ''));
      })
    );

    const sortedValues = [...dueValues].sort((a, b) => a - b);

    console.log('dueValues: ' + dueValues);
    console.log('sortedValues: ' + sortedValues);

    assert.deepStrictEqual(dueValues, sortedValues);

    console.log('Test case 4 passed');
  } catch (err) {
    console.error('Test case 4 Failed:', err.message);
  } finally {
    await driver.quit();
  }
})();
