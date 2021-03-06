const PORT = process.env.PORT || 5000,
      app = require("./app"),
      express = require("express"),
      path = require('path');

app.listen(PORT, () =>
{
    console.log('Server is listening on port ' + PORT);
});

if (process.env.NODE_ENV === 'production')
{
    app.use(express.static('web-frontend/build'));
    app.get('*', (req, res) =>
    {
        res.sendFile(path.resolve(__dirname, 'web-frontend', 'build', 'index.html'));
    });
}
