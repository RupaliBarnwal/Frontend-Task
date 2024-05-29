document.getElementById('projects-tab').addEventListener('click', function() {
    showTab('projects');
});

document.getElementById('project-info-tab').addEventListener('click', function() {
    showTab('project-info');
});

document.getElementById('manage-access-tab').addEventListener('click', function() {
    showTab('manage-access');
});

function showTab(tabId) {
    document.querySelectorAll('.nav-link').forEach(function(tab) {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-pane').forEach(function(tab) {
        tab.classList.remove('active');
    });
    document.getElementById(tabId + '-tab').classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function addRow(sectionId) {
    const section = document.getElementById(sectionId);
    const newRow = section.children[1].cloneNode(true);
    section.appendChild(newRow);
}

function removeRow(button) {
    const row = button.closest('.row');
    if (row.parentNode.children.length > 2) {
        row.remove();
    }
}
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('sidebarCollapse').addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('active');
        });

        document.getElementById('projectsBtn').addEventListener('click', function() {
            // Implement the logic to switch to Projects view
            console.log('Projects button clicked');
        });

        document.getElementById('projectInfoBtn').addEventListener('click', function() {
            // Implement the logic to switch to Project Info view
            console.log('Project Info button clicked');
        });

        document.getElementById('manageAccessBtn').addEventListener('click', function() {
            // Implement the logic to switch to Manage Access view
            console.log('Manage Access button clicked');
        });

    });