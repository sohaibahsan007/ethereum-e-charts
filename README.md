
# Welcome to Charts Component Library

  

Requirments:

  

- We will be using [ECharts](https://echarts.apache.org/en/index.html) as our chart library and
-  [PapaParse](https://www.papaparse.com/) Library to work with csv files.
- Dark theme file, if needed
- Google Font Family [Montserrat](https://fonts.googleapis.com/css2?family=Montserrat)

  

# How to Integrate it with [Webflow](https://webflow.com/)?

  

Follow the guidelines below to integrate with Webflow.

  

 - First, Go to Setting -> **Custom Code**, then add these external scripts in **Head Code**

`<script src="https://sohaibahsan007.github.io/ethereum-e-charts/echarts.min.js"></script>`    `<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.1.2/papaparse.min.js"></script>`    `<link  rel="preconnect"  href="https://fonts.googleapis.com">`  
`<link rel="preconnect"  href="https://fonts.gstatic.com"  crossorigin>`     
`<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap"    rel="stylesheet">`

*NOTE:  these script's and links are only needed onces in head code section, you can integrate as many charts as you want in webflow after this.

Now to Integrate Chart in the UI, 

 - Go to The **Designer**, On **Left Panel**, Add a Container or Div on the Page, and name it like **`echarts-1`**,**`echarts-2`**,**`echarts-3`**  etc, for multiple charts on single pages, please use seperate id's for each div or container,
 - Then Open the Pages from **Left menu,** Then **Settings** by clicking on **Gear Icon**, then go to **Custom Code Section**, you will see 2 sections, Inside of `<head>` tag and before `</body>`  tag. we will insert code inside of these two using `<script></script>`  tags. 
 - we have 2 types of function in our code, first that we need to put inside of `<head>` tag is the static one, we can combine then into one section in webflow, but webflow only allows 10000 words in one section.
 -  First add these shared code inside of `<head>` tag section in webflow.  
