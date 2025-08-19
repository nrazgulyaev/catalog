// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Ahau Gardens page loaded');
    
    // Initialize the page
    initializePage();
    
    // Add any interactive functionality here
    setupInteractions();
});

function initializePage() {
    // Set up responsive behavior
    setupResponsiveBehavior();
    
    // Initialize tables
    initializeTables();
    
    // Set up any animations or effects
    setupAnimations();
}

function setupResponsiveBehavior() {
    // Handle window resize
    window.addEventListener('resize', function() {
        handleResize();
    });
    
    // Initial check
    handleResize();
}

function handleResize() {
    const width = window.innerWidth;
    const desktopVersion = document.querySelector('.desktop-version');
    const mobileVersion = document.querySelector('.mobile-version');
    
    if (width <= 1295) {
        // Mobile layout
        if (desktopVersion) desktopVersion.style.display = 'none';
        if (mobileVersion) mobileVersion.style.display = 'block';
    } else {
        // Desktop layout
        if (desktopVersion) desktopVersion.style.display = 'block';
        if (mobileVersion) mobileVersion.style.display = 'none';
    }
}

function initializeTables() {
    // Add any table-specific functionality
    const tables = document.querySelectorAll('.table');
    
    tables.forEach(table => {
        // Add table interactions if needed
        setupTableInteractions(table);
    });
}

function setupTableInteractions(table) {
    // Add hover effects or other interactions to table cells
    const cells = table.querySelectorAll('.cell');
    
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f0f0';
        });
        
        cell.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
}

function setupAnimations() {
    // Add any page animations or effects
    const elements = document.querySelectorAll('.villa-label, .main-title, .price-info');
    
    elements.forEach((element, index) => {
        // Add staggered fade-in animation
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
}

function setupInteractions() {
    // Add any additional interactive functionality
    
    // Example: Villa label click handlers
    const villaLabels = document.querySelectorAll('.villa-label');
    villaLabels.forEach(label => {
        label.addEventListener('click', function() {
            const villaType = this.textContent;
            showVillaDetails(villaType);
        });
    });
}

function showVillaDetails(villaType) {
    // Show detailed information for selected villa
    console.log(`Showing details for ${villaType}`);
    
    // You can implement a modal or expand the table row here
    alert(`Details for ${villaType} villa`);
}

// Export functions for potential external use
window.AhauGardens = {
    initializePage,
    showVillaDetails,
    setupInteractions
};
