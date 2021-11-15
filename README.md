# Welcome to Charts Component Library
Requirments: 

 - We will be using [ECharts](https://echarts.apache.org/en/index.html)
   as our chart library and
  - [PapaParse](https://www.papaparse.com/) Library to work with csv files.
  -  Dark theme file, if needed

# How to Integrate it with [Webflow](https://webflow.com/)?

Follow the guidelines below to integrate with Webflow.

 - First, Go to Setting -> **Custom Code**, then add these external   
   scripts in **Head Code**  
  `<script   
   src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.2.2/echarts.min.js"></script>`
   `<script   
   src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.2.2/theme/dark.min.js"
   async></script>` `<script   
   src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.1.2/papaparse.min.js"
   async></script>`    
   Remove of Dark theme is not needed.
- Then Go to The **Designer**, On **Left Panel**, Add a Container or Div on the Page, and name it like **`echarts-1`** , for multiple charts on single pages, please use seperate id's for each div or container, 
- Then Open the Pages from **Left menu,** Then **Settings** by clicking on **Gear Icon**, then go to **Custom Code Section**  and past the following code there inside of `<script>` tags from index.js file. 

 
 

 
