const Parser = require('rss-parser');

// RSS FEEDS: 
// https://cointelegraph.com/rss/tag/blockchain

async function fetchRssItems(url) {
    const parser = new Parser();
    const feed = await parser.parseURL(url);
    // The return format must be compliant with Flowise's Custom Document Loader
    return feed.items.map(item => ({
        pageContent:  item.link,
        metadata: {
            title: item.title,
           
        }
    }));
}

// Example usage:
fetchRssItems('https://cointelegraph.com/rss/tag/blockchain').then(items => {
    console.log(items);
});
