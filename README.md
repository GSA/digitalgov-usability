# Usability.gov

_A future product of Digital.gov and the General Services Administration_

**Preview on Federalist** https://cg-ca533af2-85d8-48d5-b022-a488db3d069b.app.cloud.gov/site/gsa/digitalgov-usability/

---

## Overview

**Usability.gov is moving to the GSA!**
The team at Digital.gov is taking over ownership of Usability.gov and will be working with experts across the government community to update the site with the [U.S. Web Design System](https://designsystem.digital.gov/) and help it to be in line with [21st Century IDEA](https://digital.gov/resources/21st-century-integrated-digital-experience-act/).



---



### History

According to _"The Story Behind Usability.gov"_ by Sanjay Koyani from 2002

> The seeds for Usability.gov were sown in early 1999 when the popular CancerNet web site came up for a redesign.

> Today, when you visit Usability.gov, you get a sense of how these tools help government and other web designers to avoid our early mistakes. Whether you read our case study about the redesign of CancerNet in our Lessons Learned section, or read our guidelines about testing issues such as scenario writing, user recruiting, goal establishment, or data compilation, you will see our picture of user-centered web design in action.


[**Usability.gov**](Usability.gov) has been an important resource for people in government to learn how to how to make websites more usable, useful, and accessible.


## What we're working on

- Put up a static version of Usability.gov on [Federalist](https://federalist.18f.gov/).
- Transfer the usability.gov domain to from HHS to GSA (done)
- Transfer any usability.gov accounts (analytics, google webmaster tools, social media accounts, etc...)
- Point usability.gov toward the Federalist site
- Stand up a team through [Open Opportunities](https://openopps.usajobs.gov/) to help with the transition of the site.
- Develop a schedule for communicating with the Usability team, including public meetings.
- Develop a comms plan around the work we're doing and how it ties into the USWDS and 21st Century IDEA.



---


## Migrating to a static site

To move the site over to [Federalist](https://federalist.18f.gov/), we used [WGET](https://www.gnu.org/software/wget/manual/wget.html) to take snapshots of the whole site as static HTML files.

Here's what we used:

```
wget \
     --recursive \
     --level=inf \
     --no-clobber \
     --page-requisites \
     --html-extension \
     --convert-links \
     --restrict-file-names=windows \
     --adjust-extension \
     --domains usability.gov \
     --no-parent \
     -nc -k -p \
     https://www.usability.gov/
```

Then we re-ran `wget -p -k --no-clobber https://www.usability.gov/` to clean up all the relative URLs.

---

## Installing Locally



**To build the pages with Jekyll:**
1. Open a new tab in terminal
1. Navigate to the root directory of the project
1. Run: `bundle install` to add any new dependencies
1. Run: `bundle exec jekyll serve`
1. Go to <http://localhost:4000> to see the site.

**To build the CSS styles:**
1. open a new tab in terminal
2. Navigate to the root directory of the project
3. run: `gulp`
4. Go to <http://localhost:4000>.
