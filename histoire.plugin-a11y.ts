import type { HstPlugin } from 'histoire';
import axe from 'axe-core';

export function HstA11y(): HstPlugin {
    return {
        name: 'histoire-plugin-a11y',

        async onStoryMount({ app }) {
            // Injecte un bouton dans l'UI
            const btn = document.createElement('button');
            btn.innerText = 'Run A11y Audit';
            btn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 99999;
                background: black;
                color: white;
                border-radius: 6px;
                padding: 8px 12px;
              `;
            document.body.appendChild(btn);

            btn.onclick = async () => {
                const results = await axe.run(document.body);

                console.group('[Histoire A11y]');
                console.log(results);
                console.groupEnd();

                alert(`A11y report: ${results.violations.length} violation(s). See console.`);
            };
        },
    }
}
