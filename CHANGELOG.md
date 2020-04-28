# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.2] (predictably...)2020-04-27
### Added
- New NextJS version
- Gimbal Lighthouse notification
- New IN{TV} partner quotes

### Changed
- Responsiveness of home banner
- Partner carousel buttons

### Removed
- Service worker until is fixed

## [5.1.6] 2020-04-17
### Added
- Added IN{TV} Partner carousel

### Changed
- Fixed language on nav

### Removed
- Nothing...

## [5.1.4] 2020-04-08
### Added
- Added "This Hoodie Pays Rent" campaign link and banner image on home

### Changed
- Fixed word break on card component paragraphs
- Refactored Content Card 
- Fixed change from day-light-savings on INTV page

### Removed
- Nothing...

## [5.1.3] 2020-04-03
### Added
- Added donate modal
- Added cdn for build folder
- Added featured product component  

### Changed
- Changed contact page from being indexed
- Updated JMB's bio

### Removed
- Removed remnants of filestack

## [5.1.2] 2020-03-27
### Added
- Added smooth scrolling in home page
- Added video player component and using it in /positions
- Added groovy headers

### Changed
- Updated title inside banner on /the-mentor
- Updated watch live image link in imagi-nation-tv
- Updated numbers in about page
- Update feed messages on stories

### Removed
- Cleaned up the code
- Removed Craft (unused)
- Removed address autocomplete input (unused)

## [5.1.1] 2020-03-25
### Changed
- Updated content on /imagi-nation-tv and homepage banner

## [5.1.0]
### Added
- Added some polyfill for Internet Explorer compatibility
- Added contentful to terms of service
- Added contentful to reports
- Added banner component reused in multiple pages
- Added card component used in Stories, Imagination TV, and other pages

### Changed
- Text on Be a mentors page to Applications are now open.
- Adds next-seo library to handle SEO tags.
- Update some styles to fix errors in Carousel

### Removed
- Removed link to be-a-friend from jobs page
- Removed unused pages in SEO tags and reorder them.

## [5.0.0]
### Added

- Redesign of home page
- Load stories from Contentful and redesign
- Migrate architecture to SSR using nextjs
- Migrate to css modules some pages and components
- Start using Blueprint components as Input, Textarea, Paragraph, Titles

### [4.5.5] 2019-08-29
- A bugsnag error catch to collect EOI form information from the user, then send it to bugsnag, this ensures if the error occurs we can still collect the key details of the user.
- added the above information to the USER tab in bugsnag rather than create a new tab for the information.

**//TODO** Use this links per version if there's a tag/commit history
[Unreleased]: https://github.com/aimementoring/aime-portal/compare/v5.1.1...HEAD
[5.1.1]: https://github.com/aimementoring/aime-portal/releases/tag/v5.1.1


## [4.5.5] 2019-09-03
### Changed
- Imagination Declaration page

## [4.5.4] 2019-08-27
### Added
- Imagination Declaration page

## [4.5.3] 2019-08-26
### Changed
- updated wording for itendity checkbox

## [4.5.2] - 2019-08-23
### Added
- updated condition for rendering identity checkbox on "work with AIME" application submit form - positionEntry/positionEntry.js - line 454
this will render the checkbox when the job.country includes "Australia" as listed in the column "Country" in Airtable

## [4.5.1] - 2019-08-22
### Added
- updated condition for rendering identity checkbox on "work with AIME" application submit form - positionEntry/positionEntry.js - line 454
this will render deending on the location rather than the country of residence for the applicant

## [4.5.0] - 2019-08-20
### Added
- pulled code from bugfix/supporting-docs-container
- updated version in package.json to reflect actual version 4.x
### Fixed
- condition for rendering identity checkbox on "work with AIME" application submit form - positionEntry/positionEntry.js - line 454

## [4.1.2] - 2019-08-19 //**TODO** This is actually 4.x!!
### Added
- hide supporting docs container if there are no docs on /positions page positionsEntry.js line 138
- updated readme.me with some extra steps for getting website up and rnning locally
- updated readme.md react-snap trouble shooting section for timeout issue
- added linebreak-style to eslint to ignore different line endings for mac/pc/linux

### Changed
- package.json version updated to reflect version in changlog

## [4.1.1] - 2019-07-16
### Changed
- Put the old banner back in the Homepage



## [4.1.0] - 2019-07-16 //**TODO** This is actually 4.x!!
### Added
- More environment variables files to set everything in local
- Dynamics EOIs 
- Hoodie day page (but it is hidden)
### Changed
- Changed `StudentChapter` by `HoodedScholar` variable names in the code
- Improve documentation
- Job Page: improvement of the code + add functionality as sort jobs by publish date 
- Fix bugsnag error when checkout.id is null
- Be a Mentor: code improvement + fixing typos
### Deleted
- Pages as famDetails and homeOfTheHoodie


[Unreleased]: https://github.com/aimementoring/aime-portal/compare/v3.1.0...HEAD
[3.1.0]: https://github.com/aimementoring/aime-portal/releases/tag/v3.1.0

## [4.0.1] - 2019-05-14 https://github.com/aimementoring/aime-portal/releases/tag/v3.0.0 //
### Added
- New product banner for Hoodie 2019 to homepage
- Secondary panel linking to hoodie day ambassador opportunity
- New package versions (React 16.8)

### Fixed
- Hooded Scholars EOI's going to Airtable instead of formkeep

### Removed
- Curly braces in footer (typo)
- Hooded scholar EOI for ZA

## [4.0.0] - 2018
### Added
- New design with purple storm theme
- Full react project
- React snap

### Fixed

### Removed
- Frontend and Backend decoupled
- Full react and deploy workflow 

## [3.0.0] - 2018
### Added
- React and Airtable integrations
- Track Attendance of Mentors, Mentees and Contacts for Program Days and Tutor Squads 

### Fixed

### Removed


## [2.0.0] - 2017

  This site is setup on an instance of [ScotchBox](https://box.scotch.io/). Consider installing [Vagrant](https://www.vagrantup.com/downloads.html) and [Virtualbox](https://www.virtualbox.org/wiki/Downloads) before pulling down a copy of the site to work on locally. 

  ### CMS files and other assets

  CMS files and assets will need to downloaded separately. SSH password is in 1Password (Vultr VPS).

  CMS Files: [rsync](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps) -chavzP --stats serverpilot@45.76.112.231:~/apps/aimementoring/craft /path/to/local/storage i.e. the craft directory should go in the root of the project directory

  File Uploads: rsync -chavzP --stats serverpilot@45.76.112.231:~/apps/aimementoring/public_html/file_uploads /path/to/local/storage i.e. the file_uploads directory should go in public_html

  Image Uploads: rsync -chavzP --stats serverpilot@45.76.112.231:~/apps/aimementoring/public_html/image_uploads /path/to/local/storage i.e. the image_uploads directory should go in public_html

  ### Links and Repo

  - https://v2.aimementoring.com
  - repo https://github.com/aimementoring/aime-website-v2 

  ## DB 

  Connection details are as follows:

  https://www.dropbox.com/s/wc2k7bx5n12j7xr/Screenshot%202017-09-19%2015.15.32.png?dl=0

  - Local DB un and pw is root
  - SSH un and pw is vagrant
    You will have to Import DB to scotchbox

  ### Added

  - CRAFT as a CMS

  ### Fixed

  ### Removed

  ## [1.0.0] - 2016

  We refer to this version of the AIME website as v1 as it represents a previous era of AIME prior to AIME going global. This version of the AIME website made use of a PHP instance. 

  ## Links and Repo 

  - https://v1.aimementoring.com
  - repo https://github.com/aimementoring/v1.0 

  ## DB 

  ### Added

  ### Fixed

  ### Removed


