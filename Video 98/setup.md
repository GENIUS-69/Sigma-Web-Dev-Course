## How to setup Tailwind CSS

Step 1: Run The following commands

```
npm install -D tailwindcss
npm tailwindcss init
```

Step 2: Update the tailwind.config.js to include this line
```
content: ["*.html"],
```
Step 3: create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the src/output.css file to your html

Step 5: Run the following command
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

