This folder is ready for the site's raster images (logo files, hero photography,
project cover photos, leadership headshots, etc.) once DICIF provides them.

Current state of the design:
All visuals on the page right now (hero pattern, sector icons, the trust-strip
icons, and the charity illustration) are inline SVG code living directly inside
index.html — not separate files — so there is nothing to place here yet.

When real assets are ready, a typical structure would be:

images/
  logo-light.svg / logo-light.png   (logo for dark backgrounds)
  logo-dark.svg  / logo-dark.png    (logo for light backgrounds)
  hero-bg.jpg                       (hero background photo, if photography replaces the SVG pattern)
  projects/
    project-01.jpg
    project-02.jpg
    project-03.jpg
  team/
    leadership-01.jpg
    ...

Once files are added here, update the relevant src="" attributes in index.html
(or background-image rules in style.css) to point to images/filename.ext.
