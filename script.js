function showDetails(item) {
    var detailsContainer = document.getElementById('detailsContainer');
    var detailsContent = document.getElementById('detailsContent');
    detailsContent.innerHTML = item.innerHTML;
    detailsContainer.style.display = 'flex';
}

function closeDetails() {
    document.getElementById('detailsContainer').style.display = 'none';
}

var menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        showDetails(item);
    });
});
