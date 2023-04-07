function truncateTitleToNWords(title, nWords = 4) {
    const words = title.split(' ');
    const truncatedTitle = words.slice(0, nWords).join(' ');

    if (words.length > nWords) {
        return `${truncatedTitle}...`;
    }

    return truncatedTitle;
}

function truncatePluginTitlesInSearchResults() {
    const pluginTitleLinks = document.querySelectorAll('.plugin-card .name.column-name h3 a');

    pluginTitleLinks.forEach((link) => {
        const pluginIcon = link.querySelector('.plugin-icon');
        const originalTitle = link.childNodes[0].textContent.trim();
        const truncatedTitle = truncateTitleToNWords(originalTitle);

        if (originalTitle !== truncatedTitle) {
            link.removeChild(link.childNodes[0]);
            const newTitleNode = document.createTextNode(truncatedTitle);
            link.insertBefore(newTitleNode, pluginIcon);
        }
    });
}

// Run the function on plugin search results page
document.addEventListener('DOMContentLoaded', () => {
    truncatePluginTitlesInSearchResults();

    // Run the function when user searches for plugins
    const searchBox = document.getElementById('search-plugins');
    if (searchBox) {
        searchBox.addEventListener('input', () => {
            setTimeout(truncatePluginTitlesInSearchResults, 500);
        });
    }
});
