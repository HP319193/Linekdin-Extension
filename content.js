chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'start') {
        const nameElement = document.querySelector("h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words");
        const sections = document.querySelectorAll("section.artdeco-card");

        const res = new Array();
        for (const section of sections) {
            const isExperience = section.querySelector("#experience");
            if (isExperience) {
                const experiences = section.querySelectorAll("li.artdeco-list__item");
                for (const experience of experiences) {
                    const mainBox = experience.querySelector("div > div.display-flex.flex-column.full-width.align-self-center > div.display-flex.flex-row.justify-space-between");

                    if (mainBox) {
                        const spans = mainBox.querySelectorAll('span[aria-hidden="true"]');
                        for (const span in spans) {
                            res.push(span.textContent);
                        }
                    }
                }
            }
        }

        sendResponse({ data: res });
        // const name = nameElement.textContent;


    }
});
