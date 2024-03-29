# Matt Peachey | Vis Assignment

This .zip file contains everything required to run my CSCI 6406 assignment submission. This README file provides all relevant information about this assignment, including system requirements, how to run the program, interactivty components, and citations for references used in this assignment.

## System requirements

As consulted with the TA, this assignment requires a specific resolution of browser screen to display the visualizations properly. In order to view this assignment correctly, please ensure your browser window has the following dimensions.

- Width: 1663px
- Height: 1394px

This will ensure that all of the D3 elements are positioned properly relative to both the background image and eachother.

## How to run

The following instructions demonstrate how to run this project.

Unzip the entire project to your `htdocs` folder (for MAMP, use approptiate folder for other local webserver softwares).

Next, navigate to `localhost/peacheym_assignment` to view the finished project.

## Interactivity

I have programmed several interactive components to fulfil the final 20% component of this assignment. A list of how each of these can be used by a user is as follows:

- Chart 1: When a user clicks on the date, they are able to toggle between data for 2021 and 2022.
- Chart 4: When the user clicks on any of the grey vertical lines, a tool tip is toggled to explain what that line means.
- Chart 6 When the user hovers over any of the bars, the associated percentage value appears at the end of that bar

## Directory Structure

This submission contains an `index.html` that is the main entry point into the web view.

The main index references a script called `main.js` which is responsible for populating the inital SVG container as well as the header text content.

There are then six javascript files which follow the pattern `chartN.js` where the `N` refers to which chart on the main page that code is responsible for populating.

The charts that require data access it through the csv files named `csv-files/chartN.csv` where `N` once again corresponds with the chart to which that data is needed for.

Together, all of these files work to present the final submission.

## Citations

I used several references to the d3 documentation while learning about how it worked for this assignment. While the work included as submission for this assignment is my own, some code aspects of it were inspired directly from this documentation. A set of links to specific pages of documentation I refered to is included below, along with the code snippets which utilized that information.

- https://github.com/d3/d3/wiki | The official D3 documentation was used a fair amount for the completion of this assignment.

- https://www.d3-graph-gallery.com/graph/line_basic.html | Used to learn about drawing basic graphs, the code in chart 1 is adapted from the example code provided, but the final submission reflects my own work.

- https://www.tutorialsteacher.com/d3js/select-dom-element-using-d3js | used to learn how to select and delete svg elements by ID, found it in the notes later.

- https://d3-wiki.readthedocs.io/zh_CN/master/SVG-Axes/ | used to learn how to customize axes and their tick

- https://iconmonstr.com/time-3-svg/ | Clock SVG

- https://iconmonstr.com/arrow-1-svg/ | Arrow SVG

- https://uxwing.com/human-icon/ | Human SVG

- https://observablehq.com/@d3/gallery | These examples from the D3 official website were used as learning materials to understand how different aspects of d3 worked.
