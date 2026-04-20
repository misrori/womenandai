#!/bin/bash
# Create index.html for GitHub Pages at the root of dist
cat > dist/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Women and AI</title>
  <link rel="stylesheet" href="/womenandai/assets/styles-GQbPQhAL.css" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/womenandai/assets/index-DL6buIf5.js"></script>
</body>
</html>
EOF

# Create 404.html that redirects to index.html for client-side routing
cat > dist/404.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Women and AI</title>
  <link rel="stylesheet" href="/womenandai/assets/styles-GQbPQhAL.css" />
  <script>
    // Redirect to index.html and preserve the path for client-side routing
    const path = window.location.pathname;
    sessionStorage.setItem('redirect', path);
    window.location.href = '/womenandai/';
  </script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/womenandai/assets/index-DL6buIf5.js"></script>
</body>
</html>
EOF

echo "GitHub Pages configuration files created"
