const colors = {
    'green': '#01bf71',
    'orange': 'orange',
    'red': 'red',
    'yellow': 'yellow'
}

const colorGrid = ['green', 'orange', 'red', 'yellow'];

export const onThemeClick = () => {
    let randomColor = colorGrid[Math.floor(Math.random() * colorGrid.length)];
    return colors[randomColor]
}

// move this code to pages/index.js
// save theme in local storage