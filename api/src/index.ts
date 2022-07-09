import "dotenv/config";

import app from "./app";

const PORT: number = parseInt(process.env.PORT, 10) || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
