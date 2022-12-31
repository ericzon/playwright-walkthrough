// @ts-check
const { test, expect } = require('@playwright/test');

test.setTimeout(60000)

test('bot test', async ({ page }) => {
  await page.goto('http://localhost:3000/test');

  await expect(page).toHaveTitle(/Web Chat: Minimize mode/);

  // main locator
  const chatInput = page.getByPlaceholder('Type your message');
  await page.getByRole('button', { name: '' }).click();
  await page.waitForTimeout(2000);

  await chatInput.fill('Hola');
  await chatInput.press('Enter');

  const msgsListLocator = page.getByRole('listitem');

  await msgsListLocator.filter({ hasText: 'Bot said, Por favor, explica brevemente lo que ha pasado' }).locator('p').click();
  await chatInput.fill('problema con la batería');
  await chatInput.press('Enter');

  await msgsListLocator.filter({ hasText: 'Bot said, Entiendo que puede ser un problema de batería, ¿verdad?' }).locator('p').click();
  await chatInput.fill('sí');
  await chatInput.press('Enter');

  await msgsListLocator.filter({ hasText: 'Bot said, En primer lugar, ¿cuál es el número de matrícula del vehículo?' }).locator('p').click();
  await chatInput.fill('5563-bbb');
  await chatInput.press('Enter');

  await msgsListLocator.filter({ hasText: 'Gracias. He anotado' }).locator('p').click();
  await chatInput.fill('sí');
  await chatInput.press('Enter');

  await msgsListLocator.filter({ hasText: '¿Sería este mismo número desde el que nos estás llamando?' }).locator('p').click();
  await chatInput.fill('sí');
  await chatInput.press('Enter');

  await msgsListLocator.filter({ hasText: 'Entendido. ¿Necesitas la asistencia en este momento o prefieres programarla para más adelante?' }).locator('p').click();
  await chatInput.fill('ahora');
  await chatInput.press('Enter');
  
  await msgsListLocator.filter({ hasText: 'Bot said, De acuerdo. Si estás cerca del vehículo podemos enviarte un SMS con un' }).locator('p').click();
  await chatInput.fill('sí');
  await chatInput.press('Enter');

  await msgsListLocator.filter({ hasText: 'Bot said, Voy a transferir esta llamada' }).locator('p').click();
  // await page.pause();
  // Alternative: .nth(1)
  await expect(await msgsListLocator.last().textContent()).toMatch(/Voy a transferir esta llamada a un agente para que pueda ayudarte./);
});