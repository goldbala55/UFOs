# UFOs
UFOs - Real *or* Fake?  An Interactive Exploration of UFO Sightings
## Project Overview
Are we alone?  This is a question mankind has asked itself for eons.  Dana, an experienced journalist, wants to find out.  She has acquired a table of reported UFO sightings and we will build a web site using this data for users to research this data.
## Results
When first launching the UFO site you are greeted by a stunning banner and a fascinating introductory article. Scroll down to see the complete group of reported sightings and a set of dynamic filers available to trim down your results ![Filter Options](https://github.com/goldbala55/UFOs/blob/main/static/images/Filters.png) 

The filters are dynamic so you can use one, or the cumulative effect of several.

Let's start with a simple date filter.  Enter 1/11/2010 into the date box and hit enter.  Instantly the page is filtered to your choice
![Date Filter](https://github.com/goldbala55/UFOs/blob/main/static/images/Date_Filter_Results.png) 

Now, enter a state, say FL (or fl), and the results are narrowed to sightings in Florida on Jan 11, 2010.
![Date and State Filter](https://github.com/goldbala55/UFOs/blob/main/static/images/Date_n_State_Filter_Results.png) 

If you need to clear the filters, just click on the UFO Sightings Banner at the top!

On the go?  No worries, this site is fully responsive and will work on your phone!
## Summary
While the page provides a wealth of information and is fast and easy to use, the data is static. The only way to update it is manually by editing the data.js file.  To help keep the data fresh and make navigation even easier, I'd suggest:

1. Scraping known web sites for updated / additional data (e.g., https://en.wikipedia.org/wiki/List_of_reported_UFO_sightings).
2. Allowing users to enter their own sightings by using a simple web form.
3. Create dropdowns based on the available data so users can easily find the options they want to filter on.
## Resources
This website was built using:
1. ES6 compliant javaScript, HTML 5, D3 4.11, and Bootstrap 4.0 CSS
2. Git Bash 4.4.23, Google Dev tools