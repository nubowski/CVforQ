fetch('text.txt')
    .then(response => response.text())
    .then(data => {
        const sections = data.split(/\r?\n\r?\n/);

        sections.forEach(section => {
            const lines = section.split(/\r?\n/);
            const header = lines[0].replace('[', '').replace(']', '').toLowerCase();

            const bulletPoints = lines.slice(1).filter(line => line.startsWith('- '));

            const element = document.getElementById(header);
            if (element) {
                if (bulletPoints.length > 0) {
                    const ul = document.createElement('ul');
                    bulletPoints.forEach(point => {
                        const li = document.createElement('li');
                        li.innerText = point.replace('- ', '');
                        ul.appendChild(li);
                    });
                    element.appendChild(ul);
                } else {
                    element.innerText = lines.slice(1).join('\n');
                }
            } else {
                console.warn(`No element found for header: ${header}`);
            }
        });
    });
