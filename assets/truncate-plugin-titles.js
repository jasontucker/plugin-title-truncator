function truncateTitleToNWords(title, nWords = 4) {
    const words = title.split(' ');
    const truncatedTitle = words.slice(0, nWords).join(' ');

    if (words.length > nWords) {
        return `${truncatedTitle}...`;
    }

    return truncatedTitle;
}

function truncatePluginTitlesInSearchResults() {
    const pluginTitles = document.querySelectorAll('.plugin-card h3');

    pluginTitles.forEach((title) => {
        const titleTextNode = Array.from(title.childNodes).find(node => node.nodeType === 3);
        if (!titleTextNode) return;

        const originalTitle = titleTextNode.textContent.trim();
        const truncatedTitle = truncateTitleToNWords(originalTitle);

        if (originalTitle !== truncatedTitle) {
            titleTextNode.textContent = ' ' + truncatedTitle;
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
