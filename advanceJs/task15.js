function parseConfiguration(jsonString) {
    try {
        const config = JSON.parse(jsonString);
        console.log("Configuration loaded successfully:", config);
        return config;
    } catch (error) {
        console.error("Failed to parse config. Using default settings.");
        return {
            theme: "light",
            autoSave: true
        };
    }
}

// Test with valid JSON
parseConfiguration('{"theme":"dark"}');

// Test with invalid JSON
parseConfiguration('{"theme":"dark",}');