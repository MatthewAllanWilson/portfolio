page('/', homeController.index);
page('/about', aboutController.index);
// page('/projects', projectsController.index);
page('/repos', repoController.index);

page('/projects/:projectTitle',
projectsController.loadByTitle,
projectsController.index);

page();
