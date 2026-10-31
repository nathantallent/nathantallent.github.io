// We use JavaScript as a way to easily include this navigation map
// in several HTML pages.

// Menu items
var currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.write('<nav class="map" aria-label="Primary">');
document.write('  <p><a href="index.html"' + (currentPage === 'index.html' ? ' aria-current="page"' : '') + '>Home</a></p>');
document.write('  <p><a href="research.html"' + (currentPage === 'research.html' ? ' aria-current="page"' : '') + '>Research</a></p>');
//document.write('  <p><a href="black-holes.html">Black holes</a>');
document.write('</nav>');
