// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * Configuración de Playwright
 */
export default defineConfig({
    testDir: "./tests",

    // Ejecuta tests en paralelo
    fullyParallel: true,

    // Evita subir código con test.only en CI
    forbidOnly: !!process.env.CI,

    // ❌ SIN reintentos (si falla, falla de una)
    retries: 0,

    // Workers (en CI usa 1 solo, en local usa todos)
    workers: process.env.CI ? 1 : "50%",

    // Reporte HTML
    reporter: "html",

    // ⏱️ Tiempo máximo por test (10.5 segundos TOTAL)
    timeout: 10500,

    // ⏱️ Tiempo máximo para los expect
    expect: {
        timeout: 10500,
    },

    use: {
        /* Atributo personalizado para locators */
        testIdAttribute: "data-test",

        /* ⏱️ Tiempos de espera */
        actionTimeout: 10500,
        navigationTimeout: 10500,

        /* 📸 Captura de pantalla SOLO si falla */
        screenshot: "only-on-failure",

        /* 🎥 Grabación de video SOLO si falla (Nuevo) */
        video: "retain-on-failure",

        /* 🧠 Rastro (Trace) para debug SOLO si falla (Corregido para 0 retries) */
        trace: "retain-on-failure",

        /* Configuración del navegador */
        launchOptions: {
            // 🐢 Cámara lenta solo si activas modo con cabecera (Headed)
            slowMo: process.env.HEADED ? 1500 : 0,
        },
    },

    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
    ],
});
