const express = require('express');
const axios = require('axios')

const app = express();
const PORT = 3000;

// API URL and Parameters
const url = 'https://newsapi.org/v2/sources?apiKey=a6419181f12e489b82a072dc3cdcba0f'; // Adjusted endpoint to fetch sources

// Function to format sources
function formatSources(sources) {
    return sources.map(source => ({
        ID: source.id,
        Name: source.name,
        Description: source.description,
        URL: source.url,
        Category: source.category,
        Language: source.language,
        Country: source.country
    }));
}

// Route to fetch and display sources
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(url);

        if (response.status === 200) {
            const data = response.data; // Parse JSON response

            if (data.status === "ok") { // Check API response status
                const sources = data.sources || [];
                const formattedSources = formatSources(sources);
                res.json({ "News Sources": formattedSources });
            } else {
                res.json({ error: "API returned a failure status." });
            }
        } else {
            res.json({ error: `Failed to fetch data. HTTP Status: ${response.status}` });
        }
    } catch (error) {
        res.json({ error: `An error occurred: ${error.message}` });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
