fetch('text.txt')
    .then(response => response.text())
    .then(data => {
        console.log("Fetched data:", data);

        const sections = data.split('\r\n\r\n');
        console.log("Sections:", sections);

        sections.forEach(section => {
            const lines = section.split('\r\n');
            const header = lines[0].replace('[', '').replace(']', '').toLowerCase();
            console.log("Processing header:", header);

            const content = lines.slice(1).join('\n');
            console.log("Content for header:", content);

            const element = document.getElementById(header);
            if (element) {
                element.innerText = content;
            } else {
                console.warn(`No element found for header: ${header}`);
            }
        });
    });
