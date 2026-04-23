// 📄 PÁGINA
expect(page).toHaveURL("/inventory.html");
expect(page).toHaveTitle(/SauceDemo/);

// 👁️ VISIBILIDAD
expect(locator).toBeVisible();
expect(locator).toBeHidden();

// 📝 TEXTO Y CONTENIDO
expect(locator).toHaveText("Texto exacto");
expect(locator).toContainText("parte del texto");
expect(locator).toHaveValue("valor de un input");

// 🔢 CANTIDAD
expect(locator).toHaveCount(4); // cuántos elementos matchean

// ✅ ESTADO
expect(locator).toBeEnabled();
expect(locator).toBeDisabled();
expect(locator).toBeChecked(); // checkboxes
