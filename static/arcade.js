const flavoursContainer = document.getElementById('flavoursContainer');
        const flavoursScrollHeight = flavoursContainer.scrollHeight;

        window.addEventListener('load', () => {
            self.setInterval(() => {
                if (flavoursContainer.scrollTop !== flavoursScrollHeight) {
                    flavoursContainer.scrollBy(flavoursContainer.scrollTop + 1, 0);
                }
            }, 10);
        });